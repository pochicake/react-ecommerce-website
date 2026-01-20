import React from 'react'
import Header from "@/components/Header/Header";
import ErrorNonExistent from "./nonexistent";
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Home, Star } from 'lucide-react'
import ChatbotButton from '@/components/Chatbot/button';
import ChatbotDialog from '@/components/Chatbot/dialog';
import PortfolioPopup from '@/components/PortfolioPopup/PortfolioPopup';
import Footer from '@/components/Footer/Footer';

function ProductThumbnailSlider() {
    return (
        <div>
            <div className="w-100 h-80 bg-blue-400 mx-8 rounded-[10px] relative overflow-clip">
                {/* thumbs */}
                <div></div>
            </div>
            {/* thumbnails list */}
            <div className="h-25 w-100 bg-blue-400 my-2 mx-8 rounded-[10px] relative overflow-clip">
                {/* thumbs */}
                <div></div>
                {/* controls */}
                <div className='top-0 left-0 right-0 bottom-0 absolute'>
                    <Link href="">
                        <div className='bg-[#0002] top-0 left-0 bottom-0 absolute flex justify-center items-center w-16'>
                            <ChevronLeft color='#000' size={40}></ChevronLeft>
                        </div>
                    </Link>
                    <Link href="">
                        <div className='bg-[#0002] top-0 right-0 bottom-0 absolute flex justify-center items-center w-16'>
                            <ChevronRight color='#000' size={40}></ChevronRight>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function ProductRating({ rating }) {
    return (
        <div className='flex flex-row my-2'>
            { Array.from({length: 5}).map((item, index) => (
                <React.Fragment key={index}>
                    { index < rating ? <Star fill='gold' color='gold' size={20}></Star> : <Star fill='#ccc' color='#ccc' size={20}></Star>}
                </React.Fragment>
            ))}
            {/* <div className='mx-2'>—</div> */}
            <div className='mx-2'>{rating}/5 ratings</div>
        </div>
    )
}

function Button({ text, action = '' }) {
    return (
        <Link href={action}><div className='py-3 px-8 bg-blue-300 rounded-full'>{text}</div></Link>
    )
}

function ProductInformation({ title, price }) {
    return (
        <div className="flex flex-col py-2">
            {/* product title */}
            <div className="text-3xl">{ title }</div>
            <ProductRating rating={2}></ProductRating>
            <div className="text-4xl text-blue-500 font-bold">{ price }</div>
            <div className='flex flex-row gap-4'>
                <Button text="Buy Now"></Button>
                <Button text="Add to cart"></Button>
            </div>
        </div>
    )
}

function ProductLanding() {
    var pTitle = "awoo?";
    var pDescription = "awooga?";
    return (
        <div className="flex flex-row m-4">
            {/* product thumbnail */}
            <ProductThumbnailSlider></ProductThumbnailSlider>
            {/* product information */}
            <ProductInformation title={pTitle} price="₱200 - ₱400"></ProductInformation>
        </div>
    )
}

function CategoryTree({ items }) {
    return (
        <div className="flex flex-row items-center px-2 border-b-[#ddd] border-b">
            { items.map((item, index) => (
                <React.Fragment key={index}>
                    { index == 0 && <Link href="/"><Home className='mx-2'></Home></Link> }
                    { index == 0 && <ChevronRight color="#ccc"></ChevronRight> }
                    { index >= items.length - 1 ? <Link href={"/category/" + item} className="p-2 font-bold">{item}</Link> : <Link href={"/category/" + item} className="p-2">{item}</Link> }
                    { index < items.length - 1 && <ChevronRight color="#ccc"></ChevronRight> }
                </React.Fragment>
            )) }
        </div>
    )
}

function SellerInformation() {
    return (
        // <div className='flex flex-row bg-white shadow-2xl p-4 rounded-[10px]'>
        <div className='flex flex-row bg-white border-y border-y-[#ddd] p-4'>
            <div className='size-20 rounded-full bg-blue-400 my-2 mr-4'></div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <div className='font-bold'>SELLER NAME</div>
                    <div className='size-3 mx-2 bg-[#bbb] rounded-full'></div>
                    <div className='text-[#888]'>Active 4h ago</div>
                </div>
                <div className='flex flex-row items-center'>
                    <div>Responsiveness</div>
                    <div className='mx-2'>—</div>
                    <ProductRating rating={3}></ProductRating>
                </div>
                <div className='flex flex-row items-center'>
                    <div>Customer Service</div>
                    <div className='mx-2'>—</div>
                    <ProductRating rating={3}></ProductRating>
                </div>
            </div>
            <div className='ml-auto flex flex-col'>
                <div>Visit Shop</div>
                <div>Follow</div>
            </div>
        </div>
    )
}

function SectionBox({ title, children }) {
    return (
        <div className='bg-white p-4 m-2'>
            <div className='text-black font-bold text-14'>{ title }</div>
            <div>{ children }</div>
        </div>
    )
}

export default async function ProductPage( {searchParams }) {
    var sp = await searchParams;
    
    if (!sp.id) return (
        <ErrorNonExistent></ErrorNonExistent>
    );

    var catItems = [
        'Home Appliances',
        'Motors',
        'Power Drill',
        'PRODUCT NAME'
    ]

    return (
        <div className="flex flex-col">
            <Header></Header>
            {/* product category tree */}
            <div className="w-[80%] mx-auto items-center">
                <CategoryTree items={catItems}></CategoryTree>
                <ProductLanding></ProductLanding>
                {/* seller information */}
                <SellerInformation></SellerInformation>
                {/* product description */}
                {/* <SectionBox title="Description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat mi sed leo cursus, a dictum urna sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non tellus quis dui tristique euismod quis nec augue. Quisque ac ex urna. Mauris molestie viverra lacus, ac consectetur tortor consectetur ac. Nullam vestibulum a turpis eget malesuada. Integer non ligula at purus porta ornare. Suspendisse luctus tempus facilisis. Morbi et tortor lacus. Proin auctor tellus a magna porta vehicula.

Nam fermentum bibendum arcu eget scelerisque. In imperdiet semper semper. Phasellus tincidunt gravida enim eu euismod. Nulla a euismod velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mollis lacinia purus, vitae porta massa porttitor sit amet. Curabitur gravida velit eu tortor aliquet, accumsan rhoncus est gravida. Pellentesque ultricies nisl eu odio sollicitudin, vitae pulvinar neque pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sagittis hendrerit diam, at sodales odio interdum ac. Pellentesque diam est, dignissim at felis at, porta ornare sem. Morbi accumsan fermentum pulvinar.

Nulla facilisi. Proin eu ultrices elit, id sodales risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id enim et leo bibendum lobortis. Nulla efficitur semper sapien sed mattis. In hac habitasse platea dictumst. Curabitur sit amet nulla quis magna pretium pretium vitae at nunc. Quisque ut nunc at sapien aliquet imperdiet sit amet et ex. Nunc ac turpis imperdiet, finibus erat at, bibendum odio. Phasellus posuere leo eget nulla imperdiet, ut congue leo scelerisque. Donec purus est, maximus ut posuere non, volutpat non erat. Nullam arcu quam, porttitor ac tincidunt non, rhoncus a nibh. Ut velit nibh, fermentum sed placerat vitae, ultricies a enim. Integer ultricies felis metus, sed ultricies metus congue nec. Nulla a est eget metus dapibus vehicula.
                </SectionBox> */}
                {/* reviews */}
                {/* related recommendations */}
                <SectionBox title="Related Products">

                </SectionBox>
                <SectionBox title="Reviews">

                </SectionBox>
                <SectionBox title="More Products">

                </SectionBox>
            </div>
            {/* chatbot */}
            {/* <div className='flex flex-row gap-2 m-4 fixed right-0 bottom-0'>
                <ChatbotDialog></ChatbotDialog>
                <ChatbotButton></ChatbotButton>
            </div> */}
            {/* <PortfolioPopup></PortfolioPopup> */}
            <Footer></Footer>
        </div>
    );
}