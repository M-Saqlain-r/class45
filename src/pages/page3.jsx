import React, { useState } from 'react'
import Header from '../components/header';
import Input from '../components/Input'
import Footer from '../components/footer';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import Button from '../components/Button'
function Page3() {
    const password = (event) => {
        const pass = event.target.value;

        const bars = [
            document.getElementById('1'),
            document.getElementById('2'),
            document.getElementById('3'),
            document.getElementById('4')
        ];

        let strength = 0;

        if (pass.length > 5) strength++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
        if (/\d/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;

        for (let i = 0; i < bars.length; i++) {
            let baseClass = 'h-[9px] rounded-full w-[77px] transition-all'; // Your base Tailwind styles

            if (i < strength) {
                if (strength === 1) {
                    bars[i].className = baseClass + ' bg-red-500';
                } else if (strength === 2) {
                    bars[i].className = baseClass + ' bg-yellow-500';
                } else if (strength === 3) {
                    bars[i].className = baseClass + ' bg-green-500';
                } else if (strength === 4) {
                    bars[i].className = baseClass + ' bg-blue-600';
                }
            } else {
                bars[i].className = baseClass + ' bg-gray-300';
            }
        }
    };

    return (
        <div className='w-[350px] ' >
            <Header head1='Create Profile' head2='Create a free profile in less than 5 minutes' gap='gap-3' />
            <div className=" flex flex-col font-semibold gap-3 mt-4">
                <Button img={<FcGoogle className='text-2xl' />} text='Sign up with Google' />
                <Button img={<FaXTwitter className='text-2xl' />} text='Sign up with X (Twitter)' />
            </div>
            <div className="text-center text-gray-400 w-full">
                _________________________OR________________________
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='flex justify-between'>
                    <div className="">
                        <div className="font-semibold">First name*</div>
                        <div className=""><Input place='first' class='border-gray-500 pl-2 border-1 outline-purple-700 rounded-lg h-[35px] w-[170px] ' /></div>
                    </div>
                    <div className="">
                        <div className="font-semibold">Last name*</div>
                        <div className=""><Input place='last' class='border-gray-500 pl-2 border-1 outline-purple-700 rounded-lg h-[35px] w-[170px] ' /></div>
                    </div>
                </div>
                <div className="">
                    <div className="font-semibold">Email*</div>
                    <div className=""><Input place='Enter Email' class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                </div>
                <div className="">
                    <div className="font-semibold" id='password'>Password*</div>
                    <div className=""><Input place='Must be 8 characters' onChnage={password} class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                </div>
                <div className=" flex justify-between">
                    <div id='1' className="w-[77px] rounded-2xl bg-gray-300 h-[9px]"></div>
                    <div id='2' className="w-[77px] rounded-2xl bg-gray-300 h-[9px]"></div>
                    <div id='3' className="w-[77px] rounded-2xl bg-gray-300 h-[9px]"></div>
                    <div id='4' className="w-[77px] rounded-2xl bg-gray-300 h-[9px]"></div>
                </div>

            </div>
            <Footer img={<FiLock />} w1='w-[160px] font-semibold' w2='w-[120px]' part1='Forgot Password?' part2='Create profile' />
        </div>
    )
}

export default Page3