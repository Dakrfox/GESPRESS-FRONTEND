import Header from "@/components/Header";
import Barchart from "@/components/charts/BarChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import LinearChart from "@/components/charts/LinearChart";
import AreaChart from "@/components/charts/AreaChart";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Avatar from "react-avatar";
import TableComponent from "@/components/table";
import { PiEye } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Incomes() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <Header />
      <div className="tabs flex justify-center mb-10 mt-10 w-full 2">
        <a
          className={`tab tab-bordered ${activeTab === 0 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Monthly Incomes
        </a>
        <a
          className={`tab tab-bordered ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Annualy Incomes
        </a>
      </div>

      <div className={`tab-panel ${activeTab === 1 ? "hidden" : ""}`}>
        <div className="w-full flex justify-center items-center flex-col p-10 ">
          <h1 className="text-center text-2xl mb-10">September Incomes</h1>
          <div className="container_swiper max-w-[1000px]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="swiper_container"
              pagination={{ el: "swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              <SwiperSlide className="max-w-[500px] swiper-item">
                <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                  <div className="card-body">
                    <h2 className="text-2xl text-center flex justify-between ">
                      Total Incomes:{" "}
                      <span className="font-normal ">&nbsp;&nbsp;$500.00</span>{" "}
                      USD&nbsp;&nbsp;
                      <span className="flex justify-center items-center">
                        {" "}
                        <PiEye />{" "}
                      </span>
                    </h2>
                    <button className="btn btn-primary mt-5">
                      ADD NEW INCOME{" "}
                      <span>
                        <FiPlus></FiPlus>
                      </span>
                    </button>
                    <div className="carousel container h-full flex justify-end items-center flex-col">
                      <div className="carousel w-96 mb-5">
                        <div id="item1" className="carousel-item w-full">
                          <p>
                            {" "}
                            Note: Any money that enters your pocket can be
                            considered as income in the app, however, you have
                            to be careful if it is money from a loan because it
                            is not recurring and the expense will be greater
                            than the income.
                          </p>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                          <p>
                            {" "}
                            If you want certain cash to not be counted as
                            income, you can use it as Saving Goals, because you
                            can decide whether to take it into account or not to
                            calculate the budget. Ex emergency savings
                          </p>
                        </div>
                        <div id="item3" className="carousel-item w-full">
                          <p>
                            <q className="italic mb-2">
                              {" "}
                              Rule No. 1 is never lose money. Rule No. 2 is
                              never forget Rule No. 1.
                            </q>{" "}
                            <br />- Warren Buffet
                          </p>
                        </div>
                        <div id="item4" className="carousel-item w-full">
                          <p>
                            {" "}
                            The software does not have functions to link bank
                            accounts and follow them automatically, it is
                            necessary to understand that the security of your
                            information is worth more than all your money, trust
                            with caution, we take care of the accounts
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">
                          1
                        </a>
                        <a href="#item2" className="btn btn-xs">
                          2
                        </a>
                        <a href="#item3" className="btn btn-xs">
                          3
                        </a>
                        <a href="#item4" className="btn btn-xs">
                          4
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <LinearChart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <DoughnutChart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <Barchart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <AreaChart />
              </SwiperSlide>

              <div className="slider-controller">
                <div className="wiper-button-prev slider-arrow">
                  {/**prev button  */}
                </div>
                <div className="wiper-button-prev slider-arrow">
                  {/**next button  */}
                </div>
              </div>
            </Swiper>
          </div>
        </div>

        <div>
          <TableComponent />
        </div>
      </div>

      <div className={`tab-panel ${activeTab === 0 ? "hidden" : ""}`}>
        <div className="w-full flex justify-center items-center flex-col p-10 ">
          <h1 className="text-center text-2xl mb-10">2023 Incomes</h1>
          <div className="container_swiper max-w-[1000px]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="swiper_container"
              pagination={{ el: "swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
            >
              <SwiperSlide className="max-w-[500px] swiper-item">
                <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                  <div className="card-body">
                    <h2 className="text-2xl text-center flex justify-between ">
                      Total Incomes:{" "}
                      <span className="font-normal ">&nbsp;&nbsp;$500.00</span>{" "}
                      USD&nbsp;&nbsp;
                      <span className="flex justify-center items-center">
                        {" "}
                        <PiEye />{" "}
                      </span>
                    </h2>
                    <button className="btn btn-primary mt-5">
                      ADD NEW INCOME{" "}
                      <span>
                        <FiPlus></FiPlus>
                      </span>
                    </button>
                    <div className="carousel container h-full flex justify-end items-center flex-col">
                      <div className="carousel w-96 mb-5">
                        <div id="item1" className="carousel-item w-full">
                          <p>
                            {" "}
                            Note: Any money that enters your pocket can be
                            considered as income in the app, however, you have
                            to be careful if it is money from a loan because it
                            is not recurring and the expense will be greater
                            than the income.
                          </p>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                          <p>
                            {" "}
                            If you want certain cash to not be counted as
                            income, you can use it as Saving Goals, because you
                            can decide whether to take it into account or not to
                            calculate the budget. Ex emergency savings
                          </p>
                        </div>
                        <div id="item3" className="carousel-item w-full">
                          <p>
                            <q className="italic mb-2">
                              {" "}
                              Rule No. 1 is never lose money. Rule No. 2 is
                              never forget Rule No. 1.
                            </q>{" "}
                            <br />- Warren Buffet
                          </p>
                        </div>
                        <div id="item4" className="carousel-item w-full">
                          <p>
                            {" "}
                            The software does not have functions to link bank
                            accounts and follow them automatically, it is
                            necessary to understand that the security of your
                            information is worth more than all your money, trust
                            with caution, we take care of the accounts
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">
                          1
                        </a>
                        <a href="#item2" className="btn btn-xs">
                          2
                        </a>
                        <a href="#item3" className="btn btn-xs">
                          3
                        </a>
                        <a href="#item4" className="btn btn-xs">
                          4
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <LinearChart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <DoughnutChart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <Barchart />
              </SwiperSlide>

              <SwiperSlide className="max-w-[500px] swiper-item">
                <AreaChart />
              </SwiperSlide>

              <div className="slider-controller">
                <div className="wiper-button-prev slider-arrow">
                  {/**prev button  */}
                </div>
                <div className="wiper-button-prev slider-arrow">
                  {/**next button  */}
                </div>
              </div>
            </Swiper>
          </div>
        </div>

        <div>
          <TableComponent />
        </div>
      </div>
    </>
  );
}
