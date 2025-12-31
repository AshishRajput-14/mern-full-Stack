import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    number: "",
    dob: "",
    qualifications: "",
    percentage: "",
    course: "",
    timing: "",
    address: "",
    city: "",
    pin: "",
    gaurdianName: "",
    gaurdianNumber: "",
    hearAbout: "",
    requirement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((item) => ({ ...item, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center h-[82dvh] overflow-hidden w-full">
      <form
        className="w-[50%]  p-4 rounded-2xl flex flex-col gap-2 h-[82dvh] overflow-auto hide-scrollbar"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="text-center text-primary font-bold my-2 text-2xl">
          Enter your details
        </h2>
        <p className="font-bold my-3 text-xl">Personal InhtmlFormation:</p>
        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="fullName" className="w-[40%] font-bold">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={data.fullName}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="nameError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="email" className="w-[40%] font-bold">
              Email Address:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="emailError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="name" className="w-[40%] font-bold">
              Mobile Number:{" "}
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={data.number}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="numberError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="dob" className="w-[40%] font-bold">
              DOB:{" "}
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={data.dob}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-auto me-auto"
              required
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="dobError"
          ></span>
        </div>

        <p className="font-bold my-3 text-xl">Academic Details:</p>
        <div className="name flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="qualifications" className="w-[40%] font-bold">
              Qualifications:{" "}
            </label>
            <select
              name="qualifications"
              id="qualifications"
              className="p-2 mr-auto border rounded-2xl cursor-pointer w-40"
              onChange={(e) => handleChange(e)}
            >
              <option value="">-Select-</option>
              <option value="postGraduate">Post Graduate</option>
              <option value="graduate">Graduate</option>
              <option value="12">12th</option>
              <option value="10">10th</option>
            </select>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="qualificationsError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="percentage" className="w-[40%] font-bold">
              Percentage / Grade:
            </label>
            <input
              type="text"
              name="percentage"
              id="percentage"
              value={data.percentage}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              placeholder="eg. Percentage: (0-100) or grade: (A-F)"
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="percentError"
          ></span>
        </div>

        <p className="font-bold my-3 text-xl">Course InhtmlFormation:</p>
        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="course" className="w-[40%] font-bold">
              Preffered Course:{" "}
            </label>
            <select
              name="course"
              id="course"
              className="p-2 mr-auto border rounded-2xl cursor-pointer w-40"
              onChange={(e) => handleChange(e)}
            >
              <option value="">-Select-</option>
              <option value="iit">IIT-JEE</option>
              <option value="neet">NEET</option>
              <option value="banking">Banking</option>
              <option value="upsc">UPSC</option>
            </select>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="courseError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="timing" className="w-[40%] font-bold">
              Batch Timing:{" "}
            </label>
            <select
              name="timing"
              id="timing"
              className="p-2 mr-auto border rounded-2xl cursor-pointer w-40"
              onChange={(e) => handleChange(e)}
            >
              <option value="">-Select-</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="weekends">Weekends</option>
            </select>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="timingError"
          ></span>
        </div>

        <p className="font-bold my-3 text-xl">Address:</p>
        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full">
            <label htmlFor="address" className="w-[40%] font-bold">
              Residential Address:
            </label>
            <textarea
              name="address"
              id="address"
              value={data.fullName}
              onChange={(e) => handleChange(e)}
              className="input border rounded-2xl w-[60%] p-2"
              rows="5"
              placeholder="eg. Mig D 54, Ayodhya Nagar"
            ></textarea>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="addressError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="city" className="w-[40%] font-bold">
              City:{" "}
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={data.city}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              placeholder="eg. Bhopal"
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="cityError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="pin" className="w-[40%] font-bold">
              Pin Code:{" "}
            </label>
            <input
              type="text"
              name="pin"
              id="pin"
              value={data.pin}
              onChange={(e) => handleChange(e)}
              className="border p-2 rounded w-[60%]"
              required
              placeholder="eg. 852219"
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="pinError"
          ></span>
        </div>

        <p className="font-bold my-3 text-xl">Guardian Details:</p>
        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="gaurdianName" className="w-[40%] font-bold">
              Guardian’s Name:{" "}
            </label>
            <input
              type="text"
              name="gaurdianName"
              id="gaurdianName"
              value={data.gaurdianName}
              onChange={(e) => handleChange(e)}
              className="w-[60%] border p-2 rounded"
              required
              placeholder="eg. Father's Full name"
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="guardianError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="gaurdianNumber" className="w-[40%] font-bold">
              Guardian’s Number:
            </label>
            <input
              type="text"
              name="gaurdianNumber"
              id="gaurdianNumber"
              value={data.gaurdianNumber}
              onChange={(e) => handleChange(e)}
              className="w-[60%] border p-2 rounded"
              required
              
            />
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="gaurdianNumberError"
          ></span>
        </div>

        <p className="font-bold my-3 text-xl">Additional InhtmlFormation:</p>
        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full items-center">
            <label htmlFor="hearAbout" className="w-[40%] font-bold">
              How did you hear about us?
            </label>
            <select
              name="hearAbout"
              id="hearAbout"
              className="p-2 mr-auto border rounded-2xl cursor-pointer w-40"
              onChange={(e) => handleChange(e)}
            >
              <option value="">-Select-</option>
              <option value="friends">Friends</option>
              <option value="ad">Online Ad</option>
              <option value="newspaper">Newspaper</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="hearAboutError"
          ></span>
        </div>

        <div className="inputDiv w-full flex flex-column gap-1">
          <div className="input flex justify-between w-full">
            <label htmlFor="requirement" className="w-[40%] font-bold">
              Requirements:
            </label>
            <textarea
              name="requirement"
              id="requirement"
              value={data.requirement}
              onChange={(e) => handleChange(e)}
              className="input border rounded-2xl w-[60%] p-2"
              rows="5"
              placeholder="eg. i would like to have...."
            ></textarea>
          </div>
          <span
            className="error text-danger text-end pe-2"
            id="requirementError"
          ></span>
        </div>

        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer w-fit mx-auto my-8 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>

      
       
    </div>
  );
};

export default Registration;