import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from '../components/ui/button'
import { Input } from "../components/ui/input"
import catalogoModelos from '../data/cataloge'
import { Plane, Palette, Scissors } from "lucide-react"

export default function StaticModelismPage() {
  const featuredModels = catalogoModelos.slice(-3);
  return (
    <div className="App flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-img-hero relative h-[50vh] bg-gray-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center" />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Descubre el arte del Modelismo</h2>
            <p className="text-xl md:text-2xl mb-8">Construye la historia de tu vida, un Modelo a la vez</p>
            <Button size="lg" className="w-fit" asChild>
              <Link href="/getting-started">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">¿Qué es el Modelismo Estático?</h2>
            <p className="text-lg mb-4">
            El modelismo estático es el arte de crear réplicas en miniatura de diversos temas, incluyendo aviones, vehículos, barcos y figuras. Combina artesanía, precisión histórica y expresión artística.
            </p>
            <p className="text-lg">
            Los Modelistas ensamblan y pintan meticulosamente estos modelos, prestando atención a cada detalle para crear representaciones impresionantes de sus temas.
            </p>
          </div>
        </section>

        {/* Featured Models */}
         {/* Sección de Modelos Destacados */}
         <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Modelos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredModels.map((modelo) => (
                <Card key={modelo.id}>
                  <CardHeader>
                    <CardTitle>{modelo.title}</CardTitle>
                    <CardDescription>{modelo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={modelo.image} alt={modelo.title} className="w-full h-48 object-cover rounded-md" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/gallery">Ver más modelos</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Getting Started */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Comenzando con el Modelismo Estático</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Plane className="w-10 h-10 mb-2" />
                  <CardTitle>Elige tu Tema</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Selecciona un kit de modelo que te interese, ya sea un avión, barco, vehículo o figura.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Scissors className="w-10 h-10 mb-2" />
                  <CardTitle>Ensambla el Kit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Corta y ensambla cuidadosamente las piezas siguiendo las instrucciones del kit.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Palette className="w-10 h-10 mb-2" />
                  <CardTitle>Pinta y Detalla</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Aplica pintura y añade calcomanías para darle vida a tu modelo con colores y marcas realistas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Últimas entradas de nuestro blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top 5 Airbrush Techniques for Beginners</CardTitle>
                  <CardDescription>Learn the basics of airbrushing to elevate your models</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Discover the essential airbrushing techniques that every beginner should master...</p>
                  <Button asChild>
                    <Link href="/blog/airbrush-techniques">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Creating Realistic Weathering Effects</CardTitle>
                  <CardDescription>Add authenticity to your models with expert weathering</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Explore various methods to achieve realistic weathering effects on your static models...</p>
                  <Button asChild>
                    <Link href="/blog/weathering-effects">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spotlight: WWII Aircraft Modelling</CardTitle>
                  <CardDescription>A deep dive into modelling iconic WWII planes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Uncover the history and techniques behind creating accurate WWII aircraft models...</p>
                  <Button asChild>
                    <Link href="/blog/wwii-aircraft-modelling">Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/blog">Ir al blog</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Mantente actualizado</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest tips, techniques, and model kit releases.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 IPMS Orizaba. Todos los derechos reservados.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="/about" className="hover:underline">Acerca de IPMS Orizaba</Link>
              <Link href="/gallery" className="hover:underline">Galería</Link>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}