import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log("Requested URL:", request.nextUrl.href)

    // puoi modificare la response, fare rewrite, redirect, ecc.
    return NextResponse.next()
}

// opzionale: limitare le route dove applicarlo
// export const config = {
//     matcher: ['/en/it', '/en/de', '/de/de'],
// }
