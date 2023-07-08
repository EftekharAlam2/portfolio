import { BiSolidDownload } from "react-icons/bi";
import { Flip } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/15pwQ3VOspaltEwrwkN9A869z9_L1pPD4/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div>
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/52JZC9h/MD-EFTEKHARUL-ALAM-removebg.png"
            className="max-w-sm rounded-lg"
            alt="Profile"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              MD EFTEKHARUL ALAM
            </h1>
            <h1 className="text-2xl font-semibold mt-2">
              <Typewriter
                options={{
                  strings: ["Junior Front-End Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <p className="py-6">
              I&apos;m a fourth-year computer science student at Varendra
              University, deeply passionate about software and web development.
              Currently, I&apos;m actively seeking an internship opportunity as
              a web developer to apply and further enhance my skills.
            </p>
            <Flip>
              <button
                className="btn btn-outline btn-accent"
                onClick={handleDownloadResume}
              >
                <BiSolidDownload /> Resume
              </button>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
