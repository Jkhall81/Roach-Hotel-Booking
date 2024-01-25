"use client";
import React, { FC } from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";
import Image from "next/image";

type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props;
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="oy-10 h-full">
        {heading1}
        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Basic Room</p>
            <CountUpNumber duration={3000} endValue={187} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Luxury Room</p>
            <CountUpNumber duration={3000} endValue={223} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-lg text-center">Suite</p>
            <CountUpNumber duration={3000} endValue={146} />
          </div>
        </div>
      </div>

      {/* IMAGES */}
      {section2}
    </section>
  );
};

export default ClientComponent;
