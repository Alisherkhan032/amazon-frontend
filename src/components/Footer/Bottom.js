import flag from "../../assets/india.png";
import logo from "../../assets/amazon_logo.png";
const Bottom = () => {
  return (
    <div>
      <div
        className="flex justify-center cursor-pointer items-center h-[7vh] bg-slate-700 text-xl text-white"
        onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}
      >
        <button className="cursor-pointer bg-transparent text-white hover:text-gray-300">
          Back to top
        </button>
      </div>

      <div className="flex justify-center h-auto bg-slate-800 py-8">
        <div className="flex flex-wrap justify-between w-3/4 text-white">
          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Get to Know Us</span>
            <span>About Amazon</span>
            <span>Careers</span>
            <span>Press Releases</span>
            <span>Amazon Science</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Connect with Us</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Make Money with Us</span>
            <span>Sell on Amazon</span>
            <span>Sell under Amazon Accelerator</span>
            <span>Protect and Build Your Brand</span>
            <span>Amazon Global Selling</span>
            <span>Supply to Amazon</span>
            <span>Become an Affiliate</span>
            <span>Fulfilment by Amazon</span>
            <span>Advertise Your Products</span>
            <span>Amazon Pay on Merchants</span>
          </div>

          <div className="flex flex-col space-y-2 w-1/4 mb-6 cursor-pointer">
            <span className="font-semibold text-lg">Let Us Help You</span>
            <span>Your Account</span>
            <span>Returns Centre</span>
            <span>Recalls and Product Safety Alerts</span>
            <span>100% Purchase Protection</span>
            <span>Amazon App Download</span>
            <span>Help</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[10vh] bg-slate-800 border-t border-white gap-9">
        <span className="text-2xl font-bold text-white">
          <img src={logo} alt="Amazon Logo" className="h-6 inline" />
        </span>
      </div>
    </div>
  );
};

export default Bottom;
