import BaseLayout from "@/components/BaseLayout";
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";

export default async function SearchPage({ searchParams }) {
    var sp = await searchParams;

    var apiResp = await fetch(`https://dummyjson.com/products/search?q=${sp.q}`);

    if (apiResp.status != 200) {
        console.log(`Error at SearchPage: ${apiResp.body}`);
        throw new Error("Internal server error");
    }

    var data = await apiResp.json();

    return (
        <BaseLayout searchQuery={sp.q}>
            <ProductsSlider items={data.products}></ProductsSlider>
        </BaseLayout>
    )
}