import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) return NextResponse.json({ error: 'Configuración incompleta: falta la llave de Stripe.' }, { status: 500 });
  
  const stripe = new Stripe(secretKey);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: 'price_1T1GMz1eJBWuiYYJgo2N3N9X', quantity: 1 }],
      mode: 'subscription',
      success_url: 'https://google-maps-saas.vercel.app/success',
      cancel_url: 'https://google-maps-saas.vercel.app/',
    });
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("STRIPE_ERROR_DETAIL:", error.message, error.type, error.code);
    return NextResponse.json({ error: `Fallo de Stripe: ${error.message}` }, { status: 500 });
  }
}
