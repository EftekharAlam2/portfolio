import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { JackInTheBox } from "react-awesome-reveal";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-100 py-10" id="contact">
      <JackInTheBox>
        <div className="container mx-auto px-4">
          <div className="md:w-3/5 mx-auto">
            <div>
              <form
                className="bg-white shadow-md rounded-lg p-6"
                ref={form}
                onSubmit={sendEmail}
              >
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    name="from_email"
                    id="email"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full h-32 resize-none mt-4 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="btn btn-outline btn-accent mt-1"
                  type="submit"
                  value="Send"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </JackInTheBox>
    </section>
  );
};

export default ContactUs;
