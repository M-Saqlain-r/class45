import React from 'react';
import Header from '../components/header';
import Qr from '/images/qr.png';
import { PiCopyLight } from "react-icons/pi";
import { BiBasketball } from "react-icons/bi";
import Footer from '../components/footer';
import { RxDotFilled } from "react-icons/rx";
function Page1() {

    const copytext = (event) => {
        let value = event.target.parentNode.parentNode.children[1].children[0].textContent;
        console.log(value);

        navigator.clipboard.writeText(value);
    }

    return (
        <div className=" min-h-[500]">
            <Header
                head1="2FA Setup"
                head2="Scan the image below with your 2FA authenticator"
            />

            <div className="flex flex-col justify-start items-center mt-8 space-y-6">
                <div className="relative rounded-xl overflow-hidden h-[240px] w-[240px]">
                    <div className="flex justify-center items-center h-full w-full">
                        <img
                            src={Qr}
                            alt="QR Code for 2FA"
                            className="absolute top-5 w-[200px] rounded-2xl"
                        />
                        <div className="absolute top-0 right-0 w-[30px] h-[30px] rounded-tr-xl border-t-2 border-t-purple-400 border-r-2 border-r-purple-400"></div>
                        <div className="absolute top-0 left-0 w-[30px] h-[30px] rounded-tl-xl border-t-2 border-t-purple-500 border-l-2 border-l-purple-400"></div>
                        <div className="absolute bottom-0 right-0 w-[30px] h-[30px] rounded-br-xl border-b-2 border-b-purple-400 border-r-2 border-r-purple-400"></div>
                        <div className="absolute bottom-0 left-0 w-[30px] h-[30px] rounded-bl-xl border-b-2 border-b-purple-500 border-l-2 border-l-purple-400"></div>
                    </div>
                    <div
                        className="right-0 border-t border-t-purple-600 -left-2 absolute top-0 w-[260px] h-[140px] bg-gradient-to-b from-purple-300 to-transparent animate-slideUpDown"
                    ></div>

                    <style>
                        {`
                            @keyframes slideUpDown {
                                0%, 100% {
                                transform: translateY(0);
                                }
                                50% {
                                transform: translateY(240px); /* adjust height as needed */
                                }
                            }

                            .animate-slideUpDown {
                                animation: slideUpDown 2s ease-in-out infinite;
                            }
                            `}
                    </style>
                </div>

                {/* Divider */}
                <div className="text-center text-gray-400 w-full">
                    _________________________OR________________________
                </div>

                {/* Manual Code Entry */}
                <div className="text-center">
                    <div className="text-lg font-semibold">Manually enter the code below</div>
                    <div className="mt-2 text-base gap-3 font-mono select-none flex justify-between">
                        <div className="text-purple-600 flex justify-start pl-2 items-center font-semibold rounded-xl border-1 h-[30px] w-[250px]">
                            LK23-4DS3-32HD-09K2-F8J4
                        </div>
                        <div className="w-[60px] flex justify-center items-center border-1 cursor-pointer rounded-lg" title='Copy' onClick={copytext}>
                            <PiCopyLight /> Copy
                        </div>

                    </div>
                </div>
            </div>
            <div className="">
                <Footer img={<BiBasketball />} w1='w-[130px] flex gap-1 font-semibold ' part1='Need help?' part2='Submit' dot={<RxDotFilled className='text-2xl text-purple-800' />} dot1={<RxDotFilled className='text-2xl text-gray-300' />} />
            </div>
        </div>
    );
}

export default Page1;
