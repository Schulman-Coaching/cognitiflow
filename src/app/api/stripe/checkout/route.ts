import { NextResponse } from 'next/server'

// Stripe Checkout Session Creation
// Requires STRIPE_SECRET_KEY environment variable

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

interface CheckoutRequest {
  priceId: string
  email?: string
  successUrl?: string
  cancelUrl?: string
}

export async function POST(request: Request) {
  try {
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      )
    }

    const body: CheckoutRequest = await request.json()
    const { priceId, email, successUrl, cancelUrl } = body

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    // Create Stripe Checkout Session
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'mode': 'subscription',
        'payment_method_types[0]': 'card',
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'success_url': successUrl || `${process.env.NEXT_PUBLIC_URL || 'https://cognitiflow.ai'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': cancelUrl || `${process.env.NEXT_PUBLIC_URL || 'https://cognitiflow.ai'}/pricing`,
        'allow_promotion_codes': 'true',
        'billing_address_collection': 'required',
        'subscription_data[trial_period_days]': '14',
        ...(email && { 'customer_email': email }),
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Stripe API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      )
    }

    const session = await response.json()

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
