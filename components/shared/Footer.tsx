import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (

   <footer className="border-t">
    <div className="flex-center wrapper flex-between flex flex-col ga-4 p- text-center sm:flex-row">
      <Link href='/'>
        <Image
         src='/assest/images/rd.png'
         alt="footerlogo"
         width={128}
         height={38}
         />
      </Link>

      <p>2023 Dev. All rights reserved.</p>
    </div>

   </footer>
  )
}

export default Footer
