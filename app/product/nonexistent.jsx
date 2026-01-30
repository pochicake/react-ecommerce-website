// Used to display a page when a product does not exist, or the URL provided is invalid
import BaseLayout from "@/components/BaseLayout";
import { Frown } from "lucide-react";
import Link from "next/link";

export default async function ErrorNonExistent() {
    return (
        <BaseLayout>
            <div className="flex flex-row gap-2 m-auto rounded-[10px] border-[#aaa] border bg-white p-4">
                <Frown size={60} color="#555" className="my-auto"/>
                <div className="block">
                    <div className="text-[20px] font-bold">Product not found</div>
                    <div>Oh no! It looks like the product does not exist or the link provided is invalid!</div>
                    <Link href="/" className="font-bold hover:underline">Go to homepage.</Link>
                </div>
            </div>
        </BaseLayout>
    )
}