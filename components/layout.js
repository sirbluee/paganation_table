import Footer from './footer';
import Navbar from './navbar';


const Layout = ({children})=>{
    return (
        <>
        <Navbar/>
        <main className="lg-light">{children}</main>
        <Footer/>
        </>
    )
}
export default Layout;