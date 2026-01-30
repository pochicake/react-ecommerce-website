"use client"
import { X, Bot, Send } from "lucide-react"
import { useState } from "react"
import Markdown from 'react-markdown'


function ChatMessageBubble({ content, role = 'assistant' }) {
    return (
        <div className="flex flex-row mx-2 items-center text-[14px]">
            {
            role == 'assistant' && <div className="mt-auto size-10 rounded-full bg-[#eee] flex items-center shrink-0 justify-center">
                <Bot></Bot>
            </div>
            }

            {
                role == 'assistant'
                ? <div className="rounded-[16px] bg-blue-100 border-blue-300 border-[1px] max-w-[70%] text-[#00275a] mx-2 p-2">
                    <Markdown>{content}</Markdown>
                </div>
                : <div className="rounded-[12px] border-[1px] border-[#999] bg-[#fff] max-w-[70%] m-2 ml-auto px-2 py-1">
                    <Markdown>{content}</Markdown>
                </div>
            }
        </div>
    )
}

function ChatContainer({ messages }) {
    console.log(messages)
    return (
        <div className="h-full flex flex-col overflow-y-scroll overflow-x-hidden py-4">
            <div className="mt-auto">
                <div className="flex flex-col mx-auto items-center max-w-[70%]">
                    <div className="font-bold text-[20px]">Meet, Neo!</div>
                    <div className="text-[#555] italic text-center">Our powerful AI agent, ready to assist with any questions and issues you may have.</div>
                </div>
                
                { messages && messages.map((item, index) => <ChatMessageBubble key={index} role={item['role']} content={item['content']}/>)}
            </div>
        </div>
    )
}

function ChatControls({ onSend = () => {} }) {
    var [ userInput, updateUserInput ] = useState("")

    function send(message) {
        onSend(message);
        updateUserInput("");
    }

    return (
        <div className="flex flex-row p-2 bg-[#ddd] w-full gap-2">
            <div className="bg-white p-2 rounded-[10px] w-full">
                <input
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            send(userInput)
                        }
                    }}
                    value={userInput}
                    onChange={(e) => updateUserInput(e.target.value)}
                    type="text"
                    className="text w-full outline-none"
                    placeholder="Type your enquiries"/>
            </div>
            <div onClick={() => send(userInput)} className="bg-blue-300 rounded-full p-2">
                <Send/>
            </div>
        </div>
    )
}

export default function ChatbotDialog({ onExit = () => {} }) {
    var savedConv = sessionStorage.getItem('conversation');
    var [messages, updateMessage] = useState(savedConv ? JSON.parse(savedConv) : [])
    var [errorMsg, setErrorMsg] = useState(null)

    async function sendMessage(message) {
        var newMessages = messages.concat([
            {
                "role":"user",
                "content": message
            }
        ]);

        // update state and storage
        updateMessage(newMessages);
        sessionStorage.setItem('conversation', JSON.stringify(newMessages))
        
        // fetch inference api here
        var apiResp = await fetch("/api/chat", {
            method: 'POST',
            body: JSON.stringify(newMessages)
        })

        if (!apiResp.ok) return setErrorMsg("Internal server error.");

        var reply = await apiResp.json()

        // update state and storage
        updateMessage(msgs => {
            var newMsgs = msgs.concat(reply);
            sessionStorage.setItem('conversation', JSON.stringify(newMsgs))
            return newMsgs;
        })
    }

    return (
        <div className="flex flex-col min-h-100 max-h-[20vh] rounded-[20px] overflow-clip w-100 border-blue-400 border bg-white shadow-2xl relative">
            <div className="flex flex-row p-2 bg-blue-300">
                <div>Neo Bot</div>
                <X className="ml-auto cursor-pointer" onClick={() => onExit()}></X>
            </div>
            <ChatContainer messages={messages}/>
            <ChatControls onSend={sendMessage}/>
        </div>
    )
}