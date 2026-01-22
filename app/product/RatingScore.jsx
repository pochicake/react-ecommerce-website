import React from 'react'
import { Star } from 'lucide-react'

export default function RatingScore({ marginy = 2, rating, size = 20, showLabel = true }) {
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