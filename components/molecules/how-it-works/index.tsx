import Image from "next/image";


const HowItWorks = () => {
    const steps = [
        {
            title: '01 - Request an exchange',
            description: 'Amet minim mollit non deserunt ullamco..',
            image: '/images/step-1.png',
        },
        {
            title: '02 - Pay',
            description: 'Amet minim mollit non deserunt ullamco.',
            image: '/images/step-2.png',
        },
        {
            title: '03 - Get credited',
            description: 'Amet minim mollit non deserunt ullamco.',
            image: '/images/step-3.png',
        },
    ]
    return (
        <div className="mt-20">
            <div className="text-2xl lg:text-3xl xl:text-5xl font-bold text-center md:mb-10 text-black">How it works</div>
            <div className="mx-auto w-[95%] sm:w-2/3 flex sm:gap-4 gap-2 lg:flex-col">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-7">
                    {
                        steps.map((step, index) => (
                            <div key={index}>
                                <Image src={step.image} alt={step.title} width={210} height={210} className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[210px]" />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-around lg:justify-between">
                    {
                        steps.map((step, index) => (
                            <div key={index} className="flex flex-col  items-center relative">
                                <h1 className="text-[#0D084D] text-sm sm:text-base font-bold">{step.title}</h1>
                                <p className="text-xs sm:text-sm text-center font-normal text-black">{step.description}</p>
                                <div className={`${index === 2 ? "hidden" : "xl:w-[9vw] 2xl:w-[10vw] h-1 bg-[#0D084D] absolute top-2 xl:left-[95%] 2xl:left-[110%]"}`}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;