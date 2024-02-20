"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useRouter } from "next/navigation";

interface KnowledgeHubSelectorProps {
  topics: string[];
  selectedTopic: string;
  setSelectedTopic: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<never[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const KnowledgeHubSelector = ({ selectedTopic: selectedCareerType, topics: careerTypes, setSelectedTopic: setSelectedCareerType,
  setResults, setIsLoading }: KnowledgeHubSelectorProps) => {

  const navigator = useRouter();
  const handleTopicSelector = async (topic: string) => {
    return navigator.push(`/knowledge-hub/${topic}`);
  }


  return (
    <div className="w-full z-0 bg-white mt-2]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1020: {
            slidesPerView: 9,
          },
        }}
        spaceBetween={80}
      >
        <div className="flex justify-center gap-2 w-full">
          {careerTypes.map((careerType, index) => (
            <SwiperSlide key={index}>
              <button
                className={`mt-3 mb-3 border rounded-[11px] px-3 py-[0.25rem] font-semibold ease-in-out duration-100 mx-auto border-black w-auto h-auto ${careerType === selectedCareerType
                  ? "bg-purple border-purple text-white"
                  : "sm:hover:bg-purple sm:hover:border-purple sm:hover:text-white"
                  }`}
                onClick={() => handleTopicSelector(careerType)}

              >
                {careerType}
              </button>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default KnowledgeHubSelector;
