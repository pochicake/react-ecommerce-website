import React from 'react'
import ErrorNonExistent from "./nonexistent";
import ReviewSection from './ReviewSection/ReviewSection';
import CategoryTree from '@/app/product/CategoryTree'
import SectionBox from '@/app/product/SectionBox'
import ProductLanding from '@/app/product/ProductLanding/ProductLanding';
import RelatedProducts from './RelatedProducts';
import BaseLayout from '@/components/BaseLayout';

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
        return <ErrorNonExistent/>;
        // throw new Error("Internal server error!");
    }

    var productInfo = await apiResp.json();

    // Create list for CategoryTree
    var catItems = [
        productInfo['category']
    ].concat([
        productInfo['title']
    ])

    return (
        <BaseLayout>
            {/* product category tree */}
            <div className="mx-auto items-center">
                <CategoryTree items={catItems}></CategoryTree>
                <ProductLanding productInfo={productInfo}></ProductLanding>

                {/* related recommendations */}
                <SectionBox title="Related Products">
                    <RelatedProducts></RelatedProducts>
                </SectionBox>

                {/* reviews */}
                <ReviewSection productInfo={productInfo}></ReviewSection>

                <SectionBox title="More Products">

                </SectionBox>
            </div>
        </BaseLayout>
    );
}