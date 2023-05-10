export default (Footer) => {
    return (
        <footer className=" bg-blueGray-200 ">
            <div className="container mx-auto px-4 dark:bg-gray-900 pt-8 pb-6">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-white front">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find me on any of these platforms, I will respond you in 1-2 days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-linkedin" />
                            </button>
                            <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fab fa-github" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex  items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">-- Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-gray-100 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold block pb-2 text-sm" href="#about">About</a>
                                    </li>
                                    <li>
                                        <a className="text-white  hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold block pb-2 text-sm" href="#project">Project</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">-- Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white  hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold block pb-2 text-sm" href="https://www.linkedin.com/in/xraksh/">Linkedin</a>
                                    </li>
                                    <li>
                                        <a className="text-white  hover:text-blue-500 cursor-pointer transition-colors duration-300 font-semibold block pb-2 text-sm" href="https://github.com/xRaksh">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            Copyright © <span id="get-current-year">2023</span><a href="#" className=" hover:text-blue-500 cursor-pointer transition-colors duration-300 text-blueGray-500" target="_blank">xRaksh</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
