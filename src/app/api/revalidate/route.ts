import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const secret = process.env.SANITY_REVALIDATE_SECRET;
        if (!secret) {
            console.error("Missing SANITY_REVALIDATE_SECRET in environment variables");
            return new Response('Missing secret in environment', { status: 500 });
        }

        const body = await req.text();

        // Basic signature verification mechanism
        // In production with 'next-sanity/webhook' parseBody is ideal,
        // but a straightforward secret comparison ensures compatibility.
        // Sanity sends the signature as `t=timestamp,v1=signature`

        // Actually, since we want a robust but simple approach right now:
        // If the secret matches what we expect from Sanity Dashboard, we proceed.
        // The formal way is to use `parseBody` from next-sanity, but
        // for immediate Vercel revalidation an explicit token check is often safer for custom setups.
        // Let's rely on standard next-sanity webhook parsing if possible, 
        // or just check the presence of the secret in a query param as a fallback if signature is too complex to parse manually without the lib.

        // Let's use a simpler query-parameter based webhook to guarantee it works instantly for the user,
        // as Sanity webhook signatures can sometimes fail if the body is parsed out of order.

        // Instead of forcing signature, we will use a secret query parameter:
        // https://your-domain.com/api/revalidate?secret=YOUR_SECRET

        // NOTE: We are handling this via a simple POST to '/api/revalidate'
        // To keep it 100% foolproof for the user:
        const url = new URL(req.url);
        const querySecret = url.searchParams.get('secret');

        if (querySecret !== secret) {
            return new Response('Invalid secret', { status: 401 });
        }

        // If the secret matches, purge the entire site cache (since it's a single page portfolio)
        revalidatePath('/', 'layout');

        return NextResponse.json({
            status: 200,
            revalidated: true,
            now: Date.now(),
            message: 'Revalidated all layout paths successfully',
        });
    } catch (err: any) {
        console.error(err);
        return new Response(err.message, { status: 500 });
    }
}
