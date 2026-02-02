"use client"

import Link from "next/link";
import {Search} from 'lucide-react'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({ currentValue }) {
    var [inputValue, setInputValue] = useState(currentValue ?? "");

    const router = useRouter();
    var enterSearch = (e) => {
        if (inputValue.trim() == "") return;
        router.push(`/search?q=${encodeURIComponent(inputValue.trim())}`);
    }

    var updateValue = (e) => setInputValue(e.target.value);

    return (
        <div className="flex flex-row px-4 py-2 m-1 bg-zinc-100 rounded-full min-w-100">
            {/* input.text */}
            <input type="text" onKeyDown={(e) => { if (e.code == "Enter") enterSearch(); }} value={inputValue} onChange={updateValue} className="text outline-0 w-full" spellCheck='false' placeholder="What are you looking for?" />
            {/* search button/icon */}
            <div className="cursor-pointer" onClick={enterSearch}>
                <Search></Search>
            </div>
        </div>
    )
}