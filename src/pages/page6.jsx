import { React, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import pic from '/images/pic.jpg';
import { RxDotFilled } from "react-icons/rx";
import "./style.css";

function Page6(props) {
    let Fname = 'Saqlain';
    let Lname = 'Rana';

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // const handleWelcome = (event) => {
    //     if (event.target.id === "next") {
    //         localStorage.setItem('currentPage', "TeamPage");
    //         window.location.reload();
    //     }
    // };

    const handleMouseMove = (event) => {
        const containerRect = event.currentTarget.getBoundingClientRect();
        setCursorPosition({
            x: event.clientX - containerRect.left + 20,
            y: event.clientY - containerRect.top - 20,
        });
    };

    return (
        <div className='w-full md:w-[500px] bg-[#f9f8fe] rounded-2xl py-10 px-4'>
            <Header
                head1='Welcome to Untitled!'
                head2='Here are some quick tips to get started.'
                gap='gap-3 font-semibold'
            />
            <div
                className='flex items-center justify-center mt-2 relative overflow-hidden'
                onMouseMove={handleMouseMove}
            >
                <img src={pic} className='my_cursor rounded-xl w-full' alt="Welcome" />
                <div
                    className="absolute text-sm bg-gray-800 text-white p-1 rounded pointer-events-none"
                    style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
                >
                    {Fname + " " + Lname}
                </div>
            </div>

            <Footer part1='Skip intro' w1='w-[100px]' part2='Continue' dot={<RxDotFilled className='text-2xl text-purple-800' />} dot1={<RxDotFilled className='text-2xl text-gray-300' />} dot2={<RxDotFilled className='text-2xl text-gray-300' />} />
        </div>
    );
}

export default Page6;
