import { Bot, MessageCircleQuestionMark } from 'lucide-react'

export default function ChatbotButton() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-row p-3 mr-2 select-none bg-blue-100 gap-2 shadow-2xs rounded-full mt-auto cursor-pointer'>
                <Bot></Bot>
            </div>
        </div>
    )
}