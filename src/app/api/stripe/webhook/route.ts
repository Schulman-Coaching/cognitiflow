import { NextResponse } from 'next/server'

// Stripe Webhook Handler
// Configure webhook endpoint in Stripe Dashboard: https://dashboard.stripe.com/webhooks
// Listen for: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET

async function verifyStripeSignature(payload: string, signature: string): Promise<boolean> {
  // In production, use Stripe SDK to verify webhook signature
  // This is a simplified version - use stripe.webhooks.constructEvent() in production
  if (!STRIPE_WEBHOOK_SECRET) {
    console.warn('Stripe webhook secret not configured')
    return false
  }
  return true
}

export async function POST(request: Request) {
  try {
    const payload = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 400 }
      )
    }

    // Verify webhook signature
    const isValid = await verifyStripeSignature(payload, signature)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    const event = JSON.parse(payload)

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        console.log('Checkout completed:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          subscriptionId: session.subscription,
          customerId: session.customer,
        })

        // TODO: Create user account, grant access, send welcome email
        // This would typically:
        // 1. Create/update user in your database
        // 2. Associate subscription with user
        // 3. Send welcome email with onboarding instructions
        // 4. Sync to HubSpot/CRM
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        console.log('Subscription updated:', {
          subscriptionId: subscription.id,
          status: subscription.status,
          planId: subscription.items.data[0]?.price.id,
        })

        // TODO: Update user's subscription status in database
        // Handle plan upgrades/downgrades
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        console.log('Subscription cancelled:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
        })

        // TODO: Revoke user access, send cancellation email
        // Consider offering a win-back incentive
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        console.log('Payment failed:', {
          invoiceId: invoice.id,
          customerId: invoice.customer,
          attemptCount: invoice.attempt_count,
        })

        // TODO: Send payment failure notification to customer
        // Implement dunning (retry) logic
        break
      }

      case 'customer.subscription.trial_will_end': {
        const subscription = event.data.object
        console.log('Trial ending soon:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          trialEnd: new Date(subscription.trial_end * 1000),
        })

        // TODO: Send trial ending reminder email
        // Encourage conversion
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

// Stripe requires raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
}
