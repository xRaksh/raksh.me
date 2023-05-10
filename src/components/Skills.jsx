import '../CSS/skills.css'
import { useRef, useEffect } from "react"

export default function Skills() {
    const frrt = useRef();
    const baac = useRef();
    const tol = useRef();

    const front = document.getElementById('frontend');
    const back = document.getElementById('Backend');
    const tools = document.getElementById('Tools');



    const fun1 = () => {
        frrt.current.focus();
        if (frrt.current.style.display = "none") {
            frrt.current.style.display = "block";
        } if (baac.current.style.display != "none") {
            baac.current.style.display = "none";
        } if (tol.current.style.display != "none") {
            tol.current.style.display = "none";
        }
    }

    // frrt.current.addEventListener('click', fun1);



    const fun2 = () => {
        baac.current.focus();

        if (frrt.current.style.display != "none") {
            frrt.current.style.display = "none";
        } if (baac.current.style.display = "none") {
            baac.current.style.display = "block";
        } if (tol.current.style.display != "none") {
            tol.current.style.display = "none";
        }
    }

    // baac.current.addEventListener('click', fun2);



    const fun3 = () => {
        tol.current.focus();
        if (frrt.current.style.display != "none") {
            frrt.current.style.display = "none";
        } if (baac.current.style.display != "none") {
            baac.current.style.display = "none";
        } if (tol.current.style.display = "none") {
            tol.current.style.display = "block";
        }
    }

    // tol.current.addEventListener('click', fun3);



    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 pt-16 mx-auto BG">
                    <div className="flex flex-col w-full">
                        <h1 className="sm:text-4xl text-3xl front font-semibold title-font mb-2 text-gray-900 text-center">Skills</h1>
                        <div className=" flex justify-center gap-2 sm:font-semibold sm:text-2xl my-4 ">
                            <div className="skills_tab py-1 px-3">
                                <button className="frt" onClick={fun1}>Front-End</button>
                                <button className="bck" onClick={fun2}>Back-End</button>
                                <button className="tool" onClick={fun3}>Tools</button>
                            </div>
                        </div>
                        <div className="mx-auto justify-center px-5 my-4 gap-2" id="frontend" ref={frrt}>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://static.vecteezy.com/system/resources/previews/020/816/512/non_2x/html-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-css-file-document-icon-png-image_4187768.jpg" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-javascript-abstract-concept-vector-illustration-png-image_8458992.png" />
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center mt-2">
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1 ">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://res.cloudinary.com/practicaldev/image/fetch/s--8rX1-twi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto justify-center px-5 my-4 gap-2" id="Backend" ref={baac}>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX7p-_Zo1LqsEfO1v3B6Zw0Jgvhk4vo1fKA&usqp=CAU" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://newrelic.com/sites/default/files/2021-10/php_logo.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto justify-center px-5 my-4 gap-2" id="Tools" ref={tol}>
                            <div className="flex flex-wrap justify-center">
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/01/000-VS-Code.png" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://image.pngaaa.com/555/4725555-middle.png" />
                                </div>
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow" src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png" />
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center mt-2">
                                <div className="w-1/3 sm:w-1/6 p-4 p-1">
                                    <img alt="ecommerce" className="object-cover object-center flex mx-auto h-full block glow1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5gYR-TablQQ3H3fwdG13OOOJlnlNm1lrVV2HUfIhOATTfj_2xz-5efW9O0kzt6l33YI&usqp=CAU" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}     