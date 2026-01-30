import { Bot, MessageCircleQuestionMark } from 'lucide-react'

export default function ChatbotButton() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-row items-center justify-center size-15 mr-2 select-none bg-blue-100 gap-2 rounded-full cursor-pointer shadow-[0px_0px_15px_#000a]'>
                <Bot size="35" ></Bot>
            </div>
        </div>
    )
}