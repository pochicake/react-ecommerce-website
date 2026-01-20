import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function BaseLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <div className="w-[80%] h-full mx-auto">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}