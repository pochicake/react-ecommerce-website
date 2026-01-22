import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export default function CategoryTree({ items }) {
    return (
        <div className="flex flex-row items-center px-2 border-b-[#ddd] border-b">
            { items.map((item, index) => (
                <React.Fragment key={index}>
                    { index == 0 && <Link href="/"><Home className='mx-2'></Home></Link> }
                    { index == 0 && <ChevronRight color="#ccc"></ChevronRight> }
                    { index >= items.length - 1 ? <Link href={"/product?id=" + item} className="p-2 font-bold">{item}</Link> : <Link href={"/category/" + item} className="p-2">{item.toUpperCase()}</Link> }
                    { index < items.length - 1 && <ChevronRight color="#ccc"></ChevronRight> }
                </React.Fragment>
            )) }
        </div>
    )
}