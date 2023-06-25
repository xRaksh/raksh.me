export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font" id="about">
        <div className="container mx-auto py-10 items-center bg-black	">

          <div className="flex flex-col w-full pb-5 md:pb-10">
            <h1 className="sm:text-4xl text-3xl front font-black title-font dark:text-white text-center">About</h1>
          </div>
          <div className="flex justify-between px-5 mb-5 md:flex-row flex-col">
            <div className=" md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
              <h1 className=" title-font  xl:text-4xl text-3xl mb-4 font-semibold text-gray-900 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Abhishek Sharma</h1>
                <p className="sm:text-lg md:text-xs lg:text-sm xl:text-lg text-sm text-gray-700 py-5 dark:text-gray-300 lg:w-11/12">
                As a developer, I am passionate about learning all there is to know about creating innovative and engaging web applications.With a strong foundation in HTML, CSS, and JavaScript, I have been able to build several small-scale web applications that showcase my skills in these areas. I am constantly seeking out new challenges and opportunities to expand my knowledge, whether through online courses, tutorials, or personal projects.<br className="pt-1"/>I understand that web development is a constantly evolving field, and I am committed to staying on top of the latest trends and technologies to ensure that my work is always cutting-edge and relevant. I am always eager to work with others to bring their ideas to life.Overall, my passion for web development and my eagerness to learn and grow make me a strong candidate for any team or project. I am excited to continue honing my skills and pushing the boundaries of what is possible in the world of web development..</p>
              <div className="flex justify-center py-3">
                <a href="https://drive.google.com/file/d/1eDaryZlnL85PdlEzAt1Au4w_kPa5EQDD/view?usp=sharing">
                <button className="inline-flex hover:shadow-lime-600/20 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:shadow-lg rounded text-lg"> Downlode CV <span>--<i className="fa-solid fa-shuttle-space ml-2"></i></span></button>
                </a>
              </div>
            </div>
            <div className=" flex justify-center items-center lg:max-w-sm  md:w-2/5 w-2/3 mx-auto">
              <img className="object-cover object-center rounded  glow1" alt="hero" src="https://cdn.leonardo.ai/users/da89bade-8c86-4f12-9c76-f8015ecf2aff/generations/21cb5682-4fe4-45fd-92d4-abc674c6f55c/Leonardo_Diffusion_teenage_boy_creating_metaverse_by_writing_c_1.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
