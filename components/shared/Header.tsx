import {  SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import Navitems from "./Navitems"
import Mobilenav from "./Mobilenav"

const Header = () => {
  return (
    <header className="w-full bottom-b"> 
     <div className="wrapper flex items-center justify-between">
        <Link href='/' className="w-36">
            <Image src='/assest/images/rd.png'
             alt="mylogo"
              width={128}
               height={38} />
        </Link>

<SignedIn>
<nav className="md:flex-between hidden w-full max-w-xs">
  <Navitems/>
</nav>

</SignedIn>

<div className="flex w-32 justify-end gap-3">
  <SignedIn>
<UserButton  afterSignOutUrl="/"/>
<Mobilenav/>
  </SignedIn>
<SignedOut>
    <Button asChild className="rounded-full bg-cyan-600" size='lg'>
        <Link href='/ sign-in'>Login</Link>
    </Button>
</SignedOut>

</div>
     </div>
    
    </header>
  )
}

export default Header
