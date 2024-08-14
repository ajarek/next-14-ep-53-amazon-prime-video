import { Film } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-4 px-24 py-8  '>
      <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Film color='#2563eb' />
        <h1 className='font-semibold text-xl text-[#2563eb] capitalize '>
          prime video
        </h1>
      </Link>
      <div>© 1996 - 2024 Amazon.com, Inc. or its affiliates</div>
    </div>
  )
}

export default Footer
