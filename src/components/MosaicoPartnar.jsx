import slack from "../assets/img/slacklogo.svg";
import microsoft from "../assets/img/microsoftlogo.svg";
import facebook from "../assets/img/facebooklogo.svg";
import google from "../assets/img/google.svg";
import star from "../assets/img/star.svg";

function MosaicoPartnar() {
  return (
    <div className="flex flex-col relative top-4">
      <div className="relative bottom-12 text-2xl text-color-business font-semibold">
        <p>Our Partnar</p>
      </div>
      <div className="flex flex-row items-center mt-0 gap-14">
        <div className="w-44 h-9">
          <img src={slack} alt="" />
        </div>
        <div className="w-44 h-9">
          <img src={microsoft} alt="" />
        </div>
        <div className="w-44 h-9">
          <img src={facebook} alt="" />
        </div>
        <div className="w-44 h-9">
          <img src={google} alt="" />
        </div>
        <div className="w-44 h-9 relative -top-24">
          <div className="text flex flex-col gap-2">
            <div>
              <p className="text-7xl font-semibold">4.7K</p>
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <p>1,938 Rating</p>
            </div>
            <div>
              <p className="text-text-primary">Satisfy Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MosaicoPartnar;
