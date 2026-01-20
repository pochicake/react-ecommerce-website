"use client"

// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";



export default function PortfolioPopup() {
    return (
        <div className="flex fixed justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#0004]">
            <div className="flex flex-col p-4 bg-white rounded-[20px] shadow-2xl w-[60%] h-[50%]">
                <div className="font-bold text-[24px] self-center">~ Disclaimer ~</div>
                <div className="italic text-[#444]">This project is made for demonstration purposes only and should not be used for real-world applications, such as in any form of transactions, reviews and product sales. Some features and values are "made-up" to emulate how a real-world version of the project would act. This project only demonstrates the skills and capabilities of the creator and should only be treated as emulation. Any data being sent here will be deleted in no more than 3 days for server maintenance and user privacy. Feel free to explore the project! 😊🌟</div>
                <div>OK, proceed!</div>
            </div>
        </div>
    )
}