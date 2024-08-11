import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const links = [
        {href: '#', label: 'About Us'},
        {href: '#', label: 'Contact Us'},
        {href: '#', label: 'Legal'},
        {href: '#', label: 'Blog'},
        {href: '#', label: 'Career'},
    ]
    return ( 
        <div className="bg-[#F3F9FF] h-[375px] pt-5 md:pt-16 pb-3 md:pb-10 relative mt-28 sm:mt-32 md:mt-48 lg:mt-60 xl:mt-72">
            <div className="w-[85%] mx-auto flex flex-col md:flex-row items-start justify-between z-20 relative">
                <Image src="/logo.svg" alt="shange it" width={211} height={58}  className="w-[130px] sm:w-[160px] md:w-[211px]"/>
                <div>
                    <div className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 text-black md:mb-5">Quick Access</div>
                    <ul>
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <Link className="text-sm font-normal text-black hover:font-semibold" href={link.href}>{link.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="pr-28">
                    <div className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mt-0 mt-2 md:mb-5">Get in touch</div>
                    <div className="flex items-center justify-center gap-3">
                        <Image src="/icons/facebook.svg" width={30} height={30} alt="facebook logo"/>
                        <Image src="/icons/twitter.svg" width={30} height={30} alt="twitter logo"/>
                        <Image src="/icons/instagram.svg" width={30} height={30} alt="instagram logo"/>
                    </div>
                </div>
            </div>
            <div className="bg-black h-[2px] sm:h-[3px] relative z-20 mt-4 sm:mt-8 md:mt-16 w-[85%] mx-auto"></div>
            <div className="text-center text-[#474747] mt-4 z-50 relative md:mt-8 md:pb-6">Copyright © 2021 Shange It</div>
            <Image src="/icons/circle.svg" width={285} height={375} alt="circle svg" className="absolute bottom-0 right-0"/>
        </div>
     );
}
 
export default Footer;