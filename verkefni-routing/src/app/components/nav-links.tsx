'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Links() {
    const pathname = usePathname()

    return (
        <nav className="gap-2 flex">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} 
            href="/">
                Home
            </Link>

            <Link
                className={`link ${pathname === '/about' ? 'active' : ''}`}
                href="/about">
                About
            </Link>
            
            <Link
                className= {`link ${pathname === '/dashboard' ? 'active' : ''}`}
                href="/dashboard">
                Dashboard
            </Link>
        </nav>
    )
}