"use client";

import { FC, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setKids: Dispatch<SetStateAction<number>>;
  calcMinCheckoutDate: () => Date | null;
  price: number;
  discount: number;
  specialNote: string;
  adults: number;
  kids: number;
  isBooked: Boolean;
  handleBookNow: () => void;
};

const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calcMinCheckoutDate,
    setAdults,
    setKids,
    adults,
    kids,
    isBooked,
    handleBookNow,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  return (
    <div className="px-7 py-6">
      <h3 className="text-center">
        <span
          className={`${
            discount ? "text-tertiary-dark" : ""
          } font-bold text-xl mr-2`}
        >
          $ {discountPrice}{" "}
        </span>
        {discount ? (
          <span className="font-bold text-xl">with {discount}% Discount! </span>
        ) : (
          ""
        )}
      </h3>
      <div className="w-full border-b-2 border-b-secondary my-2" />
      <h4 className="my-8">{specialNote}</h4>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            htmlFor="check-in-date"
          >
            Check In Date
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={(date) => setCheckinDate(date)}
            dateFormat="MM/dd/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
            htmlFor="check-out-date"
          >
            Check Out Date
          </label>
          <DatePicker
            selected={checkoutDate}
            onChange={(date) => setCheckoutDate(date)}
            disabled={!checkinDate}
            dateFormat="MM/dd/yyyy"
            minDate={calcMinCheckoutDate()}
            id="check-out-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="adults"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Adults
          </label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(+e.target.value)}
            min={1}
            max={5}
            className="w-full border text-black border-gray-300 rounded-lg p-2.5"
          />
        </div>
        <div className="w-1/2 pr-2">
          <label
            htmlFor="children"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Children
          </label>
          <input
            type="number"
            id="children"
            value={kids}
            onChange={(e) => setKids(+e.target.value)}
            min={1}
            max={5}
            className="w-full border text-black border-gray-300 rounded-lg p-2.5"
          />
        </div>
      </div>
      {calcNoOfDays() > 0 ? (
        <p className="mt-3">Total Price: $ {calcNoOfDays() * discountPrice}</p>
      ) : (
        <></>
      )}
      <button
        onClick={handleBookNow}
        disabled={isBooked}
        className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default BookRoomCta;
