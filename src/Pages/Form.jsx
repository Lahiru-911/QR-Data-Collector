import React from "react";

const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Welcome,</h1>
            <p className="text-lg font-medium">You Are Valuable to Us</p>
            <p className="text-sm mt-2 opacity-90">
              We’d like to ask you for some additional information
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal Logo"
            className="w-12 h-12"
          />
        </div>

        {/* Form */}
        <form className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Numbers */}
          <div>
            <label className="block text-gray-700 font-medium">Phone Numbers</label>
            <div className="space-y-3 mt-2">
              <input
                type="text"
                placeholder="Mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Alternative mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-gray-700 font-medium">Birthday</label>
            <input
              type="date"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Rating */}
          <div>
            <p className="text-gray-700 font-medium text-center">How would you rate our service?</p>
            <div className="flex justify-center items-center space-x-3 mt-3">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="text-gray-400 hover:text-yellow-500 text-2xl"
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
