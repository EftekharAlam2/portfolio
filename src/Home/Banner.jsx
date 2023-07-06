const Banner = () => {
  return (
    <div>
      <div className="hero min-h-min">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/52JZC9h/MD-EFTEKHARUL-ALAM-removebg.png"
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-5xl font-bold">MD EFTEKHARUL ALAM</h1>
            <h1 className="text-2xl font-semibold mt-2">
              Junior Front-End Web Developer
            </h1>
            <p className="py-6">
              I'm a fourth-year computer science student at Varendra University,
              deeply passionate about software and web development. Currently,
              I'm actively seeking an internship opportunity as a web developer
              to apply and further enhance my skills.
            </p>
            <button className="btn btn-outline btn-accent">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
