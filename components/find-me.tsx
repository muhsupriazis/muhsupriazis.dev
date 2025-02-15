import { SiDiscord, SiGithub, SiInstagram, SiThreads, SiTwitch, SiX } from '@icons-pack/react-simple-icons'
import Link from 'next/link'

export function Social() {
  return(
    <>
      <p className='py-4'>Find me on:</p>
      <div className='flex flex-wrap gap-2'>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiX className='w-4 h-4' />
          <span>Twitter</span>
        </Link>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiGithub className='w-4 h-4' />
          <span>Github</span>
        </Link>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiDiscord className='w-4 h-4' />
          <span>Discord</span>
        </Link>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiInstagram className='w-4 h-4' />
          <span>Instagram</span>
        </Link>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiThreads className='w-4 h-4' />
          <span>Threads</span>
        </Link>
        <Link href={'#'} className='inline-flex items-center flex-grow-0 space-x-2'>
          <SiTwitch className='w-4 h-4' />
          <span>Twitch</span>
        </Link>
      </div>
      <p className='py-4'>Or mail me at <span className='font-[family-name:var(--font-geist-mono)]'>muhsupriazis@gmail.com</span></p>
    </>
  )
}