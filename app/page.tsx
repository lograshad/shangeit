import Image from "next/image";
import heroImg from "@/public/images/hero.png";
import blurImg from "@/public/images/Blur BG.png";
import iphoneImg from "@/public/images/iPhone.png";
import Features from "@/components/molecules/features";
import HowItWorks from "@/components/molecules/how-it-works";
import Reviews from "@/components/molecules/reviews";

export default function Home() {
  return (
    <div className="pt-10 md:pt-16 xl:pt-20 bg-white">
      <div className="lg:flex lg:items-center bg-[#2624A8] lg:h-[460px] pb-5 lg:pb-0 xl:h-[560px] 2xl:h-[700px]">
        <div className="xl:pl-20 2xl:pl-28 lg:pl-16 flex flex-col items-center lg:items-start">
          <h1 className="2xl:text-7xl text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white lg:leading-[130%] leading-[110%] text-center mt-10 lg:mt-0 lg:text-start font-bold">
            <span className="text-[#FFC567]">Send</span> and <span className="text-[#FFC567]">Receive</span><br />money with no stress
            </h1>
          <p className="xl:text-base text-xs sm:text-sm text-white text-center lg:text-start font-extralight w-[95%] sm:w-4/5 md:w-3/5 mt-5 lg:font-light lg:w-2/5 xl:w-3/6 lg:mt-7 xl:mt-14 mb-5 md:mb-10" style={
            {
              wordSpacing: '0.2em',
            }
          }>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <div className="flex space-x-4">
            <div className="bg-black rounded-lg flex flex-col gap-2 items-center w-[115px] md:w-[130px] xl:w-[140px] 2xl:w-[194px] pb-1 md:pb-2 2xl:pb-3 pt-2 md:pt-3 2xl:pt-5 cursor-pointer">
              <Image src="/icons/playstore.svg" alt="playstore" width={20} height={20} />
              <span className="text-white text-xs md:text-sm text-center">Download Android</span>
            </div>
            <div className="bg-black rounded-lg flex flex-col gap-2 items-center w-[115px] md:w-[130px] xl:w-[140px] 2xl:w-[194px] pb-1 md:pb-2 2xl:pb-3 pt-2 md:pt-3 2xl:pt-5 cursor-pointer">
              <Image src="/icons/apple.svg" alt="playstore" width={20} height={20} />
              <span className="text-white text-xs md:text-sm text-center">Download IOS</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={heroImg} width={1300} alt="hero" priority className=" lg:top-[3%] 2xl:top-[0] z-0 absolute md:w-[500px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px] right-0 h-auto" />
        </div>
        <div className="lg:hidden block">
          <Image src={blurImg} width={600} alt="hero" priority className="right-0 absolute top-0" />
        </div>
      </div>
      <Features />
      <div className="bg-white">
        <div className="text-2xl lg:text-3xl xl:text-5xl font-bold text-center mt-10 mb-3 sm:mt-0 sm:mb-5 text-black md:mb-10">Let’s get you started</div>
        <iframe
          className="w-[90%] sm:w-4/5 2xl:w-3/5 h-[250px] sm:h-[300px] lg:h-[500px] mx-auto bg-black rounded-xl"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
        </iframe>
      </div>
      <HowItWorks />
      <Reviews />
      <div className="h-[150px] sm:h-[200px] md:h-[300px] lg:h-[450px] relative mt-10 md:mt-20 lg:mt-64">
        <div className="flex items-center h-full bg-gradient rounded-2xl w-[85%] mx-auto">
          <div className="pl-5 md:pl-10 lg:pl-28">
            <div className="lg:text-3xl xl:text-4xl mb-6 text-black leading-[130%] font-bold">Download now on</div>
            <div className="flex space-x-4">
              <div className="bg-black rounded-lg flex flex-col gap-1 md:gap-2 items-center w-[110px] 2xl:w-[194px] pb-1 2xl:pb-3 pt-2 2xl:pt-5 cursor-pointer">
                <Image src="/icons/playstore.svg" alt="playstore" width={20} height={20} />
                <span className="text-white text-xs lgtext-sm font-light text-center">Download Android</span>
              </div>
              <div className="bg-black rounded-lg flex flex-col gap-1 md:gap-2 items-center w-[110px] 2xl:w-[194px] pb-1 2xl:pb-3 pt-2 2xl:pt-5 cursor-pointer">
                <Image src="/icons/apple.svg" alt="playstore" width={20} height={20} />
                <span className="text-white text-xs lgtext-sm font-light text-center">Download IOS</span>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">
            <Image src={iphoneImg} width={730} alt="hero" priority className="-top-[15px] sm:-top-[50px] lg:-top-[50px] xl:-top-[140px] z-0 absolute w-[175px] sm:w-[300px] md:w-[400px] lg:w-[550px] xl:w-[650px] 2xl:w-[730px]  right-0 h-auto" />
          </div>
        </div>
      </div>
       </div>
  );
}
