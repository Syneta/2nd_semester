
import React from "react";

export default function DashboardLayout({
    children,
}: {children: React.ReactNode
}) {
    return(
        <section>
            {/*Include Shared UI here e.g. Header or Sidebar */}
            <nav></nav>
            My Expenses
            {children}
        </section>
    )
}

