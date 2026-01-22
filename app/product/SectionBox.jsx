export default function SectionBox({ title, children }) {
    return (
        <div className='bg-white p-2 m-2'>
            <div className='m-2 text-black font-bold text-14'>{ title }</div>
            <div className='p-2'>{ children }</div>
        </div>
    )
}