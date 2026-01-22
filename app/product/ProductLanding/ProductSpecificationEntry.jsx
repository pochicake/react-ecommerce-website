export default function ProductSpecificationEntry({ title, children }) {
    return (
        <div className='flex flex-row gap-5'>
            <div className='text-[#555]'>{title}</div>
            <div>{children}</div>
        </div>
    )
}