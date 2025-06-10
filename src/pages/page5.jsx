import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer'
import Input from '../components/Input'

function Page5() {
    const password = (event) => {
        const pass = event.target.value;
        console.log(event.target.id);

        const bars = [
            document.getElementById('1'),
            document.getElementById('2'),
            document.getElementById('3'),
            document.getElementById('4')
        ];
        const bars2 = [
            document.getElementById('5'),
            document.getElementById('6'),
            document.getElementById('7'),
            document.getElementById('8')
        ];
        let strength = 0;
        if (pass.length > 5) strength++;
        if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
        if (/\d/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        if (event.target.id == 'input1') {
            for (let i = 0; i < bars.length; i++) {
                let baseClass = 'h-[8px] rounded-full w-[94px] transition-all'; // Your base Tailwind styles
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
        }
        else if (event.target.id == 'input2') {
            for (let i = 0; i < bars2.length; i++) {
                let baseClass = 'h-[8px] rounded-full w-[94px] transition-all'; // Your base Tailwind styles

                if (i < strength) {
                    if (strength === 1) {
                        bars2[i].className = baseClass + ' bg-red-500';
                    } else if (strength === 2) {
                        bars2[i].className = baseClass + ' bg-yellow-500';
                    } else if (strength === 3) {
                        bars2[i].className = baseClass + ' bg-green-500';
                    } else if (strength === 4) {
                        bars2[i].className = baseClass + ' bg-blue-600';
                    }
                } else {
                    bars2[i].className = baseClass + ' bg-gray-300';
                }
            }

        }

    };
    return (
        <div className='w-[400px]'>
            <Header head1='Change your password' head2='your new password must be differnet' gap='gap-3 font-semibold' />
            <div className="flex flex-col gap-5 mt-7">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="font-semibold" id='password'>New Password*</div>
                        <div className=""><Input keys='input1' place='Must be 8 characters' onChnage={password} class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                    </div>
                    <div className=" flex justify-between">
                        <div id='1' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='2' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='3' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='4' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="font-semibold" id='password'>Confirm new Password*</div>
                        <div className=""><Input keys='input2' place='Please confirm password' onChnage={password} class='border-gray-500 border-1 pl-2 outline-purple-700 rounded-lg h-[35px] w-full' /></div>
                    </div>
                    <div className=" flex justify-between">
                        <div id='5' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='6' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='7' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                        <div id='8' className="w-[94px] rounded-2xl bg-gray-200 h-[8px]"></div>
                    </div>
                </div>
            </div>
            <Footer part1='Cancel' w1='font-semibold' part2='Change Password' w2='w-[160px]' />
        </div>
    )
}

export default Page5