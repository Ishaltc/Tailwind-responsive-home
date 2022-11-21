

export default function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg: col-span-2 my-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow ?</h1>
        <p>Sign up to our newsletter and stay up date.</p>
        </div>
        <div className="my-4">
            <div className=" flex flex-row sm:flex row items-center justify-between w-full">
            <input  className="p-3 flex w-full rounded-md text-black"type="email" placeholder="Enter Email"/>
            <button className="w-[200px] bg-[#00df9a] rounded-md font-medium  my-6 ml-4 py-3 px-6 text-black">Notify Me</button>
        </div>
        <p>We care bout the protection of your data.Read our <span className="text-[#00df9a] cursor-pointer">Privacy Policy.</span> </p>
        </div>
      </div>
    </div>
  )
}
