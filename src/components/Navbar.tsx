'use client'
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModel from "./AuthModel";
import { useState } from "react";

const Nav_Items=["Home","About","How it works","Contact"]
export default function Navbar(){
    const pathName = usePathname()
    const [authOpen,SetAuthOpen] = useState(false)
    return(
        <>
        <nav className="w-full px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md shadow-sm fixed top-0 z-50">
        <Image src={'/logo.png'} alt="logo" width={44} height={44} loading="eager"></Image>
    {/* <h1 className="text-xl font-bold text-green-600">NGO Food Bridge</h1> */}

    <div className="hidden md:flex gap-6 text-gray-700 font-medium">
      {Nav_Items.map((i,index) => {
        let href ;
        if(i=="Home"){
          href = `/`
        }else{
          href = `/${i.toLowerCase()}`;
        }
        const active = href == pathName
        return <Link  key={index} href={href} className={`text-sm font-medium transition ${ active? "text-green-600" : "text-black hover:text-green-600"}`}>{i}</Link>

      })}
      
    </div>

    <div className="flex gap-3">
      <Button variant="outline" className="rounded-xl cursor-pointer" onClick={()=>SetAuthOpen(true)}>Login</Button>
      
    </div>
    
  </nav>
  <AuthModel open={authOpen} onClose={()=>SetAuthOpen(false)}/>
        </>
    )

}
  
