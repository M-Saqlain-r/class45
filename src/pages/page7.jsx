import React from 'react'
import { BiPlusCircle } from "react-icons/bi";
import Header from '../components/header'
import Input from '../components/Input'
import Footer from '../components/footer'
function Page7() {
    return (
        <div className='w-[400px]'>
            <Header head1='Invite your team' head2='start collaborating on this new project.' />
            <div className=''>
                <div className='font-semibold'>
                    Email*
                </div>
                <div className="flex flex-col gap-3">
                    <Input place='Email address' class='border-1 w-full  h-[36px] pl-3 rounded-lg border-gray-300 outline-purple-600 ' />
                    <Input place='Email address' class='border-1 w-full  h-[36px] pl-3 rounded-lg border-gray-300 outline-purple-600 ' />
                    <Input place='Email address' class='border-1 w-full  h-[36px] pl-3 rounded-lg border-gray-300 outline-purple-600 ' />
                </div>
                <div className="mt-5 flex items-center gap-2 text-purple-600 font-bold"><BiPlusCircle className=' text-xl' />Add another</div>
            </div>
            <Footer part1='cancel' part2='Send invites' w2='w-[100px]' />
        </div>
    )
}

export default Page7