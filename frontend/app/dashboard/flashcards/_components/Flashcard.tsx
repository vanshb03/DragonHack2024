'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  CarouselItem
} from "@/components/ui/carousel"
import { useState } from "react"

export default function Flashcard({ question, answer } : { question: string, answer: string }) {
  const [flipped, setFlipped] = useState(false)

  // w-[814px] h-[428px]
  return (
    <CarouselItem className={flipped ? "answer" : 'question'}>
      <button className="p-1" onClick={() => {
        setFlipped(!flipped)
      }}>
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            {flipped ? <span className="text-4xl font-semibold flipped">{answer}</span> :
            <span className="text-4xl font-semibold">{question}</span>}
          </CardContent>
        </Card>
      </button>
    </CarouselItem>
  )
}