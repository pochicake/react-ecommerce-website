import { UserRound } from 'lucide-react'
import RatingScore from '@/app/product/RatingScore'
import SectionBox from '@/app/product/SectionBox'
import CategoryTree from '@/app/product/CategoryTree'

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

export default function ReviewSection({ productInfo }) {
    return (
        <SectionBox title="Reviews">
            { productInfo['reviews'].map((item, index) => <ReviewItem key={index} reviewInfo={item}/>)}
        </SectionBox>
    );
}