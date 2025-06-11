import React, { useState } from 'react'
import Header from '../components/header';
import Input from '../components/Input'
import Footer from '../components/footer';
import { BiBasketball } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

function Page2() {

    const Focus = (event) => {
        let currentId = parseInt(event.target.id)
        // console.log(event.target.value);
        if (event.target.maxLength === 1 && currentId < 6 && event.target.value.length === 1) {
            let nextId = currentId + 1;
            let focus = document.getElementById(nextId);
            focus.focus();
        }
        else if (event.target.value.length === 0 && currentId > 1) {
            let prevId = currentId - 1;
            let focus1 = document.getElementById(prevId);
            focus1.focus();
        }
    };

    return (
        <div className='w-[400px]'>
            <Header gap='gap-3' head1='Enter verification code' head2='Enter the 6 digit code from your authenticator.' />
            <div className='flex justify-around mt-5'>
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='1' />
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='2' />
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='3' />
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='4' />
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='5' />
                <Input onChnage={Focus} place='' length='1' class='w-[50px] h-[60px] outline-purple-500 outline-1 border-purple-600 border-2 rounded-lg text-center text-3xl ' keys='6' />
            </div>
                <Footer img={<BiBasketball />} w1='w-[130px] flex gap-1 font-semibold ' button='w-[100px] gap-2' part1='Need help?' part2='Enable 2FA' dot={<RxDotFilled className='text-2xl text-gray-300' />} dot1={<RxDotFilled className='text-2xl  text-purple-800' />} />
        </div>
    )
}

export default Page2