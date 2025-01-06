import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
function App() {
  const itemNav = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 4,
      name: "Todo",
      href: "/todo"
    }
  ];
  return (
    <>
      <Nav itemNav={itemNav} />
      <main className="h-screen mx-auto my-10 max-w-6xl p-20 bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
