export default (Project) => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-14 md:px-12 xl:px-32 dark:bg-gray-900">
                <div className="mb-16 text-center">
                    <h2 className="sm:text-4xl text-3xl front font-black title-font dark:text-white text-center pb-3" id="project" >Project</h2>
                    <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p>
                </div>
                <div className="grid gap-12 items-center md:grid-cols-3">
                    <a href="https://xrakshecom.netlify.app/" >
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 glow1" src="ecommerce.gif" alt="GPT" loading="lazy" width={640} height={805} />
                            <div>
                                <h4 className="text-2xl text-white">E-Commerce Store</h4>
                                <span className="block text-sm text-white">Under Working</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://gym-fit-hub.000webhostapp.com/index.php" target="_blank">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-fit rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 glow" src="gym1.gif" alt="GYM" loading="lazy" width={1000} height={667} />
                            <div>
                                <h4 className="text-2xl text-white">Fit-Hub</h4>
                                <span className="block text-sm text-white">Fullstack Gym Management web with Admin Panel</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://xraksh.github.io/myshoes/" target="_blank">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 glow1" src="shoes.gif" alt="Shoes Store" loading="lazy" width={1000} height={667} />
                            <div>
                                <h4 className="text-2xl text-white">Sneakers Store</h4>
                                <span className="block text-sm text-white">Landing page of Sneakers Store</span>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>

    )
}
