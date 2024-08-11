import Image from "next/image";

const Features = () => {
    const features = [
        {
            title: 'Peer 2 peer exchange solution',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: '/images/peer2peer.png',
        },
        {
            title: 'Pick your rate',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: '/images/rate.png',
        },
        {
            title: 'Little or no charges',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: '/images/money.png',
        },
        {
            title: 'Speed and efficient exchange',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: '/images/bolt.png',
        },
        {
            title: 'Built with Core Security Features',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            image: '/images/shield.png',
        },
    ]
    return (
        <div className="lg:pt-16 pt-10 xl:pt-20 bg-white">
            <div className="text-black text-2xl lg:text-3xl xl:text-5xl font-bold text-center sm:mb-16 lg:mb-20 xl:mb-32">Our Features</div>
            <div className="lg:w-4/5 w-[90%] sm:w-5/6 xl:w-2/3 mx-auto">
                {
                    features.map((feature, index) => (
                        <div key={index} className="flex items-center sm:items-center flex-col sm:odd:flex-row sm:even:flex-row-reverse sm:justify-between sm:-mt-10 md:-mt-20 xl:-mt-32">
                            <Image src={feature.image} alt={feature.title} width={560} height={560} className="h-auto xl:w-[560px] lg:w-[450px] w-[200px] sm:w-[350px]" />
                            <div className="w-full sm:w-1/2">
                                <h4 className="text-[#0D084D] font-bold text-xl lg:text-2xl">{feature.title}</h4>
                                <p className="text-sm lg:text-lg font-normal text-black mt-4">{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Features;