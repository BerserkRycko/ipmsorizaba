import React, { useState } from 'react'
import Image from "next/image"
import catalogoModelos from '../data/cataloge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Badge } from "../components/ui/badge"

const categories = [
  "Planes", "Ships", "Vehicles", "Tanks", "Helicopter", "Fantasy", "Sci-Fi", "Space Vehicles", "Dioramas",
]

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Galería</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catalogoModelos
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle>{selectedItem.name}</DialogTitle>
              <DialogDescription>{selectedItem.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                width={700}
                height={300}
                className="w-full h-100 object-cover rounded-lg"
              />
              <p className="mt-2"><strong>Scale:</strong> {selectedItem.scale}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedItem.labels.map((label) => (
                  <Badge key={label} variant="secondary">{label}</Badge>
                ))}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}