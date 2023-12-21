import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Navitems from "./Navitems"
  
const Mobilenav = () => {
  return (
 <nav className="md:hidden">
<Sheet>
  <SheetTrigger className="a;ign-middle">
    
    <Image
    src='/assest/icons/navicon.png'
    alt="menu"
    width={26}
    height={28}
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
    <Image src='/assest/images/rd.png' alt="logo" width={128} height={30}/>
<Separator className="border border-slate-300"/>
<Navitems/>
  </SheetContent>
</Sheet>

 </nav>
  )
}

export default Mobilenav
