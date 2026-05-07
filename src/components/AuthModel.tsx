'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleDashed, Lock, Mail, User, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import axios from "axios";
import { signIn, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type proType={
    open:boolean,
    onClose:() => void
}
type stepType = "login" | "signup" | "otp"
function AuthModel({open, onClose}:proType){
    const router = useRouter();
    const [step,setStep] = useState<stepType>("login");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("");
    const [otp, setOtp] = useState(["","","","","",""])
    const {data} = useSession()
    console.log(data);
    // signup 
    const handleSignUp = async() => {
        setLoading(true);
        try {
            const {data} = await axios.post("/api/auth/register",{
                name,email,password
            })
            console.log(data);
            setStep("otp")
            setLoading(false)
        } catch (error:any) {
            setLoading(false)
            // console.log(error.response.data.message);
            setError(error?.response?.data?.message || error?.message || "something went wrong")
            
        }
    }

    // verify otp
    const handleVerifyEmail= async() => {
        setLoading(true);
        try {
            const {data} = await axios.post("/api/auth/verify-email",{
                email,otp:otp.join("")
            })
            console.log(data);
            setStep("login")
            setLoading(false)
        } catch (error:any) {
            setLoading(false)
            // console.log(error.response.data.message);
            setError(error?.response?.data?.message || error?.message || "something went wrong")
            
        }
    }


    // Login
    const handleLogin = async() => {
        setLoading(true)
        const res = await signIn("credentials",{
            email,
            password,
            redirect:false
        })
        setLoading(false)
        console.log(res);
    }

    // google
    const handleGoogleLogin = async() => {
        await signIn("google")
    }

    const handleChangeOtp=(index:number,value:string) =>{
        if(!/^[0-9]?$/.test(value)) return
        const updated=[...otp]
        updated[index]=value
        setOtp(updated)
        if(value && index<otp.length-1){
            document.getElementById(`otp-${index+1}`)?.focus()
        }
        if(!value && index>0){
            document.getElementById(`otp-${index-1}`)?.focus()
        }
    }
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
                        <Image src={'/logo.png'} alt="logo" width={44} height={44} loading="eager"></Image>
                        
                        
                    </div>
                    {/* google */}
                    <Button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition cursor-pointer" onClick={handleGoogleLogin}>
                        <Image src={"/google.png"} alt="google" width={20} height={20} ></Image>
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
                                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-sm" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Lock size={18} className="text-gray-500"/>
                                <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-sm" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                                </div>
                                {/* login button */}
                                <Button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition cursor-pointer flex justify-center items-center" onClick={handleLogin} disabled={loading}>{!loading?"Login":<CircleDashed size={18} color="white" className="animate-spin"/>}</Button>
                            </div>
                            <p className="mt-6 text-center text-sm text-gray-500">Don't have an account? <span onClick={()=>setStep("signup")} className="text-black font-medium hover:underline cursor-pointer">Signup</span></p>
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
                                <input type="text" placeholder="Fullname" className="w-full bg-transparent outline-none text-sm" onChange={(e) => setName(e.target.value)} value={name}></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Mail size={18} className="text-gray-500"/>
                                <input type="email" placeholder="Email" className="w-full bg-transparent outline-none text-sm" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                                </div>
                                <div className="flex item-center gap-3 border border-black/20 rounded-xl px-4 py-3">
                                <Lock size={18} className="text-gray-500"/>
                                <input type="password" placeholder="Password" className="w-full bg-transparent outline-none text-sm" onChange={(e) => setPassword(e.target.value)} value={password}></input>
                                </div>
                                {error && <p className="text-red-500">*{error}</p>}
                                <Button className="w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition flex justify-center items-center" onClick={handleSignUp} disabled={loading}>{!loading?"send otp":<CircleDashed size={18} color="white" className="animate-spin"/>}</Button>
                            </div>
                            <p className="mt-6 text-center text-sm text-gray-500">Already have an account? <span onClick={()=>setStep("login")} className="text-black font-medium hover:underline">Login</span></p>
                        </motion.div>
                    )}
                    {/* otp */}
                    {step=="otp" && (
                        <motion.div
                        key="otp"
                        initial={{opacity:0, x:20}}
                        animate={{opacity:1, x:0}}
                        exit={{opacity:0, x:-20}}
                        >
                            <h2 className="text-xl font-semibold">verify Email</h2>
                            <div className="mt-6 flex justify-between gap-2">
                                {
                                    otp.map((digit,i) => (
                                        <input 
                                        key={i}
                                        id={`opt-${i}`}
                                        value={digit}
                                        maxLength={1}
                                        className="w-10 h-12 sm:w-12 text-center text-lg font-semibold rounded-xl bg-white border border-black/20 outline-none"
                                        onChange={(e) => handleChangeOtp(i,e.target.value)}
                                        />
                                    ))}
                            </div>
                             {error && <p className="text-red-500">*{error}</p>}
                            <button className="mt-6 w-full h-11 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition cursor-pointer flex justify-center items-center" onClick={handleVerifyEmail} disabled={loading}>{!loading?"Verify and Create Account":<CircleDashed size={18} color="white" className="animate-spin"/>}</button>

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