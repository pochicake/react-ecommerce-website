import Link from 'next/link'
import SearchBar from './SearchSection/SearchBar'
import SearchFilters from './SearchSection/SearchFilters'
import { ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='flex flex-row w-full bg-white'>
            <div className='flex flex-row w-[80%] mx-auto'>
                {/* logo */}
                <Link href="/" className='relative w-100 h-auto'>
                    <Image src="/logo.png" fill alt='Logo' className='object-contain scale-[80%]'></Image>
                </Link>
                <div className='p-2 w-full'>
                    <div className='flex flex-row w-full items-center'>
                        {/* categories */}
                        {/* search section */}
                        <SearchBar></SearchBar>
                        <div className='ml-auto flex flex-row gap-2 mr-4 align-middle'>
                            <Link href="">
                                <div className='p-2 rounded-full'>
                                    <ShoppingCart strokeWidth={2} />
                                </div>
                            </Link>
                            {/* account management */}
                            <Link href="">
                                <div className='p-2 rounded-full'>
                                    <UserRound strokeWidth={2} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* search filters */}
                    <SearchFilters></SearchFilters>
                </div>
            </div>
        </div>
    )
}