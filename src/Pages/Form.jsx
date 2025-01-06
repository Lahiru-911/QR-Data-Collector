

const Form = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="bg-blue-500 rounded-t-lg text-white p-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome,</h2>
            <p className="text-lg">You Are Valuable to Us</p>
            <p className="text-sm mt-1">
              We’d like to ask you for some additional information
            </p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal Logo"
              className="w-10 h-10"
            />
          </div>
        </div>

        <form className="space-y-4 mt-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone Numbers */}
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Numbers
            </label>
            <input
              type="text"
              placeholder="Type mobile number"
              className="mt-1 w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Type mobile number"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Birthday */}
          <div>
            <label className="block text-gray-700 font-medium">Birthday</label>
            <input
              type="date"
              placeholder="YYYY-MM-DD"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="ex: myemail@example.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              placeholder="Type here"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Rating */}
          <div className="text-center mt-4">
            <p className="text-gray-600 font-medium">
              How would you rate our service?
            </p>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-gray-400 text-2xl cursor-pointer hover:text-yellow-500"
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Submit <span className="ml-1">🚀</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;







{/* <div className="min-h-screen w-auto h-auto bg-[#F9F9F9] shadow-2xl ring-1 ring-gray-900/10 rounded-3xl m-2 md:m-3 xl:m-3 flex flex-col items-center">
        <div className="bg-[#0081FB] w-5/6  h-24  m-5 rounded-3xl">
          <h1>Welcome,</h1>
          <h2>You Are Valuable to Us</h2>
          <p>We’d like to ask you for some additional information</p>
        </div>
        <div>
          
        </div>
      </div> */}