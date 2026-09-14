import HeroImage from "../assets/banner-stack.png";

export default function HeroSection() {
 return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-20 border-b border-gray-50">
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
   
<div className="flex flex-col items-start max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight text-lock transparent">
            Build Your Ideal{" "}
<span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block ">
              Development Stack
            </span>
          </h1>
 <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
Explore frontend, backend, database, and tooling options, compare
them side by side, and put together the stack that fits your next
project.</p>

<div className="mt-8 flex flex-wrap items-center gap-4">
  <button type="button"className="px-6 py-3  bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-medium rounded-2xl shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer hover:text-amber-900  "
  >Explore Technologies</button>
<button className="btn btn-soft px-8 rounded-xl py-5.5 bg-gray-50 text-gray-800 hover:bg-gray-900 hover:text-amber-50 transition-all duration-500 cursor-pointer">  Learn More</button>
          </div>
        </div>

 <div className="flex justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="3D Technology Stack Illustration"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-600"
          />
        </div>
      </div>
    </section>
  );
}