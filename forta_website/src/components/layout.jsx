import MobileNav from "./mobileNav"
import Nav from "./nav"
import Footer from "./footer"

function Layout({ children }) {
    <div>
        <div className="container w-screen min-h-screen mx-auto px-10 xl:px-30 2xl:px-50">
            <div className="hidden md:block">
                <Nav />
            </div>

            <div className="md:hidden">
                <MobileNav />
            </div>

            <main>
                <div>
                    {children}
                </div>
            </main>
        </div>
        <Footer/>
    </div>
}

export default Layout