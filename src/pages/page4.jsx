import React, { useState } from 'react'
import Header from '../components/header';
import Input from '../components/Input'
import Footer from '../components/footer';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import Button from '../components/Button'

function Page4() {
    return (
        <div className='w-[380px] ' >
            <Header head1='Create Profile' head2='Create a free profile in less than 5 minutes' gap='gap-3' />
            <div className=" flex flex-col font-semibold gap-3 mt-4">
                <Button img={<FcGoogle className='text-2xl' />} text='Sign in with Google' />
                <Button img={<FaXTwitter className='text-2xl' />} text='Sign in with X (Twitter)' />
            </div>
            <div className="text-center text-gray-400 w-full">
                _________________________OR________________________
            </div>
            <div className='flex flex-col gap-4 mt-4'>

                <div className="">
                    <div className="font-semibold">Email*</div>
                    <div className=""><Input place='Email address' class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                </div>
                <div className="">
                    <div className="font-semibold" id='password'>Password*</div>
                    <div className=""><Input place='Enter your password' class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                </div>


            </div>
            <Footer img={<FiLock />} w1='w-[180px] font-semibold flex gap-1' w2='w-[120px]' part1='Forgot Password?' part2='Sign in' />
        </div>
    )
}

export default Page4