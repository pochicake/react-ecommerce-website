import Link from "next/link"
import Image from 'next/image'

export default function ProductsSlider({ items }) {
    // console.log(items)
    return (
        <div className="flex flex-row p-4 overflow-scroll w-full">
            { items.map((item, index) => {
                return (
                    <Link key={index} href={`/product?id=${item['id']}`} className="flex flex-col py-2 rounded-[10px] bg-white px-4 mx-1 border border-[#ccc] hover:underline">
                        <div className="relative w-35 h-30 p-2 object-contain">
                            <Image alt="Thumbnail" src={item['thumbnail']} fill></Image>
                        </div>
                        <div className="max-h-15">{item['title']}</div>
                        <div className="flex flex-row items-end mt-auto">
                            <div className="text-[14px]">$</div>
                            <div className="text-[18px]">{item['price']}</div>
                        </div>
                    </Link>
                )
            }) }
        </div>
    )
}