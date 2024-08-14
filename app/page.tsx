import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' flex min-h-screen flex-col items-center justify-between  '>
      <div className='w-full h-96 max-lg:h-72 flex flex-col justify-center items-start px-24 max-lg:px-4 gap-8 bg-[url("/images/Hero1.jpg")] bg-cover bg-center text-white '>
        <h1 className='text-5xl max-lg:text-3xl font-extrabold'>
          Welcome To Prime Video
        </h1>
        <p className='text-xl tracking-wide max-lg:w-3/4'>
          Watch the latest movies,
          <br /> TV shows, and award-winning Amazon Originals
        </p>
        <Button className='bg-[#2563eb] text-white hover:bg-[#3977fd]'>
          Join Prime Annual at $24.99/month
        </Button>
      </div>
      <div className='w-full h-96 max-lg:h-72 flex flex-col justify-center items-start px-24 max-lg:px-4 gap-8 bg-[url("/images/Hero2.jpg")] bg-cover bg-center text-white '>
        <h1 className='text-5xl max-lg:text-3xl font-extrabold'>
          Movie Rental on Prime Video
        </h1>
        <p className='text-xl tracking-wide max-lg:w-3/4'>
          Early Access to Movies,
          <br /> before digital subscription
        </p>
        <Button className='bg-[#2563eb] text-white hover:bg-[#3977fd]'>
          Rent Now
        </Button>
      </div>
      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8 px-24 max-lg:px-4 py-8'>
        <div className='flex flex-col justify-center items-start gap-8'>
          <h1 className='text-5xl max-lg:text-3xl font-extrabold'>
            Your Favorite channels all in one place
          </h1>
          <p className='text-xl tracking-wide '>
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4 p-4'>
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
          <Image
            src='/images/Channel1.jpg'
            width={213}
            height={147}
            alt='Hero'
          />
        </div>
      </div>
      <div className='w-full h-96 max-lg:h-[480px] flex  flex-col justify-center items-end px-24 max-lg:px-4 gap-8 bg-[url("/images/Firestick.jpg")] bg-cover bg-center  text-white '>
        <h1 className='w-1/2 max-lg:w-full text-5xl max-lg:text-3xl font-extrabold'>
          Event better With Fire TV Stick
        </h1>
        <p className='w-1/2 max-lg:w-full text-xl tracking-wide max-lg:bg-[rgba(0,0,0,0.5)]'>
          The biggest movies and TV shows are always better on a big screen.
          Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press
          the voice button on the remote and say the name of the title you want
          to watch to find it in seconds.
        </p>
        <Button className='bg-[#2563eb] text-white hover:bg-[#3977fd]'>
          Join Prime Annual at $24.99/month
        </Button>
      </div>
    </main>
  )
}
