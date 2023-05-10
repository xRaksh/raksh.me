
export default function About() {
  return (
    <div className="bg-white" id="hero">
      <div className="container m-auto py-20 px-6 sm:py-20 md:px-12 lg:px-6 dark:bg-gray-900">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Turning Vision Into Reality With <br className="lg:block hidden" /> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Code And Design</span>.</h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
              My Part as a front end web developer is to build the user-facing aspect of a website or web application and turn innovative ideas into reality. I am also trying to familiarize myself with the backend, explore my projects that demonstrate my experience in frontend and react JS development.<a href="#" className="text-white-900 font-semibold"> --Click Here</a></p>
            <div className="flex justify-center gap-5 md:pb-8 lg:justify-start">
              <a aria-label="add to slack" href="#contact" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src="https://static.wixstatic.com/media/191815_c72cb6af1c804794acabc485e36b7790~mv2.gif" alt="slack logo" loading="lazy" width={128} height={128} />
                  <span className=" font-medium md:block dark:text-white">Contact</span>
                </div>
              </a>
              <a aria-label="add to chat" href="https://www.linkedin.com/in/xraksh/" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="chat logo" loading="lazy" width={128} height={128} />
                  <span className=" font-medium md:block dark:text-white">Linkedin</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center mt-12 md:mt-0  lg:w-7/12">
            <div className="flex justify-center w-full">
              <img src="2.jpg" className="w-1/2 glow1" alt="wath illustration" loading="lazy" width="{320}" height="{280}" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

