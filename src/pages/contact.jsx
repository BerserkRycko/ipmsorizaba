import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-4">
            We'd love to hear from you! Whether you have a question about static modelism, need help with a technique, or just want to share your latest creation, feel free to reach out.
          </p>
        </section>

        <section className="mb-8">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What's this about?" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." className="h-32" />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Other Ways to Connect</h2>
          <ul className="list-disc list-inside">
            <li>Follow us on social media for daily inspiration and tips</li>
            <li>Join our forum to discuss techniques with other modelers</li>
            <li>Subscribe to our newsletter for the latest updates and exclusive content</li>
          </ul>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Static Modelism World. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}