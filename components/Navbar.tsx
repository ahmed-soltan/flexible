import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logo.svg'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'
const Navbar = () => {
    const session = {}
  return (
    <nav className='navbar flexBetween'>
        <div className='flex-1 flexStart gap-10'>
            <Link href={"/"}>
                <Image src={logo} alt='logo' width={115} height={40} />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
              {NavLinks.map((navlink)=>{
                return (
                  <li key={navlink.key}>
                    <Link href={navlink.href}>
                     {navlink.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
        </div>

        <div className='flexCenter'>
            {session ? (
                <div className='flex-1 flexStart gap-7'>
                    <Link href={"/user-profile"}>user photo</Link>
                    <Link href={"/create-project"}>Share Work</Link>
                    <Link href={"/logout"}>Logout</Link>
                </div>
            ):(
               <AuthProvider/>
            )}
        </div>
    </nav>
  )
}

export default Navbar