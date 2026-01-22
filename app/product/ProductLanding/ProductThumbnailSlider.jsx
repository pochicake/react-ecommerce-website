import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductThumbnailSlider({ thumb, images }) {
    return (
        <div>
            <div className="w-100 h-80 bg-white rounded-[10px] mx-8 overflow-clip object-contain relative">
                {/* thumbs */}
                <Image src={thumb} alt="Product Thumbnail" fill></Image>
            </div>
            {/* thumbnails list */}
            <div className="w-100 bg-gray-300 my-2 mx-8 rounded-[5px] relative overflow-clip">
                {/* thumbs */}
                <div className='flex flex-row'>
                    { images.map((item, index) => {
                        return (
                            <Link key={index} href="" className='bg-white m-1 shadow-2xs'>
                                <Image src={item} width={70} height={70} alt={`image ${index}`}></Image>
                            </Link>
                        )
                    }) }
                </div>
                {/* controls */}
                <div className='top-0 left-0 right-0 bottom-0 absolute pointer-events-none'>
                    <Link href="" className='pointer-events-auto'>
                        <div className='bg-[#0003] top-0 left-0 bottom-0 absolute flex justify-center items-center w-16'>
                            <ChevronLeft color='#000' size={40}></ChevronLeft>
                        </div>
                    </Link>
                    <Link href="" className='pointer-events-auto'>
                        <div className='bg-[#0003] top-0 right-0 bottom-0 absolute flex justify-center items-center w-16'>
                            <ChevronRight color='#000' size={40}></ChevronRight>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}