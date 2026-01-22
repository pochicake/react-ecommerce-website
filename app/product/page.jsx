import React from 'react'
import Header from "@/components/Header/Header";
import ErrorNonExistent from "./nonexistent";
import ChatbotButton from '@/components/Chatbot/button';
import ChatbotDialog from '@/components/Chatbot/dialog';
import PortfolioPopup from '@/components/PortfolioPopup/PortfolioPopup';
import Footer from '@/components/Footer/Footer';
import ReviewSection from './ReviewSection/ReviewSection';
import CategoryTree from '@/app/product/CategoryTree'
import SectionBox from '@/app/product/SectionBox'
import ProductLanding from '@/app/product/ProductLanding/ProductLanding';

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

                {/* related recommendations */}
                <SectionBox title="Related Products">
                    
                </SectionBox>
                
                {/* reviews */}
                <ReviewSection productInfo={productInfo}></ReviewSection>

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