import React from 'react'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 5 Airbrush Techniques for Beginners",
      description: "Learn the basics of airbrushing to elevate your models",
      excerpt: "Discover the essential airbrushing techniques that every beginner should master...",
      slug: "airbrush-techniques"
    },
    {
      title: "Creating Realistic Weathering Effects",
      description: "Add authenticity to your models with expert weathering",
      excerpt: "Explore various methods to achieve realistic weathering effects on your static models...",
      slug: "weathering-effects"
    },
    {
      title: "Spotlight: WWII Aircraft Modelling",
      description: "A deep dive into modelling iconic WWII planes",
      excerpt: "Uncover the history and techniques behind creating accurate WWII aircraft models...",
      slug: "wwii-aircraft-modelling"
    },
    {
      title: "Mastering Diorama Creation",
      description: "Bring your models to life with stunning dioramas",
      excerpt: "Learn how to plan, build, and detail dioramas that tell a story and showcase your models...",
      slug: "diorama-creation"
    },
    {
      title: "Choosing the Right Paints for Your Project",
      description: "A comprehensive guide to model paints",
      excerpt: "Navigate the world of model paints with our guide to acrylics, enamels, and lacquers...",
      slug: "choosing-model-paints"
    },
    {
      title: "Advanced Scribing Techniques",
      description: "Take your panel lines to the next level",
      excerpt: "Discover professional techniques for creating crisp, scale-accurate panel lines on your models...",
      slug: "advanced-scribing"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Static Modelism Blog</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.excerpt}</p>
                  <Button asChild>
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Techniques</Button>
            <Button variant="outline">Reviews</Button>
            <Button variant="outline">Tutorials</Button>
            <Button variant="outline">Showcases</Button>
            <Button variant="outline">History</Button>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Static Modelism World. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}