import RatingScore from '@/app/product/RatingScore'
import ProductSpecificationEntry from './ProductSpecificationEntry';
import Button from '@/components/Button'
import { TicketCheck } from 'lucide-react'

export default function ProductInformation({ productInfo }) {
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