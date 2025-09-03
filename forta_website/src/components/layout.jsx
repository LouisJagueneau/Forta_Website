import MobileNav from "./mobileNav"
import Nav from "./nav"
import Footer from "./footer"

function Layout({ children }) {
    return (
        <div>
            <div>
                <div className="hidden lg:absolute lg:block fixe top-0 left-0 w-full z-20">
                    <Nav />
                </div>

                <div className="lg:hidden fixed top-0 left-0 w-full z-20">
                    <MobileNav />
                </div>

                <main>
                    <div>
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout