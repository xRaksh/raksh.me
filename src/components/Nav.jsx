import '../CSS/nav.css'

export default function Nav() {

    const appData = () => {
        return {
            percent: 0,

            appInit() {
                // source: https://codepen.io/A_kamel/pen/qBmmGKJ
                window.addEventListener('scroll', () => {
                    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
                        height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

                    this.percent = Math.round((winScroll / height) * 100);
                });
            },
        };
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center app w-full" x-cloak x-data="appData()" x-init="appInit()">
                <div className=" flex flex-col ">
                    <div className=" fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500" style={{ width: "`${percent}%`" }}></div>
                    <nav className="container nav mx-auto px-5 flex justify-between py-4 bg-black/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                        <div className="flex items-center">
                            <a href="index.php" className="cursor-pointer">
                                <h3 className="">
                                    <img className="h-10 object-cover glow"
                                        src="noback.png" alt="Store Logo" />
                                </h3>
                            </a>
                        </div>
                        <div className="items-center space-x-8 lg:flex pages">
                            <a href="#hero" className="flex text-white hover:text-blue-500
                            cursor-pointer transition-colors duration-300 ">
                                Home
                            </a>

                            <a href="#about" className="flex text-white hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                                About
                            </a>

                            <a href="#project" className="flex text-white hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                                Project
                            </a>

                            <a href="#contact" className="flex text-white hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                                Contact
                            </a>

                            {/* <a href="gallery.php" className="flex text-white hover:text-blue-500
                    cursor-pointer transition-colors duration-300">
                                Gallery
                            </a> */}
                        </div>
                        <div class="flex items-center space-x-5">
                            <a class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 icons" href="https://www.linkedin.com/in/xraksh/">
                                <span><i class="fa-brands fa-linkedin-in fill-current h-5 w-5 mr-2 mt-0.5"></i></span>
                                Linkedin
                            </a>
                            <a class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 icons" href="https://github.com/xRaksh">
                                <span><i class="fa-brands fa-github fill-current h-5  mr-2 mt-0.5"></i></span>
                                GitHub
                            </a>
                        </div>
                    </nav>
                </div>

            </div >
        </>
    )
}