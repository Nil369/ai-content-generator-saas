"use client";
import HomeNavbar from '@/components/Navbar'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
    <HomeNavbar/>
    <div className='flex items-center justify-center h-screen'>
        <SignIn />
    </div>
    </>
  )
}