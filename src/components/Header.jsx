/* eslint-disable no-unused-vars */
import logo from "../assets/img/logo.svg";
import "../styles/index.css";
import Menu from "./Menu/Menu";

function Header() {
  return (
    <div className="bg-white m-auto w-full flex justify-between rounded-lg">
      <div className="flex">
        <div className="my-5 mx-10">
          <img src={logo} alt="" className="logo w-52 h-12" />
        </div>
      </div>
      <div className="menu m-auto text-xl">
        <div className="mx-6">
          <ul className="flex flex-row gap-10 font-medium items-center">
            <li>
              <a href="#" className="hover:text-orange-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">Service</a>
              <ul className="relative">
                <li className="flex absolute top-7 justify-center items-center bg-orange-500 bg-gradient-to-r from-orange-300 rounded-md border-transparent ">
                    <a href="#" className="text-white py-1 px-3">
                        New
                    </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">Team</a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn-register h-12 flex justify-end bg-orange-500 bg-gradient-to-r from-orange-300 rounded-lg border-2">
        <div className="w-44 flex justify-center items-center text-center">
          <button className="text-lg font-semibold">Get A Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
