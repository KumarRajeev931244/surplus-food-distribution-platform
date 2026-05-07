"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModel from "./AuthModel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { TruckElectric } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "next-auth/react";
import { setUserData } from "@/redux/userSlice";

const Nav_Items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];
export default function Navbar() {
  const pathName = usePathname();
  const { userData } = useSelector((state: RootState) => state.user);
  const [authOpen, SetAuthOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = async () => {
    await signOut({ redirect: false });
    dispatch(setUserData(null))
    setProfileOpen(false)
  };
  return (
    <>
      <nav className="w-full inset-x-0 top-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
        <div className="mx-auto flex  items-center justify-between px-6 py-4">
          <Image
            src="/logo.png"
            alt="logo"
            width={44}
            height={44}
            loading="eager"
          ></Image>
        

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          {Nav_Items.map((item, index) => {
            const active = item.href === pathName;
            return (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium transition ${active ? "text-green-600" : "text-black hover:text-green-600"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3 relative">
          <div>
            {!userData ? (
              <Button
                variant="outline"
                className="rounded-xl cursor-pointer"
                onClick={() => SetAuthOpen(true)}
              >
                Login
              </Button>
            ) : (
              <>
                <Button
                  className="rounded-full bg-black text-white font-bold "
                  onClick={() => setProfileOpen((p) => !p)}
                >
                  {userData.name.charAt(0).toUpperCase()}
                </Button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-14 right-0 min-w-55 rounded-2xl border border-gray-200 bg-white shadow-lg"
                    >
                      <div className="p-5">
                        <p className="font-semibold text-lg">{userData.name}</p>
                        <p className=" uppercase text-gray-500 mb-4">{userData.role}</p>
                        <Button className="w-full flex items-center gap-3 py-3 hover:bg-gray-500 rounded-xl  cursor-pointer" onClick={handleLogout}>Logout</Button>
                      </div>
                      
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
        </div>
      </nav>
      <AuthModel open={authOpen} onClose={() => SetAuthOpen(false)} />
    </>
  );
}
