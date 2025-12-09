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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.1078276377925!2d76.0738894!3d10.6487307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7954601c8b42b%3A0x735c8cef28570b2b!2sSenior%20Ground%20GMBHSS%20KUNNAMKULAM!5e0!3m2!1sen!2sin!4v1765259743123!5m2!1sen!2sin" width="600" height="450" />
          </div>
        </div>
      </div>
    </section>
  )
}
