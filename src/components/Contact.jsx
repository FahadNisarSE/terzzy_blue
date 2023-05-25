import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:fnisar142@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-fit mx-auto min-h-screen grid place-items-center sm:px-0 px-2">
      <div className="py-8 lg:py-16 my-auto rounded-xl sm:px-10 px-6 bg-gray-900 h-fit lg:max-w-screen-md md:max-w-screen-sm sm:max-w-xs space-y-4">
        <div className="flex items-center">
          <Link to="/">
            <BiArrowBack className="text-white hover:bg-gray-200 rounded-full text-2xl p-1 transition-all duration-150 hover:text-gray-900" />
          </Link>
          <Link to="/" className="mx-auto">
            <h2 className="text-white text-center uppercase font-semibold text-3xl leading-8 tracking-widest">
              TERZZY
            </h2>
          </Link>
        </div>

        <h3 className="text-white text-center font-semibold text-xl leading-8 tracking-widest">
          Send us an Email
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8 min-w-[300px]">
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg sm:w-fit bg-gray-200 hover:bg-white focus:ring-4 focus:outline-none focus:ring-white"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
