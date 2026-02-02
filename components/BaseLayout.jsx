import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Chatbot from "@/components/Chatbot/Chatbot";

export default async function BaseLayout({ children, searchQuery }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header searchQuery={searchQuery}></Header>
            <div className="flex flex-col w-[80%] flex-1 mx-auto">
                {children}
            </div>
            {/* chatbot */}
            <Chatbot/>
            <Footer></Footer>
        </div>
    )
}