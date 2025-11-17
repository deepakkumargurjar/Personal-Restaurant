import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    const now = new Date();
    const selected = new Date(`${date} ${time}`);
    if (selected < now) return toast.error("Please select a future date & time");

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      toast.success(data.message);
      navigate("/success");

      setFirstName(""); setLastName(""); setEmail(""); setPhone("");
      setDate(""); setTime("");

    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div
        className="
          max-w-4xl mx-auto p-10 rounded-2xl shadow-xl relative 
          bg-white border border-gray-200 overflow-hidden
          animate-[fadeIn_0.8s_ease]
        "
      >
        {/* Soft Glow BG */}
        <div className="absolute inset-0 bg-purple-300 opacity-20 blur-[120px] -z-10"></div>

        {/* Heading */}
        <h1
          className="
            text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900
            animate-[slideDown_0.7s_ease]
          "
        >
          MAKE A RESERVATION
        </h1>

        <p className="text-center text-gray-600 mb-10 animate-[fadeIn_1.2s_ease]">
          For Further Plans, Book a Table Now!
        </p>

        {/* FORM */}
        <form onSubmit={handleReservation} className="space-y-6">

          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WhiteInput placeholder="First Name" value={firstName} setValue={setFirstName} />
            <WhiteInput placeholder="Last Name" value={lastName} setValue={setLastName} />
          </div>

          {/* DATE + TIME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <WhiteInput
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              setValue={setDate}
            />

            {/* TIME */}
            <div className="relative group animate-[slideUp_0.7s_ease]">
              {!time && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  Add Time
                </span>
              )}
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="
                  w-full p-3 rounded-lg border border-gray-300 bg-white
                  text-gray-800 focus:ring-2 focus:ring-purple-500 outline-none
                  focus:shadow-lg transition-all duration-300
                  focus:scale-[1.02]
                "
              />
            </div>
          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <WhiteInput type="email" placeholder="Email" value={email} setValue={setEmail} />
            <WhiteInput type="number" placeholder="Phone Number" value={phone} setValue={setPhone} />
          </div>

          {/* BUTTON */}
          <button
            className="
              w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 
              text-white text-lg font-semibold shadow-lg
              flex items-center justify-center gap-3
              hover:scale-[1.04] transition-all duration-300
              animate-[zoomIn_0.6s_ease]
            "
          >
            RESERVE NOW <HiOutlineArrowNarrowRight className="text-2xl" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;


/* ⭐ White Input Component */
const WhiteInput = ({ placeholder, value, setValue, type = "text", min }) => {
  return (
    <div className="relative group animate-[slideUp_0.7s_ease]">
      {!value && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {placeholder}
        </span>
      )}
      <input
        type={type}
        value={value}
        min={min}
        onChange={(e) => setValue(e.target.value)}
        className="
          w-full p-3 rounded-lg border border-gray-300 bg-white
          text-gray-900 focus:ring-2 focus:ring-purple-500 outline-none
          focus:shadow-lg transition-all duration-300
          focus:scale-[1.02]
        "
      />
    </div>
  );
};
