import React from 'react'
import Link from 'next/link'
import { Button } from "../components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">About Static Modelism World</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Static Modelism World, we are passionate about bringing the art and craft of static modelism to enthusiasts around the globe. Our mission is to provide a comprehensive resource for both beginners and experienced modelers, fostering a community where knowledge, techniques, and inspiration are freely shared.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside mb-4">
            <li>In-depth tutorials and guides for all skill levels</li>
            <li>Reviews of the latest model kits and tools</li>
            <li>A platform for modelers to showcase their work</li>
            <li>News and updates from the world of static modelism</li>
            <li>A vibrant community of like-minded enthusiasts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="mb-4">
            Our team consists of passionate modelers, each bringing their unique expertise and experience to the table. From military vehicle specialists to sci-fi diorama creators, we cover a wide range of modeling interests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-4">
            Whether you're just starting out or you've been building models for years, there's a place for you in our community. Join us in celebrating the art of static modelism!
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Static Modelism World. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}