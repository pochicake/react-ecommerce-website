import Link from 'next/link'

export default function Button({ text, action = '' }) {
    return (
        <Link href={action}><div className='py-3 px-8 bg-blue-300 rounded-full'>{text}</div></Link>
    )
}