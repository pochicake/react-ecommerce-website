// Used to display a page when a product does not exist, or the URL provided is invalid
"use server"

import Header from "@/components/Header/Header";
import Link from "next/link";

export default async function ErrorNonExistent() {
    return (
        <div className="flex flex-col h-full w-full">
        <Header></Header>
        <div className="m-auto">
            <div>Sorry! The product does not exist or the link provided is invalid!</div>
            <Link href="/">Go to homepage.</Link>
        </div>
        </div>
    )
}