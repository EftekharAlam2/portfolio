const Project = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-2">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/ZLb0nZv/1.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/NTbwKBg/2.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/wLm4Jxg/3.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sakura Kitchen</h2>
              <p>
                • Implemented a responsive website using Tailwind CSS, Firebase,
                and React <br /> • Designed and developed a user-friendly Login
                page with multiple authentication options, including
                Email/Password, Google Sign-in, and GitHub Sign-in. <br /> • The
                View Profile section on the home page will only work if the user
                is logged in. If the user is not logged in, clicking on the
                section will redirect them to the login page.
              </p>
              <div className="mt-3 flex flex-col md:flex-row gap-1">
                <a
                  href="https://chef-recipe-f656d.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Live Link
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/EftekharAlam2/sakura-kitchen-client-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Github-Client-Side
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/EftekharAlam2/sakura-kitchen-server-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Github-Server-Side
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/ZLb0nZv/1.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/NTbwKBg/2.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="https://i.ibb.co/wLm4Jxg/3.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sakura Kitchen</h2>
              <p>
                • Implemented a responsive website using Tailwind CSS, Firebase,
                and React <br /> • Designed and developed a user-friendly Login
                page with multiple authentication options, including
                Email/Password, Google Sign-in, and GitHub Sign-in. <br /> • The
                View Profile section on the home page will only work if the user
                is logged in. If the user is not logged in, clicking on the
                section will redirect them to the login page.
              </p>
              <div className="mt-3 flex flex-col md:flex-row gap-1">
                <a
                  href="https://chef-recipe-f656d.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Live Link
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/EftekharAlam2/sakura-kitchen-client-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Github-Client-Side
                    </button>
                  </div>
                </a>
                <a
                  href="https://github.com/EftekharAlam2/sakura-kitchen-server-side"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-actions">
                    <button className="btn btn-outline btn-accent btn-sm">
                      Github-Server-Side
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
