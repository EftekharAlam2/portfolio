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
            <h1 className="text-3xl font-semibold">Junior Frone</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline btn-accent">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
