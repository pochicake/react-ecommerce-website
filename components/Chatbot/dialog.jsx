import { X } from "lucide-react"

function ChatMessageBubble({ text, who = 'bot' }) {
    return (
        <div className="flex flex-row mx-2 items-center">
            <div className="size-10 rounded-full bg-[#eee]"></div>
            <div className="rounded-[12px] bg-blue-100 m-2 px-2 py-1">
                {text}
            </div>
        </div>
    )
}

function ChatContainer() {
    return (
        <ChatMessageBubble text="How can i help you today?"></ChatMessageBubble>
    )
}

export default function ChatbotDialog() {
    return (
        <div className="flex flex-col h-100 rounded-[10px] overflow-clip w-100 border-blue-200 border bg-white shadow-2xl relative">
            <div className="flex flex-row p-2 bg-blue-200">
                <div>Zygbee Bot</div>
                <X className="ml-auto"></X>
            </div>
            <ChatContainer></ChatContainer>
        </div>
    )
}