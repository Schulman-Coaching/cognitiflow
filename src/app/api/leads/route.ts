import { NextResponse } from 'next/server'

// In-memory storage for demo (replace with database in production)
const leads: Lead[] = []

interface Lead {
  id: string
  name: string
  email: string
  company?: string
  message: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'won' | 'lost'
  createdAt: string
  updatedAt: string
  notes?: string
  assignedTo?: string
}

// GET - Retrieve all leads
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const source = searchParams.get('source')

  let filteredLeads = [...leads]

  if (status) {
    filteredLeads = filteredLeads.filter(lead => lead.status === status)
  }

  if (source) {
    filteredLeads = filteredLeads.filter(lead => lead.source === source)
  }

  // Sort by most recent first
  filteredLeads.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return NextResponse.json({
    leads: filteredLeads,
    total: filteredLeads.length,
    stats: {
      new: leads.filter(l => l.status === 'new').length,
      contacted: leads.filter(l => l.status === 'contacted').length,
      qualified: leads.filter(l => l.status === 'qualified').length,
      proposal: leads.filter(l => l.status === 'proposal').length,
      won: leads.filter(l => l.status === 'won').length,
      lost: leads.filter(l => l.status === 'lost').length,
    }
  })
}

// POST - Create a new lead
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, source = 'contact_form' } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check for duplicate email
    const existingLead = leads.find(l => l.email.toLowerCase() === email.toLowerCase())
    if (existingLead) {
      // Update existing lead with new message
      existingLead.message = message
      existingLead.updatedAt = new Date().toISOString()
      existingLead.notes = `${existingLead.notes || ''}\n\n[${new Date().toLocaleDateString()}] Follow-up inquiry: ${message}`

      return NextResponse.json({
        success: true,
        message: 'Lead updated with new inquiry',
        lead: existingLead,
        isUpdate: true
      })
    }

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      company,
      message,
      source,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    leads.push(newLead)

    return NextResponse.json({
      success: true,
      message: 'Lead created successfully',
      lead: newLead,
      isUpdate: false
    })

  } catch (error) {
    console.error('Lead creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}

// PATCH - Update lead status or details
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status, notes, assignedTo } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      )
    }

    const leadIndex = leads.findIndex(l => l.id === id)
    if (leadIndex === -1) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      )
    }

    const lead = leads[leadIndex]

    if (status) lead.status = status
    if (notes) lead.notes = notes
    if (assignedTo) lead.assignedTo = assignedTo
    lead.updatedAt = new Date().toISOString()

    return NextResponse.json({
      success: true,
      message: 'Lead updated successfully',
      lead
    })

  } catch (error) {
    console.error('Lead update error:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}
