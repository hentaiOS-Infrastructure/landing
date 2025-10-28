'use client'

import { usePathname } from 'next/navigation'

export function ConditionalLayout({ children, interClassName }: { children: React.ReactNode, interClassName: string }) {
    const pathname = usePathname()

    if (pathname.startsWith('/admin')) {
        return <>{children}</>
    }

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </head>
            <body
                className={`min-h-screen overscroll-x-none bg-neutral-50 ${interClassName}`}
                style={{
                    textRendering: 'optimizeLegibility',
                }}
            >
                {children}
            </body>
        </html>
    )
}
