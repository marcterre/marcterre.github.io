"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const cards = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
  { title: "Card 4", content: "Content for Card 4" },
]

export default function MobileCardCarousel() {
  return (
    <div className="w-full max-w-sm mx-auto px-4 py-8">
      <Carousel className="w-full">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index}>
              <Card className="border-2 border-primary">
                <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-center">{card.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

