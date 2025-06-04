import React from 'react'
import Cards from './cards.jsx'
import Input from './input.jsx'
import Daterange from './daterange.jsx'
import { useState, useEffect } from 'react'
import Header from './header.jsx'
function main() {
    const data = [
        {
            date: 'june 24, 2023',
            time: "10:00 am",
            rotate: '-rotate-145',
            color: 'bg-gray-100',
            counterparty: 'Globex Co.',
            arrowcolor: 'bg-green-500',
            disc: 'invoice #12354679',
            amount: '2890.00',
            type: 'credit',
            status: 'recived',
            textcolor: 'text-green-600 font-semibold',
            statuscolor: 'text-blue-400'
        }, {
            date: 'june 20, 2023',
            time: "11:00 am",
            type: 'debit',
            counterparty: 'Amazon',
            disc: 'purchase - Books and Electronics',
            amount: '-49.00',
            status: 'paid',
        }, {
            date: 'june 19, 2023',
            type: 'debit',
            time: "2:00 pm",
            counterparty: 'Netflix',
            color: 'bg-gray-100',
            disc: 'Subscription - monthly membership',
            amount: '-80.00',
            status: 'paid'
        }, {
            date: 'june 18, 2023',
            time: "11:00 am",
            counterparty: 'Starbucks',
            disc: 'Purchase - Coffee and food',
            amount: '-3.00',
            type: 'debit',
            status: 'paid'
        }, {
            date: 'june 17, 2023',
            time: "10:00 am",
            color: 'bg-gray-100',
            arrowcolor: 'bg-green-500',
            textcolor: 'text-green-600 font-semibold',
            rotate: '-rotate-145',
            counterparty: 'Globex Co.',
            disc: 'invoice #12354679',
            amount: '1500.00',
            type: 'credit',
            status: 'paid'
        }, {
            date: 'june 14, 2023',
            time: "9:00 am",
            type: 'debit',
            counterparty: 'Apple',
            disc: 'Purchase - App store',
            amount: '-200.00',
            status: 'paid'
        }, {
            date: 'june 12, 2023',
            time: "6:00 pm",
            counterparty: 'Uber',
            color: 'bg-gray-100',
            disc: 'Ride - shared ride',
            amount: '-40.00',
            type: 'debit',
            status: 'paid'
        }, {
            type: 'debit',
            date: 'june 10, 2023',
            time: "11:00 am",
            counterparty: 'Marketpalce',
            disc: 'Purchase',
            amount: '-150.00',
            status: 'paid'
        },
    ];
    const [info, Setinfo] = useState(data);
    const [changeEvent, setChangeEvent] = useState(0);

    let creditsum = 0, debitsum = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].type == 'credit') {
            creditsum = creditsum + parseInt(data[i].amount);
        }
        else {
            debitsum = debitsum + parseInt(data[i].amount);
        }
    }

    const [sum1, setsum1] = useState(creditsum)
    const [sum2, setsum2] = useState(debitsum)
    const Event = (event) => {
        // console.log(event.target.value);

        if (event.type === 'change') {
            setsum1(creditsum);
            setsum2(debitsum);
            Setinfo(data);
            setChangeEvent(event);
        }
    }
    let sumamount1 = 0;
    let sumamount2 = 0;

    useEffect(() => {
        let info2 = [];
        if (changeEvent) {
            const handler = setTimeout(() => {
                info.map((items, index) => {
                    if (items.amount.includes(changeEvent.target.value) || items.counterparty.includes(changeEvent.target.value) || items.status.includes(changeEvent.target.value) || items.date.includes(changeEvent.target.value)) {
                        if (items.type == 'credit') {
                            sumamount1 = sumamount1 + parseInt(items.amount);
                        }
                        else {
                            sumamount2 = sumamount2 + parseInt(items.amount);
                        }
                        info2.push(items)
                        console.log(sumamount1);

                        Setinfo(info2)
                        setsum1(sumamount1)
                        setsum2(sumamount2)
                    }

                })
                console.log(info2);
            }, 500);
            return () => clearTimeout(handler);
        }
    }, [changeEvent]);

    return (
        <div className='p-3'>

            <Header credit={sum1} debit={sum2} />
            <div className='flex justify-between items-center cursor-pointer select-none border-t border-gray-400 p-2'>
                <div className='flex  gap-10'>
                    <div className='flex w-[350px] rounded-full items-center justify-center gap-3 p-2 bg-gray-100'>
                        <Daterange />
                        <Daterange />
                    </div>
                    <Input Change={Event} />
                </div>
                <div className='h-[40px] w-[100px] bg-gray-100 rounded-full flex justify-center items-center '>
                    Export
                </div>
            </div>
            <div className={`flex justify-between font-semibold text-gray-400 p-4 border-gray-200 `}>
                <div className="w-[140px] flex justify-around">
                    <input type="checkbox" />
                    <div>
                        Date
                    </div>
                </div>
                <div className="flex items-center justify-center w-[400px]">
                    Counterparty and Discription
                </div>
                <div className='flex items-center justify-center w-[200px]'>
                    Amount ($)
                </div>
                <div className=' flex justify-start w-[120px]'>
                    Status
                </div>
            </div>
            {

                info.map((item, index) => (
                    < Cards
                        key={index}
                        date={item.date}
                        time={item.time}
                        counterparty={item.counterparty}
                        disc={item.disc}
                        amount={item.amount}
                        status={item.status}
                        arrowcolor={item.arrowcolor ? item.arrowcolor : 'bg-gray-500'}
                        rotate={item.rotate ? item.rotate : 'rotate-45'}
                        color={item.color ? item.color : 'bg-white'}
                        textcolor={item.textcolor ? item.textcolor : 'text-gray-500'}
                        statuscolor={item.statuscolor ? item.statuscolor : 'text-green-500'}
                    />
                ))}
        </div>
    )
}

export default main