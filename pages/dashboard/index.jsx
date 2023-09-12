import React from "react";
import Header from "@components/Header";
import LinearChart from "@/components/charts/LinearChart";
import DoughnutChart from "@/components/charts/DoughnutChart";
import { PiEye } from "react-icons/pi";
import CardComponent from "@/components/Card";
import TableComponent from "@/components/table";

export default function Dashboard() {
  return (
    <>
      <Header />
      <button className="btn btn-circle border-blue-500 bg-white text-blue-500 btn-outline fixed z-50 bottom-0 right-0 mb-10 mr-10 hover:bg-blue-500 hover:text-white hover:border-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          stroke="currentColor"
          className="h-10 w-10"
         
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
         
        </svg>
      </button>
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="hero h-screen w-100 bg-grey flex justify-center items-start">
        <div className="hero-content flex flex-col p-0">
          <div className="w-100">
            <h4 className="text-2xl font-bold text-center">
              Welcome Roberto Roa!
            </h4>
            {/** <span className="text-green-500">Budget</span> is a simple budgeting app*/}
            <div className="flex justify-between w-full mt-4 mb-1 pb-2">
              <h1 className="text-3xl font-bold text-center flex justify-between ">
                Balance:{" "}
                <span className="font-normal ">&nbsp;&nbsp;$500.00</span>{" "}
                USD&nbsp;&nbsp;
                <span>
                  {" "}
                  <PiEye />{" "}
                </span>
              </h1>
            </div>
          </div>
          <div className="mt-5 mr-9 ml-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-4 xl:gap-y-12 xl:mt-16">
            <CardComponent color="border-green-500" title="Incomes" />
            <CardComponent color="border-red-500" title="Expenses" />
            <CardComponent color="border-purple-500" title="Saving Goals" />
            <CardComponent color="border-blue-500" title="Budget" />
          </div>

          <div className="mt-9 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-4 xl:gap-y-12 xl:mt-16">
            <div>
              <DoughnutChart />
            </div>
            <div className="col-span-2">
              <LinearChart />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="card bg-base-100 shadow-xl mr-9 ml-9 mb-9 mt-9 flex justify-center">
        <h2 className="card-title ml-2 mb-5 mt-5 text-3xl  color:text-black">
          Latest Transactions
        </h2>
        <TableComponent />
      </div>

  
    </>
  );
}
