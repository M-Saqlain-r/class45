import React from 'react'
import { PiDotOutlineFill } from "react-icons/pi";
import { LuArrowRight } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
function cards(props) {
    // console.log(props.statuscolor);

    return (
        <div className={`flex justify-between p-4 border-gray-200 ${props.color}`}>
            <div className="w-[200px] flex justify-around">
                <input type="checkbox" />
                <div>
                    <div className="">{props.date}</div>
                    <div className="text-gray-400">{props.time} </div>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="flex justify-start gap-2 items-center w-[360px]">
                    <div className="h-[40px] flex justify-center items-center relative rounded-lg w-[40px] bg-gray-200 ">
                        <TfiWallet />
                        <div className={`h-[14px] w-[14px] flex justify-center items-center text-white ${props.arrowcolor} rounded-full absolute bottom-[-4px] right-[-4px]  `}>
                            <LuArrowRight className={`${props.rotate} text-[13px]`} />
                        </div>
                    </div>
                    <div>
                        <div className="">{props.counterparty}</div>
                        <div className="text-gray-400">{props.disc}</div>
                    </div>
                </div>
            </div>
            <div className={`w-[100px] ${props.textcolor}`}>{props.amount}</div>
            <div className=' flex justify-start w-[120px]'>
                <div className={`border-1 min-w-12 p-3 items-center justify-center h-[25px] rounded-3xl flex ${props.statuscolor} border-gray-500 font-semibold`}><PiDotOutlineFill /> <div>{props.status}</div></div>
            </div>
        </div>
    )
}

export default cards;