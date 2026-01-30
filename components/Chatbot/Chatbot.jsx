"use client"

import ChatbotButton from '@/components/Chatbot/button';
import ChatbotDialog from '@/components/Chatbot/dialog';
import { useState } from 'react';

export default function Chatbot() {
    var [ isVisible, setVisible ] = useState(false);
    
    return (
        <div className='flex flex-row gap-2 m-8 fixed right-0 bottom-0'>
            { isVisible && <ChatbotDialog onExit={() => setVisible(!isVisible)}></ChatbotDialog> }
            <div className='mt-auto' onClick={() => setVisible(!isVisible)}>
                <ChatbotButton></ChatbotButton>
            </div>
        </div>
    )
}