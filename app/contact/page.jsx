import React from 'react'

const page = () => {
  return (
    <section className="container mx-auto px-4 py-12 pt-20 max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? Fill out the
          form below or email us directly.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default page
