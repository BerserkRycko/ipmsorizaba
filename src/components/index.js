import React from 'react'
import img112 from '../assets/_RYC0112.JPG'
import img145 from '../assets/_RYC0145.JPG'
import img153 from '../assets/_RYC0153.JPG'
import Navbar from './commons/Navbar'
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Plane, Ship, Truck, Palette, Scissors } from "lucide-react"

export default function StaticModelismPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <Navbar />
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[100vh] bg-gray-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center bg-img-hero" />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Descubre el arte del modelismo</h2>
            <p className="text-xl md:text-2xl mb-8">Construye la historia de tu vida, un modelo a la vez.</p>
            <Button size="lg" className="w-fit">Empecemos</Button>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">¿Qué es el modelismo estático?</h2>
            <p className="text-lg mb-4">
              El modelismo estático es el arte de crear replicas en miniaturas de muchos temas, incluyendo aircraft, vehículos, barcos, y figuras. Esto combina artesanía, conocimiento historico, y expresión artistica.
            </p>
            <p className="text-lg">
            Los aficionados ensamblan y pintan meticulosamente estos modelos, prestando atención a cada detalle para crear representaciones impresionantes de sus temas.
            </p>
          </div>
        </section>

        {/* Featured Models */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Modelos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>WWII Fighter Plane</CardTitle>
                  <CardDescription>1/48 scale Spitfire Mk.IX</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={img112} alt="Spitfire model" className="w-full h-48 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Naval Warship</CardTitle>
                  <CardDescription>1/350 scale USS Missouri</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={img145} alt="USS Missouri model" className="w-full h-48 object-cover rounded-md" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Armored Vehicle</CardTitle>
                  <CardDescription>1/35 scale T-34/85 Tank</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={img153} alt="T-34 Tank model" className="w-full h-48 object-cover rounded-md" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Comenzando con el modelismo estático</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Plane className="w-10 h-10 mb-2" />
                  <CardTitle>Elije tu tema</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Seleccione un modelo que le interese, ya sea un avión, un barco, un vehículo o una figura.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Scissors className="w-10 h-10 mb-2" />
                  <CardTitle>Armar el kit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Recorta y monta las piezas con cuidado siguiendo las instrucciones del kit.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Palette className="w-10 h-10 mb-2" />
                  <CardTitle>Pinta y detalla</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Aplique pintura y añada calcomanías para dar vida a su modelo con colores y marcas realistas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Mantente actualizado</h2>
            <p className="mb-6">Suscribete a nuestro newsletter para conocer los últimos tips, tecnicas, y lanzamientos de kits.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Email" className="flex-grow" />
              <Button type="submit" variant="secondary">Subscribete</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 IPMS Orizaba. Todos los derechos reservados.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:underline">Acerca de </a>
              <a href="#" className="hover:underline">Contacto </a>
              <a href="#" className="hover:underline">Políticas de privacidad</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}