import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metadata } from 'next'
import ProductsSlider from "@/components/ProductsSlider/ProductsSlider";
import BaseLayout from "@/components/BaseLayout";

export const metadata = {
  title: 'YokanStore | Cheap prices, great deals and quick delivery!',
}

export default async function Home() {
  var testdata = await fetch('https://dummyjson.com/products');

  if (!testdata.ok) {
    throw new Error("Failed to fetch products: ${res.status}");
  }

  var productJsonData = await testdata.json();

  // console.log(productJsonData);

  return (
    // <div className="flex flex-col min-h-screen font-sans dark:bg-black">
    //   <Header></Header>
    //   <main>
    //     <ProductsSlider items={productJsonData['products']}></ProductsSlider>
    //   </main>
    //   <Footer></Footer>
    // </div>
    <BaseLayout>
      <ProductsSlider items={productJsonData['products']}></ProductsSlider>
    </BaseLayout>
  );
}
