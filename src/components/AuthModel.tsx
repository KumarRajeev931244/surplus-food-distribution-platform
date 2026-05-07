'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Mail, User, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

type proType={
    open:boolean,
    onClose:() => void
}
type stepType = "login" | "signup" | "otp"
function AuthModel({open, onClose}:proType){
    const [step,setStep] = useState<stepType>("login");
    return(
       <AnimatePresence>
       {open && (
        <>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        // onClick={onClose}
        className="fixed inset-0 z-90 bg-black/80 backdrop-blur-md"
        >
            <motion.div
            initial={{opacity:0, scale:0.95, y:40}}
            animate={{opacity:1,scale:1, y:0}}
            transition={{duration:0.35 , ease:"easeOut"}}
            exit={{opacity:0, scale:0.95, y:40}}
            className="fixed inset-0 z-100 flex items-center justify-center px-4"
            >
                <div className="relative w-full max-w-md rounded-3xl bg-white border border-black/10 shadow-[0_40px_100px_rgba(0,0,0,0.35)] p-6 sm:p-8 text-black ">
                <div className="absolute right-4 top-4 text-gray-500 hover:text-black transition" onClick={onClose}>
                    <X size={20}/>
                    </div>
                    <div className="mb-6 text-center flex justify-center">
                        <Image src={'/logo.png'} alt="logo" width={44} height={44} ></Image>
                        
                        
                    </div>
                    {/* google */}
                    <Button className="w-full h-11 rounded-xl border border-balck/20 flex items-center justify-center gap-3 text-sm font-semibold hover:text-gray-400 transition">
                        <Image src={"/google.png"} alt="google" width={20} height={20}></Image>
                        <span>continue with google</span>
                    </Button>
                    {/* dividor */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-black/10"></div>
                        <div className="text-xs text-gray-500">OR</div>
                        <div className="flex-1 h-px bg-black/10"></div>
                    </div>
                    <div>
                        {/* login */}
                        {step == "login" && (
                        <motion.div
                        initial={{opacity:0, x:20}}
                        animate={{opacity:1, x:0}}
                        >
                            <h1 className="text-xl font-semibold"> welcome back</h1>
                            <div className="mt-5 space-y-4">
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Mail size={18} className="text-gray-500"/>
                                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-sm"></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Lock size={18} className="text-gray-500"/>
                                <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-sm"></input>
                                </div>
                                <Button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition">Login</Button>
                            </div>
                            <p className="mt-6 text-center text-sm text-gray-500">Don't have an account? <span onClick={()=>setStep("signup")} className="text-black font-medium hover:underline">Signup</span></p>
                        </motion.div>
                    )}
                    {/* signup */}
                      {step == "signup" && (
                        <motion.div
                        initial={{opacity:0, x:20}}
                        animate={{opacity:1, x:0}}
                        >
                            <h1 className="text-xl font-semibold"> create Account</h1>
                            <div className="mt-5 space-y-4">
                                {/* user */}
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <User size={18} className="text-gray-500"/>
                                <input type="text" placeholder="Fullname" className="w-full bg-transparent outline-none text-sm"></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Mail size={18} className="text-gray-500"/>
                                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-sm"></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Lock size={18} className="text-gray-500"/>
                                <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-sm"></input>
                                </div>
                                <Button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition">Sign up</Button>
                            </div>
                            <p className="mt-6 text-center text-sm text-gray-500">Already have an account? <div onClick={()=>setStep("login")} className="text-black font-medium hover:underline">Login</div></p>
                        </motion.div>
                    )}
                    </div>

                </div>

            </motion.div>

        </motion.div>
        </>
       )}
       </AnimatePresence> 
    )
}
export default AuthModel