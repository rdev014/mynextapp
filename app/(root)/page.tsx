import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
   <>
   
   <section className="bg-slate-100  bg-dotted-pattern bg-contain py-5 md:py-10">
<div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
  <div className="flex flex-col gap-8 justify-center">
    <h1 className="h1-bold">Get Connect And Express!</h1>
    <p className='p-regular-20 md:p-regular-24'> Lets's get connected to spread and get in touch together.</p>
    <Button size="lg" asChild className="butto w-full sm:w-fit bg-blue-800">
      <Link href='#event'>Explore</Link>
    </Button>
  </div>
  <Image 
  src='/assest/images/connect.png'
  alt='herologo'
  width={1000}
  height={1000}
  className="maz-h-[70vh] object-contain object-center 2xl:m-h-[50vh]"
  />
</div>
   </section>

   <section id='events' className="wrapper my-8 flex flex-col gap-9 md:gap-12">
    <h2 className="h2-bold"> Trusted by <br /> Thousands of peroples</h2>
    <div className="flex w-full flex-col gap-5 md:flex-row">
      Search
      CategoeryFilter
    </div>
   </section>
   
   </>
  )
}