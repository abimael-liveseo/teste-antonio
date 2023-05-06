/* eslint-disable react/no-unknown-property */
import imgHero from '../assets/img/img-hero.svg'


function Hero() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid-columns-1 w-2/4">
        <div className="flex flex-col float-right mr-32 gap-5">
          <div className="text text-text-color">
            <h2 className="text-6xl font-bold capitalize leading-[4.688rem]">
              Best Solution For<br />
              Your <span className="text-color-business border-2 border-orange-300 bg-white opacity-90 px-2">
                Business
              </span>
              <br />
              Startup
            </h2>
          </div>
          <div className="small-text w-[27.813rem]">
            <p className='text-base text-text-color opacity-90'>
              Pellentesque non pretium sem. Sed sit amet diam vitae tortor
              mattis tincidunt et at neque.
            </p>
          </div>
          <div className="btn">
            <div className="flex gap-3">
              <div className="btn-started ">
                <button className="flex justify-center items-center gap-5 border-2 rounded-lg bg-btn-started py-2 px-4 text-white">
                  Get Started
                  <div className="bg-white border-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke-height="0.4"
                      stroke="blue"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="btn-player flex justify-center w-14 rounded-lg items-center bg-orange-500">
                <button>
                    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img flex w-2/4 relative top-10 right-16">
        <div className="flex">
            <img src={imgHero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
