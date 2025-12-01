import { NextResponse } from 'next/server'

// HubSpot CRM Integration
// This endpoint syncs leads to HubSpot when HUBSPOT_API_KEY is configured

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_API_URL = 'https://api.hubapi.com'

interface HubSpotContact {
  properties: {
    email: string
    firstname?: string
    lastname?: string
    company?: string
    phone?: string
    message?: string
    lead_source?: string
    hours_wasted_weekly?: string
    tasks_to_automate?: string
  }
}

async function createOrUpdateContact(contactData: HubSpotContact) {
  if (!HUBSPOT_API_KEY) {
    console.log('HubSpot not configured, skipping sync')
    return null
  }

  try {
    // Try to create the contact
    const response = await fetch(`${HUBSPOT_API_URL}/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    if (response.ok) {
      return await response.json()
    }

    // If contact exists (409 conflict), try to update
    if (response.status === 409) {
      const email = contactData.properties.email
      const searchResponse = await fetch(
        `${HUBSPOT_API_URL}/crm/v3/objects/contacts/search`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            filterGroups: [{
              filters: [{
                propertyName: 'email',
                operator: 'EQ',
                value: email
              }]
            }]
          }),
        }
      )

      if (searchResponse.ok) {
        const searchData = await searchResponse.json()
        if (searchData.results && searchData.results.length > 0) {
          const contactId = searchData.results[0].id

          // Update the existing contact
          const updateResponse = await fetch(
            `${HUBSPOT_API_URL}/crm/v3/objects/contacts/${contactId}`,
            {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(contactData),
            }
          )

          if (updateResponse.ok) {
            return await updateResponse.json()
          }
        }
      }
    }

    const errorText = await response.text()
    console.error('HubSpot API error:', errorText)
    return null
  } catch (error) {
    console.error('HubSpot sync error:', error)
    return null
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      company,
      phone,
      message,
      source,
      tasks,
      hoursWasted
    } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Parse name into first and last
    const nameParts = (name || '').trim().split(' ')
    const firstname = nameParts[0] || ''
    const lastname = nameParts.slice(1).join(' ') || ''

    const contactData: HubSpotContact = {
      properties: {
        email,
        firstname,
        lastname,
        company: company || '',
        phone: phone || '',
        message: message || '',
        lead_source: source || 'website',
        tasks_to_automate: tasks || '',
        hours_wasted_weekly: hoursWasted || '',
      }
    }

    const result = await createOrUpdateContact(contactData)

    return NextResponse.json({
      success: true,
      message: result ? 'Contact synced to HubSpot' : 'HubSpot not configured',
      hubspotId: result?.id
    })

  } catch (error) {
    console.error('HubSpot endpoint error:', error)
    return NextResponse.json(
      { error: 'Failed to sync contact' },
      { status: 500 }
    )
  }
}
