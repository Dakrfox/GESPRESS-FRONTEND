import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hoursRef, minutesRef, secondsRef] = Array(3).fill(useRef(null))
  const router = useRouter();
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    // Función para actualizar el contador cada segundo
    const updateCounter = () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    };

    // Actualiza el contador cada segundo
    const interval = setInterval(updateCounter, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);
  const formatTime = (value) => (value < 10 ? `0${value}` : value);
  useEffect(() => {
    hoursRef.current.style.setProperty('--value', hours);
    minutesRef.current.style.setProperty('--value', minutes);
    secondsRef.current.style.setProperty('--value', seconds);
  }, [hours, minutes, seconds]);
  return (
    <main className={`${inter.className}`}>
      <div data-theme="light">
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: "url(/images/bg.webp)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Budget managment App</h1>
              <p className="mb-5">
                Unlock financial freedom with our app, where managing your
                budget becomes a journey of empowerment and financial clarity.
              </p>
              <button
                className="btn glass text-gray-300 hover:text-gray-900 mr-10"
                onClick={() => router.push("/Login")}
              >
                Login
              </button>
              <button
                className="btn btn-info text-gray-900 hover:text-gray-300"
                onClick={() => router.push("/Register")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/** section 2 */}
        <div className="w-100 h-screen flex justify-center items-center flex-col mt-10">
          <h1 className="text-4xl font-bold text-center">
            What is Budget Management App?
          </h1>
          <p className="text-center mt-5 ml-10 mr-10 ">
            Budget Management App is a simple budgeting app that allows you to
            manage your budget, income and expenses.
          </p>
          <p className="text-center mb-15  ml-10 mr-10">
            In just
          </p>
          <span className="countdown font-mono text-4xl m-10">
            <span ref={hoursRef} style={{ '--value': hours }}></span>:
            <span ref={minutesRef} style={{ '--value': minutes }}></span>:
            <span ref={secondsRef} style={{ '--value': seconds }}></span>
          </span>
          <p className="text-center mb-10  ml-10 mr-10">You will have all the app experience in a free account creation. what are you waiting for?</p>
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Register for 24hr</li>
            <li className="step step-primary">Track your incomes and Expenses</li>
            <li className="step step-primary">Define your saving goals</li>
            <li className="step step-primary">Use our budget calculation or set your own</li>
          </ul>
        </div>
        {/** section 3  */}

        <div className="w-100 h-screen flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-center ">
            Is this worth it?
          </h1>
          <p className="text-center mt-5 ml-10 mr-10 mb-10">
            Money is more than just numbers; it's the key to achieving your dreams and aspirations. <br />
            Our cutting-edge budget management app is here to help you <br />
            take control of your financial journey
            like never before..
          </p>
          <div className="card sm:card-side bg-base-100 shadow-xl">
            <figure><Image src="/images/monitor.webp" width={350} height={350} alt="monitor" /></figure>
            <div className="card-body">
              <h2 className="card-title">Manage your budgets</h2>

              <ul className="list-disc text-sm space-y-4">
                <li>
                  <p>Track your expenses and incomes.</p>
                </li>

                <li>
                  <p>Manage your saving goals.</p>
                </li>

                <li>
                  <p>Visualize your movements with charts.</p>
                </li>

                <li>
                  <p>Adjust and specify the variables for your budget.</p>
                </li>

                <li>
                  <p>Take control of your finances and your life.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/** section 4  */}
        <div className="pl-20 pr-20 h-screen flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold text-center">
            FAQs about Budget Management App
          </h1>
          <div className="flex flex-col justify-center items-center mt-10 mt-10 w-full text-center">

            <div className="collapse mb-5 text-xl border-2 border-grey-500">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
                Why does the account only last 24 hours?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Our application shows a demo of how to use our app and be able to test it so that you, as a user and potential client, can know if it meets your needs or not.
                  We do not offer budget management service, our purpose is to sell the code for commercial or personal use and a technical support and/or development service group.</p>
              </div>
            </div>

            <div className="collapse mb-5 text-xl border-2 border-grey-500">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
                What happens to my data after 24 hours?

              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>
                  Your data will be permanently deleted from the app.
                  Likewise, you can also create a new account with the same email and data.
                  The application is for testing purposes only.</p>
              </div>
            </div>

            <div className="collapse mb-5 text-xl border-2 border-grey-500">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">

                How do savings goals affect the budget?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>
                  Savings goals can be very subjective when creating a budget. On the one hand, there are people who take into account the money allocated to savings goals as part of the balance sheet and want this to be part of the budget calculation. On the other hand, there are those who use savings goals as money that cannot be considered available money and that cannot be manipulated for purposes other than those created.</p>
              </div>
            </div>

            <div className="collapse mb-5 text-xl border-2 border-grey-500">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
                What after-sales services do they offer?              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>In the sale you will receive a technical and general documentation of the application, you will also have a guide oriented for correct use made by the developers themselves. You will have a 3-month satisfaction guarantee where our developers will be at your disposal to handle any errors or bugs that occur in the application.
                  Lastly, you will receive software updates for the next 3 years, which ensures greater security reliability and updated libraries.</p>
              </div>
            </div>

            <div className="collapse mb-5 text-xl border-2 border-grey-500">
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:bg-secondary peer-checked:text-secondary-content">
                What if I have to make changes to meet my needs?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>Any feature you want to add that is not found in the application code will have an extra charge, since it will require developers' labor to create it, implement it and ensure that it meets expectations.</p>
              </div>
            </div>


          </div>
        </div>
        {/** end light theme*/}
      </div>
    </main>
  );
}
