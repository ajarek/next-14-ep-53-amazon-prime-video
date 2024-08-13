'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {SeriesData} from '@/data/data'
import Image from "next/image"
const Home=()=> {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-8 ">
    <Carousel
      plugins={[plugin.current]}
     className="w-full max-w-4xl   "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {SeriesData.map((serie) => (
          <CarouselItem key={serie.id}>
            <div className="p-1">
              <Card className=" ">
                <CardContent className="relative flex aspect-video  items-center justify-center p-6 ">
                  <Image src={serie.Series_Poster_one} alt="poster" fill={true} className="w-full h-full object-cover" />
                  <div className="absolute z-10 w-full text-4xl font-semibold flex justify-center">{serie.Series_Name}</div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </main>
  )
}
export default Home