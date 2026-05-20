"use client";
import Slide_1 from "@/app/assets/Slide_1.png"
import Slide_2 from "@/app/assets/Slide_3.png"
import Idea_Vault from "@/app/assets/logo.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import { nunito, poppins } from "@/app/layout";
import { Button } from "@heroui/react";
const Slidered = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="w-full mx-auto relative"
        >

            <SwiperSlide className=" w-full bg-[#01626a]">
                <div className="grid grid-cols-l sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex items-center flex-col container justify-center p-5">
                        <h2 className="flex items-start w-[50%] mx-auto ">
                            <Image className="bg-white p-2 flex justify-start rounded-full" src={Idea_Vault} alt={"Book Logo"} width={"100"} />
                        </h2>
                        <div>
                            <span className={`${nunito.className} text-4xl font-bold text-white `}>
                                <span className='text-blue-400 text-5xl font-bold'>Idea</span>  Vault </span><br />
                            <br />
                            <p className={` ${poppins.className} w-100 text-xl text-white`}>
                                "Lets share your Idea with us, do something with us, Grow with together, Lets do it!"
                            </p>
                            <div>
                                {/* <Button>
                                Add Your Idea
                            </Button> */}
                                <br />
                                <Button className={`rounded-sm p-5 w-auto text-lg font-bold text-center h-10 ${nunito.className}`}>
                                    View Ideas 💡
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image src={Slide_1} alt="Slide 1" className="w-full"  />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className=" w-full bg-[#031b28]">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex items-center flex-col justify-center p-5">
                       <h2 className="flex items-start w-[50%] mx-auto ">
                            <Image className="bg-white p-2 rounded-full" src={Idea_Vault} alt={"Book Logo"} width={"100"} />
                        </h2>
                        <div>
                            <span className={`${nunito.className} text-4xl font-bold text-white `}>
                                <span className='text-blue-400 text-5xl font-bold'>Idea</span>  Vault </span><br />
                            <br />
                            <p className={` ${poppins.className} w-100 text-xl text-white`}>
                                "Lets share your Idea with us, do something with us, Grow with together, Lets do it!"
                            </p>
                            <div>
                                {/* <Button>
                                Add Your Idea
                            </Button> */}
                                <br />
                                <Button className={`rounded-sm p-5 w-auto text-lg font-bold text-center h-10 ${nunito.className} `}>
                                    View Ideas 💡
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image src={Slide_2} alt="Slide 1" className="w-full" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slidered