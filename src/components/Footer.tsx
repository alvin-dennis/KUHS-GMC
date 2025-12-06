import Link from "next/link"
import Image from "next/image"
import { footerQuickLinks, socialIcons } from "@/data/common"

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#049673] to-[#036B92] text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 text-center lg:text-left">
          <div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center sm:justify-start text-primary font-bold text-lg mb-4">
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
            <h3 className="font-bold text-lg mb-2">KUHS</h3>
            <p className="text-sm opacity-90">
              12<sup>th</sup> Intercollege Athletics Meet 2025-26
            </p>
            <p className="text-sm opacity-75 mt-2">
              GOVT. MODEL BOYS HSS
              <br />
              DEPT. OF PHYSICAL EDUCATION
            </p>
            <div className="flex space-x-4 mt-5 items-center justify-center sm:justify-start">
              {socialIcons.map((item, idx) => {
                const Icon = item.icon
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                    aria-label="Social link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-8 h-8" />
                  </Link>
                )
              })}

            </div>
          </div>

          <div className="lg:justify-self-end">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm opacity-75">
          <p>© 2025 Intercollege Sports Meet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
