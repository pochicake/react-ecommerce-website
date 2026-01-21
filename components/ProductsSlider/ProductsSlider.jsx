import Link from "next/link"
import Image from 'next/image'
import { StarIcon, StarHalfIcon } from 'lucide-react'

export default function ProductsSlider({ items }) {
    // console.log(items)
    return (
        <div className="flex flex-row p-4 overflow-scroll w-full">
            { items.map((item, index) => {
                return (
                    <Link key={index} href={`/product?id=${item['id']}`} className="flex flex-col py-2 rounded-[10px] bg-white px-4 mx-1 border border-[#ccc] hover:underline">
                        <div className="relative w-30 h-25 p-2 object-contain">
                            <Image alt="Thumbnail" src={item['thumbnail']} fill></Image>
                        </div>
                        <div className="max-h-15 leading-none line-clamp-2 break-all mb-1">{item['title']}</div>
                        <div className="flex flex-row items-end mt-auto">
                            <div className="text-[14px]">$</div>
                            <div className="text-[16px]">{item['price']}</div>
                            <div className="flex flex-row ml-auto items-center">
                                { item['rating'] > 3.0 ? <StarIcon fill="orange" stroke="0" size={18}></StarIcon> : <StarHalfIcon fill="orange" stroke="0" color="orange" size={18}></StarHalfIcon> }
                                <div>{item['rating']}</div>
                            </div>
                        </div>
                    </Link>
                )
            }) }
        </div>
    )
}