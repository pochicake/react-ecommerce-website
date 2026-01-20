import Link from "next/link";
import {Search} from 'lucide-react'

export default function SearchBar() {
    return (
        <div className="flex flex-row px-4 py-2 m-1 bg-zinc-100 rounded-full min-w-100">
            {/* input.text */}
            <input type="text" className="text outline-0" spellCheck='false' placeholder="What are you looking for?" />
            {/* search button/icon */}
            <Link className="ml-auto" href="">
                <Search></Search>
            </Link>
        </div>
    )
}