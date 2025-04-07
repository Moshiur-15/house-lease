import React from "react";

const Contact = () => {
  return (
    <div className="bg-amber-50">
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

      {/*  */}
      <section className="container mx-auto px-5 lg:px-30 xl:px-52 pb-32">
        {/* Contact Information */}
        <div className="mt-8 text-gray-700 bg-white px-6 py-10">
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
          <p className="text-gray-700 mt-5">
            Assalamu Assalam, I am Moshiur Islam, and I started my programming
            journey alongside my diploma. Initially, programming seemed like
            just another skill to learn, but over time, it became my passion. I
            genuinely enjoy writing code and solving complex problems, and each
            new challenge excites me even more.
            <br /><br/>
            Apart from programming, I love playing games. Gaming is not just a
            source of entertainment for me but also a way to explore creativity
            and find inspiration. Living in a village keeps me connected to
            nature, bringing peace and balance to my thoughts and daily life.
            <br/><br/>
            Beyond programming and gaming, I am always curious to learn new things and enhance my skills. I believe in continuous growth and am determined to achieve bigger dreams as I move forward in my journey.
          </p>
        </div>

        {/* my img */}
        <img
          src="https://i.ibb.co.com/wNPyX4j/me.jpg"
          alt="Real Estate Banner"
          className="w-full h-96 sm:h-[450px] lg:h-[500px]  mt-8 object-cover px-4"
        />

        {/* Contact Form */}
        <div className="mt-6 bg-white px-6 py-12">
          <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border  w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border  w-full"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="p-3 border  w-full mt-4 h-32"
            ></textarea>
            <button className="group relative px-8 border border-black overflow-hidden py-2.5 mt-4 transition-all duration-500 hover:border-transparent bg-black">
            <div className="absolute inset-0 w-0 bg-white transition-[width] duration-500 ease-in-out group-hover:w-full"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
              Send Mail
            </span>
          </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
