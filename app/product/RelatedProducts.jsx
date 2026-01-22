"use client"

import ProductsSlider from "@/components/ProductsSlider/ProductsSlider"
import { useEffect, useState } from "react"

export default function RelatedProducts() {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(false);
    
    useEffect(() => {
        async function getRelatedProducts() {
            var apiResp = await fetch("/api/products")
    
            if (!apiResp.ok) {
                setError(true)
                return;
            }

            setData(await apiResp.json());
        }

        getRelatedProducts();
    }, []);

    if (error) return <>Internal server error!</>

    if (data) {
        return <ProductsSlider items={data['products']}></ProductsSlider>
    }

    return <>Loading...</>
}