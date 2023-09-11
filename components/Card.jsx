import React, { useState } from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";

export default function CardComponent(props) {
  const [borderColor, setBorderColor] = useState(
    props.color || "border-green-500"
  );

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-5">
        <div className={`border-l-2 ${borderColor} mr-9`}>
          <h2 className="card-title ml-2">{props.title}</h2>
          <p className="ml-2">$300.00 USD</p> <hr className="my-2" />
          <a
            className="ml-2 underline text-blue-900 hover:text-black transition-all duration-300 ease-in-out hover:scale-125 "
            href="/dashboard"
          >
            Go to {props.title} 
            <span>
              <PiCaretDoubleRightBold className="svg_goTo" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
