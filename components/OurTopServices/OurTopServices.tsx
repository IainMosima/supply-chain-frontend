"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Images } from '@/constants';

import "./OurTopServices.scss";
import "swiper/css";

import TopServiceCard from './TopServiceCard';


const OurTopService = () => {
  const services = [
     {
      serviceName: 'Supplier prequalification',
      description: 'As industry experts, we relieve you of this arduous and taxing exercise and ensure that you get the suitable supply chain partners that you need to deliver value to your clients.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Spend analysis and category management',
      description: 'We assist our clients in identifying who they spend their financial resources with and on what and help them come up with better sourcing strategies with the aim of increasing profitability.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Procurement processes and policies review and re-engineering',
      description: 'in case you are not an expert in this space or you are considering outsourcing your procurement function, worry not for we got your back and best interests at heart. Our highly trained and experienced supply chain specialists will ensure that you get value for your money.',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Market Intelligence ',
      description: 'Information is power. We are actively scanning the market for trends and new developments to ensure our clients leverage that information to stay ahead of the game.',
      serviceImg: Images.serviceWoman
    },
    {
      serviceName: 'Policies, Process Review, and Re-engineering',
      description: 'Albert Einstein said, “Insanity is doing the same thing over and over and expecting different results.” With this in mind, we help our clients in drafting supply chain policies and procedures, reviewing and re-engineering the same so that they remain relevant. ',
      serviceImg: Images.serviceMan
    },
    {
      serviceName: 'Procurement Audit',
      description: 'The management and the investor need comfort and assurance that no company resource is wasted. As supply chain specialists, we aid our clients in carrying out audits of the sourcing exercise and recommend the best in class practices that safeguard company’s resources against wastage. ',
      serviceImg: Images.serviceWoman
    },
  ]
  return (
    <div className='lg:mt-[9rem] md:mt-[9rem] mt-[7.6rem] mb-[2rem] flex flex-col'>
      <h2 className='font-semibold text-xl text-center text-purple'>Our Top Services</h2>
      <div className='w-[2rem] h-[.2rem] bg-purple mx-auto'/>
      <br/>
      

      <div className='w-full flex h-[30rem] justify-between'>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
          {services.map((service, index) => 
            <SwiperSlide key={index} className='custom-cards'>
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