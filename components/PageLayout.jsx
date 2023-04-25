import Nav from './Nav'
import Footer from './Footer'

export default function PageLayout({children}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
