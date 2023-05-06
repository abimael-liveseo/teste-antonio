import rocket from "../assets/img/rocket.svg";
import userCeo from "../assets/img/user-ceo.svg";
import bag from '../assets/img/bag.svg'
import grafico from '../assets/img/grafico.svg'
import coin from '../assets/img/coin-increase.svg'
import timeToMoney from '../assets/img/time-money.svg'

function Lista() {
  return (
    <div className="flex w-20">
      <div className="flex-col gap-10">
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={rocket} alt="Icone de Foguete" className="p-4" />
            </div>
            <div className="flex ">
              <p className="active:text-color-business">
                <a href="">Awesome projects</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={userCeo} alt="Icone de um usuario que tem o cargo de CEO" className="p-4" />
            </div>
            <div className="flex ">
              <p className="active:text-color-business">
                <a href="">Version from</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={bag} alt="" className="p-4" />
            </div>
            <div className="flex ">
              <p className="active:text-color-business">
                <a href="">Publishing Pack</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={grafico} alt="" className="p-4" />
            </div>
            <div className="flex">
              <p className="active:text-color-business">
                <a href="">Vivamus Turpis</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={coin} alt="" className="p-4" />
            </div>
            <div className="flex">
              <p className="active:text-color-business">
                <a href="">Posuere Maximus</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-60 flex mb-7">
          <div className="flex flex-row justify-cennter items-center gap-5">
            <div className="border-2 rounded-full shadow-md">
              <img src={timeToMoney} alt="" className="p-4" />
            </div>
            <div className="flex">
              <p className="active:text-color-business">
                <a href="">Awesome projects</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lista;
