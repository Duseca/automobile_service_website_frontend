import Header from "../components/Header"
import Footer from "../pages/LandingPage/Footer"

interface HeaderFooterLayoutProps{
    children : React.ReactNode
}
const HeaderFooterLayout = ({children}:HeaderFooterLayoutProps) => {
  return (
     <div className="flex flex-col min-h-screen">
  <Header />

  {/* Main content grows to fill the space */}
  <main className="flex-1">
    {children}
  </main>

  <Footer />
</div>

  )
}

export default HeaderFooterLayout
