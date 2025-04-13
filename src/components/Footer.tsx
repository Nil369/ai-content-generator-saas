import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
                <div className="flex items-center mb-4 md:mb-0">
                <Image src={"/favicon.png"} alt="logo" width={30} height={30} />
                <span className="font-bold text-xl mx-2">Content Crafter AI</span>
                </div>
            </Link>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Content Crafter AI . All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
