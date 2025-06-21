"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.text);
          form.current.reset();
          setLoading(false);
          setMessage("Your message has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setMessage("Something went wrong. Try again later.");
        }
      );
  };

  const handleInputChange = () => {
    if (message) setMessage("");
  };

  return (
    <div>
      <div className="bg-amber-50 dark:bg-gray-900">
        {/* banner */}
        <div
          className="relative h-96 sm:h-[410px] xl:h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523958203904-cdcb402031fd)",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-white text-center p-5">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              How to contact me
            </h1>
            <p className="text-lg lg:text-xl mb-6 leading-relaxed">
              Call or send an email through our form
            </p>
          </div>
        </div>

        {/* Section */}
        <section className="container mx-auto px-5 lg:px-30 xl:px-52 pb-32">
          {/* Contact Information */}
          <div className="mt-8 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-6 py-10">
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <p className="mt-2">
              <strong>Address:</strong> Patuakhali, Barishal, Bangladesh
            </p>
            <p>
              <strong>Phone:</strong> 01327023639
            </p>
            <p>
              <strong>Email:</strong> masiurislam28@gmail.com
            </p>
            <p className="mt-5">
              Assalamu Assalam, I am Moshiur Islam, and I started my programming
              journey alongside my diploma. Initially, programming seemed like
              just another skill to learn, but over time, it became my passion.
              I genuinely enjoy writing code and solving complex problems, and
              each new challenge excites me even more.
              <br />
              <br />
              Apart from programming, I love playing games. Gaming is not just a
              source of entertainment for me but also a way to explore
              creativity and find inspiration. Living in a village keeps me
              connected to nature, bringing peace and balance to my thoughts and
              daily life.
              <br />
              <br />
              Beyond programming and gaming, I am always curious to learn new
              things and enhance my skills. I believe in continuous growth and
              am determined to achieve bigger dreams as I move forward in my
              journey.
            </p>
          </div>

          {/* my img */}
          <img
            src="https://i.ibb.co.com/wNPyX4j/me.jpg"
            alt="Real Estate Banner"
            className="w-full h-96 sm:h-[450px] lg:h-[500px] mt-8 object-cover"
          />

          {/* Contact Form */}
          <div className="mt-6 bg-white dark:bg-gray-800 px-6 py-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact Me
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="p-3 border w-full bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-0"
                  required
                  onChange={handleInputChange}
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="p-3 border w-full bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-0"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 border w-full h-52 md:h-64 bg-white dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:outline-none focus:ring-00"
                required
                onChange={handleInputChange}
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="group relative px-8 border border-black dark:border-white overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black dark:bg-gray-300"
              >
                <div className="absolute inset-0 w-0 bg-white dark:bg-black transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 text-white dark:text-black group-hover:text-black dark:group-hover:text-gray-400">
                  {loading ? "Sending..." : "Send"}
                </span>
              </button>

              {message && (
                <p className="mt-3 text-green-700 dark:text-green-400 font-medium">
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
