import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Section1 from "./Section1";
import layerImg_1 from "../assets/layer1.png";
import layerImg_2 from "../assets/layer2.png";
import layerImg_3 from "../assets/layer3.png";
import logoImg from "../assets/logo.png";
import logoTextImg from "../assets/logo-text.png";
import { gsap } from "gsap";

const Home = () => {
    const navigate = useNavigate();

    const layer_1 = useRef(null);
    const layer_2 = useRef(null);
    const layer_3 = useRef(null);
    const logoTextRef = useRef(null);
    const wholeRef = useRef(null);

    useEffect(() => {
        gsap.to(layer_1.current, { scale: 1, opacity: 1, duration: 1 });
        gsap.to(layer_2.current, { rotate: 90, opacity: 1, duration: 1, delay: 1 });
        gsap.to(layer_2.current, { rotate: -90, opacity: 1, duration: 1, delay: 2 });
        gsap.to(layer_3.current, { rotate: 90, opacity: 1, duration: 1, delay: 2 });
        gsap.to(logoTextRef.current, { x: 0, duration: 1, delay: 2 });


        gsap.to(layer_1.current, { x: '-42vw', y: '-40vh', width: '10vw', duration: 1, opacity: 0, delay: 3 });
        gsap.to(layer_2.current, { x: '-42vw', y: '-40vh', width: '10vw', duration: 1, opacity: 0, delay: 3 });
        gsap.to(layer_3.current, { x: '-42vw', y: '-40vh', width: '10vw', duration: 1, opacity: 0, delay: 3 });
        gsap.to(logoTextRef.current, { x: '-20vw', y: '-50vh', duration: 1, delay: 3, opacity: 0, });

        gsap.to(wholeRef.current, { opacity: 0, duration: 1, delay: 4 });

        setTimeout(() => {
            navigate("/section-one")
        }, 5000);
    }, [])

    return (
        <div>
            <div className="w-screen h-screen bg-[#191521] flex flex-col justify-center items-center" ref={wholeRef}>
                <div className="relative flex justify-center items-center">
                    <img src={layerImg_3} className="w-12 md:w-auto opacity-0" ref={layer_3} />
                    <img src={layerImg_1} className="w-12 md:w-auto absolute top-0 scale-0 opacity-0" ref={layer_1} />
                    <img src={layerImg_2} className="w-12 md:w-auto absolute top-0 opacity-0" ref={layer_2} />
                </div>
                <div className="relative flex justify-center items-center mt-16">
                    <img src={logoTextImg} className="translate-x-[100vw] h-4 md:h-12" ref={logoTextRef} />
                </div>
            </div>
            <Section1 className="fixed top-0 left-0 w-screen h-screen z-[-1]" />
        </div>
    )
}

export default Home;