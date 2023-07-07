const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="md:w-3/5 mx-auto">
          <div>
            <form className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <textarea
                id="message"
                className="border border-gray-300 rounded-lg py-2 px-4 w-full h-32 resize-none mt-4 focus:outline-none focus:border-indigo-500"
                placeholder="Your Message"
              ></textarea>
              <button className="btn btn-outline btn-accent mt-1" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
