'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Film } from 'lucide-react'
const Links = () => {
  const pathname = usePathname()
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between  '>
      <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Film  color='#2563eb' />
        <h1 className='font-semibold text-xl text-[#2563eb] capitalize '>
          Prime Video
        </h1>
      </Link>

      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href='/home'
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/home' ? 'active ' : ''
          }`}
        >
          Home
        </Link>

        <Link
          href='https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_str_hom?contentType=home&contentId=store'
          target="_blank"
          className={`flex items-center  text-xl hover:text-primary `}
        >
         Store
        </Link>
        <Link
          href='https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_live?contentType=home&contentId=live'
          target="_blank"
          className={`flex items-center  text-xl hover:text-primary `}
        >
         Live
        </Link>
        <Link
          href='https://www.primevideo.com/categories/ref=atv_hom_pri_c_9zZ8D2_cat'
          target="_blank"
          className={`flex items-center  text-xl hover:text-primary `}
        >
         Categories
        </Link>
        <Link
          href='https://www.amazon.pl/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Feu.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3D1sg9AXidpcPNe9pe54dlojCIBqVj7oDmBALPjQVxVCXVBcAAAAAQAAAABmuRjjcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3D%2Fmystuff%3Fref_%253Datv_auth_red_aft&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_pl&openid.mode=checkid_setup&countryCode=PL&siteState=258-5240995-7130464&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'
          target="_blank"
          className={`flex items-center  text-xl hover:text-primary `}
        >
         My Stuff
        </Link>
      </div>
    </div>
  )
}

export default Links
