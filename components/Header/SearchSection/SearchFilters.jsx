import { ChevronDown } from 'lucide-react';

function SearchFilterButton({ label }) {
    return (
        <div className="px-4 py-2 flex flex-row select-none cursor-pointer">
            <div>{ label }</div>
            <ChevronDown />
        </div>
    )
}

export default function SearchFilters() {
    return (
        <div className='flex flex-row'>
            <SearchFilterButton label="Category"></SearchFilterButton>
            <SearchFilterButton label="Location"></SearchFilterButton>
            <SearchFilterButton label="Prices"></SearchFilterButton>
        </div>
    )
}