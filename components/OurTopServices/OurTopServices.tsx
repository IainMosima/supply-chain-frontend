"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Images } from '@/constants';

import "./OurTopServices.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import TopServiceCard from './TopServiceCard';


const OurTopService = () => {
  const services = [
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Spend analysis and category management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Procurement processes and policies review and re-engineering',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Supplier prequalification',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed faucibus turpis in eu. Nulla facilisi morbi tempus iaculis urna id.',
      serviceImg: Images.serviceMan
    },
  ]
  return (
    <div className='sm:mt-[9rem] mt-[7rem] mb-[10rem] flex flex-col'>
      <h2 className='font-semibold text-xl text-center text-purple'>Our Top Services</h2>
      <div className='w-[3rem] h-[.2rem] bg-purple mx-auto'/>
      <br/>
      

      <div className='w-full flex justify-between'>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {services.map((service, index) => 
            <SwiperSlide key={index} >
              <TopServiceCard serviceName={service.serviceName} description={service.description} serviceImg={service.serviceImg} />
            </SwiperSlide>
          )

          }
        </Swiper>
      </div>


    </div>
  )
}

export default OurTopService