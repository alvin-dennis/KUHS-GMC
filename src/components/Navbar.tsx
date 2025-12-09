"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { navItems } from "@/data/common"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <div className="w-10 h-10  rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="KUHS Logo"
                width={500}
                height={500}
                sizes="(max-width: 768px) 150px,
         (max-width: 1024px) 250px,
         500px"
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${pathname === item.href ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="p-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors">
              <Link href={"#contact"}>
              <Phone className="w-5 h-5" />
            </Link>
            </Button>

            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
