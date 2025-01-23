import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Bottom from '../Footer/Bottom';

const NavLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Bottom />
      <Footer />
    </>
  );
};

export default NavLayout;
