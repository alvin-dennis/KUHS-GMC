import { contacts } from "@/data/common";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12">
          Reach out for event information, <br />
          participation support or general queries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-4 rounded-lg border border-border"
              >
                <div>
                  <span className="text-foreground font-medium">{contact.name}</span>
                  <p className="text-sm text-muted-foreground">{contact.role}</p>
                </div>
                <Link
                  href={`tel:${contact.phone}`}
                  className="text-primary hover:underline font-semibold ml-auto"
                >
                  {contact.phone}
                </Link>
              </div>
            ))}
          </div>

          <div className="h-80 rounded-lg overflow-hidden">
            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" />
          </div>
        </div>
      </div>
    </section>
  )
}
