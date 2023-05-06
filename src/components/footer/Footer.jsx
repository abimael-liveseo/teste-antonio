import logo from "../../assets/img/logo.svg";

import "../../styles/index.css";

function Footer() {
  const data = new Date();
  const year = data.getFullYear;

  return (
    <div className="flex flex-col w-full justify-center items-center bg-footer py-20">
      <div className="flex flex-row gap-24">
        <div className="flex flex-col">
          <div className="flex flex-col gap-7">
            <img src={logo} alt="" className="w-44" />
            <div className="flex relative flex-row">
              <input type="text"  className="py-2 w-full focus:outline-none placeholder:pl-2" placeholder="Entar Email"/>
              <div className="">
                <button className="px-3 py-3 bg-[#F4DCDC]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
              <div>
                <p>Subscribe Our Weekly Blog</p>
              </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-6">
            <strong>Company</strong>
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">About US</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="mb-6">
            <strong>Support</strong>
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Terms & Privacy</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">Affiliate</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 ">
          <p>
            <strong>Get In Toch</strong>
          </p>
          <ul>
            <li>
              <p>Sed uterspis unde omnis iste lano natus error voluem</p>
            </li>
            <li>
              <div>
                <a href="" className="flex flex-row gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13.1737C15.6569 13.1737 17 11.8818 17 10.2883C17 8.6947 15.6569 7.40286 14 7.40286C12.3431 7.40286 11 8.6947 11 10.2883C11 11.8818 12.3431 13.1737 14 13.1737Z"
                      stroke="#F88D31"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 2.59387C11.8783 2.59387 9.84344 3.40452 8.34315 4.8475C6.84285 6.29048 6 8.24758 6 10.2883C6 12.108 6.402 13.2987 7.5 14.6164L14 21.8298L20.5 14.6164C21.598 13.2987 22 12.108 22 10.2883C22 8.24758 21.1571 6.29048 19.6569 4.8475C18.1566 3.40452 16.1217 2.59387 14 2.59387V2.59387Z"
                      stroke="#F88D31"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p>255 Main street, New york</p>
                </a>
              </div>
            </li>
            <li>
              <div className="flex">
                <a href="" className="flex flex-row gap-2">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66667 6.0981V17.3191H16.6667V18.9221H1.66667C0.745833 18.9221 0 18.2087 0 17.3191V6.0981H1.66667ZM19.1917 4.72754L11.6667 0.199081L4.14167 4.72754C3.65833 5.00807 3.33333 5.51301 3.33333 6.0981V14.1131C3.33333 14.9947 4.08333 15.7161 5 15.7161H18.3333C19.25 15.7161 20 14.9947 20 14.1131V6.0981C20 5.51301 19.675 5.00807 19.1917 4.72754ZM18.3333 14.1131H5V7.7011L11.6667 11.7086L18.3333 7.7011V14.1131ZM11.6667 10.1056L5 6.0981L11.6667 2.09062L18.3333 6.0981L11.6667 10.1056Z"
                      fill="#F88D31"
                    />
                  </svg>
                  support@gmail.com
                </a>
              </div>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <hr className="h-1" />
      <div className="flex flex-row justify-around">
        <div className="flex row">
          <p> {year} </p>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}

export default Footer;
