import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { TransactionContext } from "./context/TransactionContext";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <nav className="w-full flex lg:justify-center justify-between items-center p-4">
      <div className="lg:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white lg:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          "Mercado (in construction)",
          "Intercambio (in construction)",
          "Tutoriales (in construction)",
          "Billetera (in construction)",
        ].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}

        {!currentAccount && (
          <li>
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">Conectar Billetera</p>
            </button>{" "}
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white lg:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white lg:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl lg:hidden list-none
            flex flex-col justify-start items-end rounded-lg blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              "Mercado in construction",
              "Intercambio in construction",
              "Tutoriales in construction",
              "Billetera in construction",
            ].map((item, index) => (
              <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
