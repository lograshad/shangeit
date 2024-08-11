import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


const Reviews = () => {
    const reviews = [
        {
            review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            name: "John Doe",
            image: "/images/avatar.png"
        },
        {
            review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            name: "Jane Doe",
            image: "/images/avatar.png"
        },
        {
            review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            name: "Shawn Doe",
            image: "/images/avatar.png"
        }
    ]
    return (
        <div>
            <div className="text-2xl lg:text-3xl xl:text-5xl font-bold text-center -mb-10 mt-20">What people are saying</div>
            <div className="w-[60%] sm:w-[70%]  lg:w-[85%] mx-auto">
                <Carousel className="w-full lg:mt-10">
                    <CarouselContent>
                        {
                            reviews.map((review, index) => (
                                <CarouselItem key={index} className="w-full">
                                    <div className="flex flex-col items-center mt-20">
                                        <div className="text-xs sm:text-sm font-normal leading-[20px] mb-7">{review.review}</div>
                                        <Image src={review.image} width={60} height={60} alt={review.name} />
                                        <div className="mt-5 mb-2 sm:text-xl lg:text-2xl font-bold">{review.name}</div>
                                        <Image width={104} height={16} src="/images/stars.png" alt="ratings" />
                                    </div>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default Reviews;