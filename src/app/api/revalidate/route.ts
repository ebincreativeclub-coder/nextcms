import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

async function handleRevalidate(req: NextRequest) {
    try {
        const secret = process.env.SANITY_REVALIDATE_SECRET;
        if (!secret) {
            console.error("Missing SANITY_REVALIDATE_SECRET in environment variables");
            return new Response('Missing secret in environment', { status: 500 });
        }

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

export async function POST(req: NextRequest) {
    return handleRevalidate(req);
}

export async function GET(req: NextRequest) {
    return handleRevalidate(req);
}
