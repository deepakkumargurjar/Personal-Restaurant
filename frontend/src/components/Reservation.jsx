import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://gujjar-restaurant.onrender.com/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section id="reservation" className="py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full flex justify-center">
          <img
            src="/reservation.png"
            alt="res"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-lg">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-2 text-center lg:text-left">
              MAKE A RESERVATION
            </h1>
            <p className="mb-5 text-center lg:text-left text-gray-600">
              For Further Questions, Please Call
            </p>

            <form onSubmit={handleReservation} className="space-y-4">

              {/* ROW 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
              </div>

              {/* ROW 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
              </div>

              {/* ROW 3 */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-200"
                />
              </div>

              {/* BUTTON */}
              <button
                className="w-full bg-black text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;
