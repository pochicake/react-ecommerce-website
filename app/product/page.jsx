import React from 'react'
import Header from "@/components/Header/Header";
import ErrorNonExistent from "./nonexistent";
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Home, Star, TicketCheck, UserRound } from 'lucide-react'
import ChatbotButton from '@/components/Chatbot/button';
import ChatbotDialog from '@/components/Chatbot/dialog';
import PortfolioPopup from '@/components/PortfolioPopup/PortfolioPopup';
import Footer from '@/components/Footer/Footer';

function ProductThumbnailSlider({ thumb, images }) {
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

function RatingScore({ marginy = 2, rating, size = 20, showLabel = true }) {
    return (
        <div className='flex flex-row my-[marginy]'>
            { Array.from({length: 5}).map((item, index) => (
                <React.Fragment key={index}>
                    { index < rating ? <Star fill='orange' color='orange' size={size}></Star> : <Star fill='#ccc' color='#ccc' size={size}></Star>}
                </React.Fragment>
            ))}
            {/* <div className='mx-2'>—</div> */}
            { showLabel && <div className='mx-2'>{rating.toFixed(1)}/5 ratings</div> }
        </div>
    )
}

function Button({ text, action = '' }) {
    return (
        <Link href={action}><div className='py-3 px-8 bg-blue-300 rounded-full'>{text}</div></Link>
    )
}

// function ProductSpecifications({ productInfo }) {
//     return (
//         <div>
//             {/* dimensions */}
//             {/* <div>{ productInfo['warrantyInformation'] }</div> */}
//             {/* warranty */}
//             <div>{ productInfo['warrantyInformation'] }</div>
//             {/* shipping */}
//             <div>{ productInfo['shippingInformation'] }</div>
//         </div>
//     )
// }

function ProductSpecificationEntry({ title, children }) {
    return (
        <div className='flex flex-row gap-5'>
            <div className='text-[#555]'>{title}</div>
            <div>{children}</div>
        </div>
    )
}

function ProductInformation({ productInfo }) {
    var originalPrice = productInfo['price'];
    var discountedPrice = (originalPrice * (1 - productInfo['discountPercentage'] / 100)).toFixed(2);

    return (
        <div className="flex flex-col py-2">
            {/* product title */}
            <div className="text-3xl">{ productInfo['title'] }</div>
            <RatingScore rating={productInfo['rating']}></RatingScore>
            <div className='flex flex-row items-center gap-3'>
                <div className="text-[30px] text-blue-500 font-bold">${ discountedPrice }</div>
                <TicketCheck color="#4a4" fill='#afa'></TicketCheck>
                <div className="text-[18px] text-gray-500 line-through italic">${ originalPrice }</div>
            </div>

            {/* brand */}
            { productInfo['brand'] && <ProductSpecificationEntry title="Brand">{ productInfo['brand'] }</ProductSpecificationEntry> }
            {/* dimensions */}
            {/* <ProductSpecificationEntry title="Dimensions">
                <div>
                    <div className='flex flex-row gap-3'>
                        <div>Width</div>
                        <div>{ productInfo['dimensions']['width'] }</div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div>Height</div>
                        <div>{ productInfo['dimensions']['height'] }</div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div>Depth</div>
                        <div>{ productInfo['dimensions']['depth'] }</div>
                    </div>
                </div>
            </ProductSpecificationEntry> */}
            <div className='my-4 italic'>{ productInfo['description'] }</div>
            {/* warranty */}
            <ProductSpecificationEntry title="Warranty">{ productInfo['warrantyInformation'] }</ProductSpecificationEntry>
            {/* shipping */}
            <ProductSpecificationEntry title="Shipping">{ productInfo['shippingInformation'] }</ProductSpecificationEntry>

            <div className='flex flex-col mt-auto'>
                <div className='text-[#555]'>{ `${productInfo['stock']} In Stock*` }</div>
                <div className='flex flex-row gap-4 my-4'>
                    <Button text="Buy Now"></Button>
                    <Button text="Add to cart"></Button>
                </div>
            </div>
        </div>
    )
}

function ProductLanding({ productInfo }) {
    return (
        <div className="flex flex-row m-4">
            {/* product thumbnail */}
            <ProductThumbnailSlider thumb={productInfo['thumbnail']} images={productInfo['images']}></ProductThumbnailSlider>
            {/* product information */}
            <ProductInformation productInfo={productInfo}></ProductInformation>
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
                    { index >= items.length - 1 ? <Link href={"/product?id=" + item} className="p-2 font-bold">{item}</Link> : <Link href={"/category/" + item} className="p-2">{item.toUpperCase()}</Link> }
                    { index < items.length - 1 && <ChevronRight color="#ccc"></ChevronRight> }
                </React.Fragment>
            )) }
        </div>
    )
}

function SectionBox({ title, children }) {
    return (
        <div className='bg-white p-2 m-2'>
            <div className='m-2 text-black font-bold text-14'>{ title }</div>
            <div className='p-2'>{ children }</div>
        </div>
    )
}

function ReviewItem({ reviewInfo }) {
    return (
        <div className='flex flex-row gap-2 my-2'>
            <div className='rounded-full size-12 bg-gray-300 justify-center items-center flex'>
                <UserRound></UserRound>
            </div>
            <div className='flex flex-col leading-none'>
                <div>{ reviewInfo['reviewerName'] }</div>
                <RatingScore rating={reviewInfo['rating']} size={15} showLabel={false} marginy={0}/>
                <div className='m-2'>{ reviewInfo['comment'] }</div>
            </div>
        </div>
    )
}

export default async function ProductPage( {searchParams }) {
    // Get search parameters
    var sp = await searchParams;
    
    // Errpr if no product id provided
    if (!sp.id) return (
        <ErrorNonExistent></ErrorNonExistent>
    );

    // Query product information
    var apiResp = await fetch(`https://dummyjson.com/products/${sp['id']}`);

    // Check API response

    if (!apiResp.ok) {
        console.log(apiResp.body);
        throw new Error("Internal server error!");
    }

    var productInfo = await apiResp.json();

    // Create list for CategoryTree
    var catItems = [
        productInfo['category']
    ].concat([
        productInfo['title']
    ])

    return (
        <div className="flex flex-col">
            <Header></Header>
            {/* product category tree */}
            <div className="w-[80%] mx-auto items-center">
                <CategoryTree items={catItems}></CategoryTree>
                <ProductLanding productInfo={productInfo}></ProductLanding>
                {/* product description */}
                {/* <div className='flex flex-row bg-white border-y border-y-[#ddd] p-4'>
                    <div>{productInfo['description']}</div>
                </div> */}
                {/* related recommendations */}
                <SectionBox title="Related Products">
                    
                </SectionBox>
                {/* reviews */}
                <SectionBox title="Reviews">
                    { productInfo['reviews'].map((item, index) => <ReviewItem key={index} reviewInfo={item}/>)}
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