import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl  flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-center text-2xl font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] text-black font-medium mx-auto rounded-md my-6 py-3 px-6 mt-3">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col rounded-lg p-4 md:my-0 my-8 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-center text-2xl font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] text-[#00df9a] bg-black font-medium mx-auto rounded-md my-6 py-3 px-6 mt-3">
            Start Trail
          </button>
        </div>
        <div className="w-full shadow-xl  flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-center text-2xl font-bold py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] text-black font-medium mx-auto rounded-md my-6 py-3 px-6 mt-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}
