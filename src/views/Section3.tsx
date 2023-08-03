import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import centerImg from "../assets/section3/center.png";
import centerMobileImg from "../assets/section3/center-mobile.png";
import man1Img from "../assets/section3/man1.png";
import man2Img from "../assets/section3/man2.png";
import baseDoorImg from "../assets/section3/base_door.png";
import doorImg from "../assets/section3/door.png";
import contentImg from "../assets/section3/content.png";
import { gsap } from "gsap";
import Section4 from "./Section4";

interface MyComponentProps {
    className?: string;
}

const Section3: React.FC<MyComponentProps> = ({ className }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const man_1 = useRef(null);
    const man_2 = useRef(null);
    const title_1 = useRef(null);
    const title_2 = useRef(null);
    const wholeDoorRef = useRef(null);
    const leftDoorRef = useRef(null);
    const rightDoorRef = useRef(null);
    const contentRef = useRef(null);
    const wholeRef = useRef(null);
    const centerImgRef = useRef(null);

    const flashRef = useRef(null);

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    let index = 0;
    let maximunScroll = 500;
    let currentScroll = 0;

    const goNext = () => {
        console.log(index)
        if (index === 0) {
            gsap.to(title_1.current, { y: '-80vh', duration: 1 })
            gsap.to(title_2.current, { y: '-80vh', duration: 1 })
            gsap.to(man_1.current, { x: '-80vw', duration: 1 })
            gsap.to(man_2.current, { x: '80vw', duration: 1 })
            gsap.to(centerImgRef.current, { scale: 4, duration: 1, delay: .5 })
            gsap.to(wholeDoorRef.current, { scale: (isMobileDevice() ? 3.5 : 2.5), y: (isMobileDevice() ? '-10vh' : '-10vh'), duration: 1, delay: .5 })
        } else if (index === 1) {
            gsap.to(leftDoorRef.current, { x: (isMobileDevice() ? '-8vw' : '-4vw'), duration: 1 });
            gsap.to(rightDoorRef.current, { x: (isMobileDevice() ? '8vw' : '4vw'), duration: 1 });
        } else if (index === 2) {
            gsap.to(contentRef.current, { opacity: 1, duration: 1 });
        } else if (index === 3) {
            gsap.to(wholeRef.current, { y: '-100vh', duration: 1 });

            setTimeout(() => {
                navigate("/section-four")
            }, 1000);
        }

        if (index < 3) index += 1;
    }

    const goBefore = () => {
        if (index === 3) {
            gsap.to(wholeRef.current, { y: '0vh', duration: 1 });
        } else if (index === 2) {
            gsap.to(contentRef.current, { opacity: 0, duration: 1 });
        } else if (index === 1) {
            gsap.to(leftDoorRef.current, { x: '0vw', duration: 1 });
            gsap.to(rightDoorRef.current, { x: '0vw', duration: 1 });
        } else if (index === 0) {
            gsap.to(title_1.current, { y: '0vh', duration: 1 })
            gsap.to(title_2.current, { y: '0vh', duration: 1 })
            gsap.to(man_1.current, { x: '0vw', duration: 1 })
            gsap.to(man_2.current, { x: '0vw', duration: 1 })
            gsap.to(wholeDoorRef.current, { scale: 1, y: '0vh', duration: 1, delay: .5 })
            gsap.to(centerImgRef.current, { scale: 1, duration: 1, delay: .5 })
        } else if (index < 0) {
            navigate('/section-two');
        }

        if (index >= 0) index -= 1;
    }

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        // event.preventDefault();

        currentScroll += event.deltaY;
        if (currentScroll > maximunScroll) {
            currentScroll = 0;
            goNext();
        } else if (currentScroll < -maximunScroll) {
            currentScroll = 0;
            goBefore();
        }
    }

    const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.keyCode === 38) goBefore();
        if (event.keyCode === 40) goNext();
    }

    return (
        <div className="w-screen h-screen" ref={wholeRef}>
            <div className={className} onWheel={handleWheel} onKeyDown={handleKeydown} tabIndex={0}>
                <div>
                    <div className="fixed w-screen h-screen">
                        <img src={centerImg} className="absolute w-full h-full hidden md:block" ref={centerImgRef} />
                        <img src={centerMobileImg} className="absolute w-full h-full md:hidden" />
                    </div>
                </div>
                <Header />
                <div className="absolute w-full h-full flex flex-col px-8 md:px-48 py-8 z-[999]" ref={flashRef}>
                    <div className="text-[1.2rem] md:text-[2rem] text-white text-center translate-y-0" ref={title_1}>
                        The
                        <span className="text-[#BAFFF7] font-bold mx-4">SMART Fellowship</span>
                        empowers you to start thinking where
                        <span className="text-white font-bold mx-4">A.I</span>
                        stops
                    </div>
                    <div className="text-[1rem] md:text-[1.8rem] text-[#51EAF3] text-center my-8 md:my-8" ref={title_2}>
                        Today’s companies don’t want you to do work based on just technical skills, But also apply your natural intelligence and these superpower soft skills.
                    </div>
                    <div className="flex items-center justify-center gap-16 mt-auto">
                        <img src={man1Img} ref={man_1} className="h-[40vh] md:h-auto" />
                        <img src={man2Img} ref={man_2} className="h-[40vh] md:h-auto" />
                    </div>
                </div>
                <div className="absolute bottom-[32%] md:bottom-[19%] w-[35vw] md:w-[21vw] left-[34vw] md:left-[41vw]" ref={wholeDoorRef}>
                    <img src={baseDoorImg} className="w-full h-full" />
                    <img src={contentImg} className="absolute top-[4vw] md:top-[2.5vw] left-[12vw] md:left-[7vw] w-[12vw] md:w-[7vw] h-[20vw] md:h-[12vw] opacity-0" ref={contentRef} />
                    <img src={doorImg} className="absolute top-0 left-[3.5vw] w-[14vw] md:w-[7vw] h-[27.5vw] md:h-[16.5vw]" ref={leftDoorRef} />
                    <img src={doorImg} className="absolute top-0 right-[3.5vw] w-[14vw] md:w-[7vw] h-[27.5vw] md:h-[16.5vw]" ref={rightDoorRef} />
                </div>
            </div>
            {location.pathname === '/section-three' && <Section4 className="fixed top-[100vh] left-0 w-screen h-screen" />}
        </div>
    )
}

export default Section3