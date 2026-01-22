import ProductThumbnailSlider from './ProductThumbnailSlider'
import ProductInformation from './ProductInformation'

export default function ProductLanding({ productInfo }) {
    return (
        <div className="flex flex-row m-4">
            {/* product thumbnail */}
            <ProductThumbnailSlider thumb={productInfo['thumbnail']} images={productInfo['images']}></ProductThumbnailSlider>
            {/* product information */}
            <ProductInformation productInfo={productInfo}></ProductInformation>
        </div>
    )
}