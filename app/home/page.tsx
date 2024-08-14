'use client'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SeriesData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
const Home = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <main className=' flex min-h-screen flex-col items-center justify-between px-24 max-lg:px-12  py-8 gap-8 '>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {SeriesData.map((serie) => (
            <CarouselItem key={serie.id}>
              <div className='p-1'>
                <Card className=' '>
                  <CardContent className='relative flex aspect-video  items-center justify-center p-6 '>
                    <Image
                      src={serie.Series_Poster_one}
                      alt='poster'
                      fill={true}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute z-10 w-full text-4xl font-semibold flex justify-center text-white'>
                      {serie.Series_Name}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 '>
        {SeriesData.map((serie) => (
          <TooltipProvider key={serie.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={serie.Series_Trailer}
                  target='_blank'
                >
                  <Card className=' '>
                    <CardContent className='relative flex aspect-video  items-center justify-center p-6 '>
                      <Image
                        src={serie.Series_Poster_one}
                        alt='poster'
                        fill={true}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute z-10 w-full text-xl font-semibold flex justify-center text-white'>
                        {serie.Series_Name}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </TooltipTrigger>
              <TooltipContent className='w-full  text-xl p-4 '>
                <p>{serie.Series_Genre}</p>
                <p>
                  <span className='text-gray-400 mr-2'>Year of production</span>
                  {serie.Series_RelaseYear}
                </p>
                <p>
                  <span className='text-gray-400 mr-2'>Rating</span>
                  {serie.Series_Rating}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </main>
  )
}
export default Home
