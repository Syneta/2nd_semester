'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}className="px-1 border-black border-2 ">
      Dashboard
    </button>
  )
}
