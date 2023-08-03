import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header";
import centerImg from "../assets/section2/center.png";
import bottomImg from "../assets/section2/bottom.png";
import deskImg from "../assets/section2/desk.png";
import monitorImg from "../assets/section2/monitor.png";
import letterInnerImg from "../assets/section2/letter-inner.png";
import letterOuterImg from "../assets/section2/letter-outer.png";
import image1 from '../assets/section2/image1.png';
import image2 from '../assets/section2/image2.png';
import image3 from '../assets/section2/image3.png';
import image4 from '../assets/section2/image4.png';
import logoImg from '../assets/logo.png';
import { gsap } from "gsap";
import Section3 from "./Section3";

interface MyComponentProps {
    className?: string;
}

const Section2: React.FC<MyComponentProps> = ({ className }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const flashRef = useRef(null);
    const logoRef = useRef(null);
    const monitorRef = useRef(null);
    const sideRef = useRef(null);
    const sideMobileRef = useRef(null);
    const letterRef = useRef(null);
    const letterInnerRef = useRef(null);
    const monitorTextRef_1 = useRef(null);
    const monitorTextRef_2 = useRef(null);
    const monitorTextRef_3 = useRef(null);
    const monitorTextRef_4 = useRef(null);
    const monitorTextRef_5 = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const image3Ref = useRef(null);
    const image4Ref = useRef(null);
    const sideItem_1 = useRef(null);
    const sideItem_2 = useRef(null);
    const sideItem_3 = useRef(null);
    const sideItem_4 = useRef(null);
    const sideItem_5 = useRef(null);
    const sideItem_6 = useRef(null);
    const sideItem_7 = useRef(null);
    const sideItem_8 = useRef(null);
    const sideItem_9 = useRef(null);
    const sideItem_mobile_1 = useRef(null);
    const sideItem_mobile_2 = useRef(null);
    const sideItem_mobile_3 = useRef(null);
    const wholeRef = useRef(null);

    let index = 0;
    let maximunScroll = 500;
    let currentScroll = 0;

    const goNext = () => {
        if (index === 0) {
            gsap.to(flashRef.current, { y: '-100vh', duration: 2 })
            gsap.to(monitorRef.current, { opacity: 1, duration: 2 })
        } else if (index === 1) {
            gsap.to(letterRef.current, { opacity: 1, y: 0, duration: 1.5 })
            gsap.to(letterInnerRef.current, { scaleY: 1, duration: 1.5 })
            gsap.to(sideRef.current, { opacity: 1, x: 0, duration: 1.5 })
            gsap.to(monitorTextRef_1.current, { y: 0, duration: 1.5 })
        } else if (index === 2) {
            gsap.to(letterRef.current, { opacity: 0, y: '-10vh', duration: 1.5 })
            gsap.to(monitorTextRef_1.current, { y: '-50vh', duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: 0, duration: 1.5 })
            gsap.to(image1Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(sideItem_3.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_6.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_9.current, { color: 'white', duration: 1.5 })
            gsap.to(sideMobileRef.current, { y: 0, duration: 1.5 })
        } else if (index === 3) {
            gsap.to(image1Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: '-50vh', duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: 0, duration: 1.5 })
            gsap.to(image2Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(sideItem_2.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_5.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_8.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_mobile_1.current, { y: '-20vh', duration: 1.5 })
            gsap.to(sideItem_mobile_2.current, { y: 0, duration: 1.5 })
        } else if (index === 4) {
            gsap.to(image1Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: '-50vh', duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: 0, duration: 1.5 })
            gsap.to(image2Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(sideItem_2.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_5.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_8.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_mobile_1.current, { y: '-20vh', duration: 1.5 })
            gsap.to(sideItem_mobile_2.current, { y: 0, duration: 1.5 })
        } else if (index === 5) {
            gsap.to(image2Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: '-50vh', duration: 1.5 })
            gsap.to(monitorTextRef_4.current, { y: 0, duration: 1.5 })
            gsap.to(image3Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(sideItem_1.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_4.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_7.current, { color: 'white', duration: 1.5 })
            gsap.to(sideItem_mobile_2.current, { y: '-20vh', duration: 1.5 })
            gsap.to(sideItem_mobile_3.current, { y: 0, duration: 1.5 })
        } else if (index === 6) {
            gsap.to(image3Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(monitorTextRef_4.current, { y: '-50vh', duration: 1.5 })
            gsap.to(monitorTextRef_5.current, { y: 0, duration: 1.5 })
            gsap.to(image4Ref.current, { opacity: 1, duration: 1.5 })
        } else if (index === 7) {
            gsap.to(image4Ref.current, { x: '-100vw', duration: 1.5 });
            gsap.to(sideRef.current, { x: '80vw', duration: 1.5 });
            gsap.to(sideMobileRef.current, { x: '100vw', duration: 1.5 });
            gsap.to(monitorRef.current, { y: '80vh', duration: 1.5 })
            gsap.to(logoRef.current, { opacity: 1, duration: 1, delay: 1 })
        } else if (index === 8) {
            gsap.to(logoRef.current, { rotate: 45, scale: 50, opacity: 0, duration: 1 });
            gsap.to(wholeRef.current, { opacity: 0, duration: 1 });

            setTimeout(() => {
                navigate("/section-three")
            }, 1000);
        }

        if (index < 8) index += 1;
    }

    const goBefore = () => {
        if (index === 8) {
            gsap.to(logoRef.current, { rotate: 0, scale: 1, opacity: 1, duration: 1 });
            gsap.to(wholeRef.current, { opacity: 1, duration: 1 });
        } else if (index === 7) {
            gsap.to(image4Ref.current, { x: '0vw', duration: 1.5 });
            gsap.to(sideRef.current, { x: '0vw', duration: 1.5 });
            gsap.to(sideMobileRef.current, { x: '0vw', duration: 1.5 });
            gsap.to(monitorRef.current, { y: '0vh', duration: 1.5 })
            gsap.to(logoRef.current, { opacity: 0, duration: 1, delay: 1 })
        } else if (index === 6) {
            gsap.to(image3Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(monitorTextRef_4.current, { y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_5.current, { y: '100vh', duration: 1.5 })
            gsap.to(image4Ref.current, { opacity: 0, duration: 1.5 })
        } else if (index === 5) {
            gsap.to(image2Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_4.current, { y: '100vh', duration: 1.5 })
            gsap.to(image3Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(sideItem_1.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_4.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_7.current, { color: 'gray', duration: 1.5 })

            gsap.to(sideItem_mobile_2.current, { y: '0vh', duration: 1.5 })
            gsap.to(sideItem_mobile_3.current, { y: '20vh', duration: 1.5 })
        } else if (index === 4) {
            gsap.to(image1Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: '100vh', duration: 1.5 })
            gsap.to(image2Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(sideItem_2.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_5.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_8.current, { color: 'gray', duration: 1.5 })

            gsap.to(sideItem_mobile_1.current, { y: '0vh', duration: 1.5 })
            gsap.to(sideItem_mobile_2.current, { y: '20vh', duration: 1.5 })
        } else if (index === 3) {
            gsap.to(image1Ref.current, { opacity: 1, duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_3.current, { y: '100vh', duration: 1.5 })
            gsap.to(image2Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(sideItem_2.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_5.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_8.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_mobile_1.current, { y: '0vh', duration: 1.5 })
            gsap.to(sideItem_mobile_2.current, { y: '20vh', duration: 1.5 })
        } else if (index === 2) {
            gsap.to(letterRef.current, { opacity: 1, y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_1.current, { y: '0vh', duration: 1.5 })
            gsap.to(monitorTextRef_2.current, { y: '50vh', duration: 1.5 })
            gsap.to(image1Ref.current, { opacity: 0, duration: 1.5 })
            gsap.to(sideItem_3.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_6.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideItem_9.current, { color: 'gray', duration: 1.5 })
            gsap.to(sideMobileRef.current, { y: '50vh', duration: 1.5 })
        } else if (index === 1) {
            gsap.to(letterRef.current, { opacity: 0, y: '100vh', duration: 1.5 })
            gsap.to(letterInnerRef.current, { scaleY: .3, duration: 1.5 })
            gsap.to(sideRef.current, { opacity: 0, x: '50vw', duration: 1.5 })
            gsap.to(monitorTextRef_1.current, { y: '50vh', duration: 1.5 })
        } else if (index === 0) {
            gsap.to(flashRef.current, { y: '0vh', duration: 2 })
            gsap.to(monitorRef.current, { opacity: 0, duration: 2 })
        } else if (index < 0) {
            navigate('/section-one');
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

    return (
        <div>
            <div className={className} onWheel={handleWheel} ref={wholeRef}>
                <div>
                    <div className="fixed w-screen h-screen">
                        <img src={centerImg} className="absolute w-full h-full" />
                        <img src={bottomImg} className="absolute bottom-0 w-full h-[60vh] md:h-auto" />
                        <img src={deskImg} className="absolute bottom-0 w-full h-[10vh] md:h-auto" />
                    </div>
                </div>
                <Header />
                <div className="absolute w-full h-full flex flex-col px-8 md:px-48 py-8 md:py-24 z-[999]" ref={flashRef}>
                    <div className="text-[1.5rem] md:text-[2rem] text-white text-center">
                        Activate your
                        <span className="text-[#BAFFF7] font-bold mx-4">Workplace Intelligence</span>
                        by doing
                    </div>
                    <div className="text-[1.2rem] md:text-[1.8rem] text-white text-center my-8 md:my-24">
                        <span>The smart fellowship</span>
                        is a workplace simulation based program where we train your brain to apply 9 soft skills which are now `must haves` for entry level candidates. They empower you to what A.I cannot (at least for the next 15 years!)
                    </div>
                    <div className="text-[1.2rem] md:text-[1.8rem] text-white font-bold text-center">
                        48 hours | 6 weeks | Weekends only
                    </div>
                </div>
                <div className="absolute w-full top-[45%] z-[999] opacity-0" ref={logoRef}>
                    <img src={logoImg} className="w-16 md:w-32 mx-auto" />
                </div>
                <div className="absolute bottom-0 w-full h-auto flex flex-col px-8 md:px-48 py-24 z-[999]">
                    <div className="absolute w-[50vw] md:w-[15vw] bottom-[55vh] md:bottom-[40vh] left-[25%] md:left-[15%] opacity-0 translate-y-10" ref={letterRef}>
                        <img src={letterInnerImg} className="scale-y-[.3]" ref={letterInnerRef} />
                        <img src={letterOuterImg} className="absolute bottom-0" />
                    </div>
                    <div className="absolute w-[80vw] md:w-[60vw] bottom-[60vh] md:bottom-[8vh] left-[10vw] md:left-[5vw] opacity-0" ref={image1Ref}>
                        <img src={image1} className="" />
                    </div>
                    <div className="absolute w-[80vw] md:w-[60vw] bottom-[60vh] md:bottom-[35vh] left-[10vw] md:left-[15%] opacity-0" ref={image2Ref}>
                        <img src={image2} className="" />
                    </div>
                    <div className="absolute w-[80vw] md:w-[40vw] bottom-[60vh] md:bottom-[55vh] left-[10vw] md:left-[10vw] opacity-0" ref={image3Ref}>
                        <img src={image3} className="" />
                    </div>
                    <div className="absolute w-[80vw] md:w-[50vw] bottom-[60vh] md:bottom-[50vh] left-[10vw] md:left-[15%] opacity-0" ref={image4Ref}>
                        <img src={image4} className="" />
                    </div>

                    <div className="absolute w-[90vw] md:w-[35vw] bottom-[18vh] md:bottom-0 right-[5%] md:right-[20%] opacity-0" ref={monitorRef}>
                        <img src={monitorImg} className="w-full" />
                        <div className="absolute top-[15%] w-full h-[60%] p-12 text-[.75rem] md:text-[1rem] text-white text-center flex flex-col justify-center items-center overflow-hidden">
                            <span className="absolute w-[70%] translate-y-[50vh]" ref={monitorTextRef_1}>During the program, you and your batchmates roleplay as core team members in an imaginary company. You master 9 soft skills by using them to tackle 100+ business scenarios on behalf of this company. Along the way you learn mental models, workplace hacks & principles that lead to success in the real world of work.</span>
                            <span className="absolute w-[70%] translate-y-[50vh]" ref={monitorTextRef_2}>Through the storyline of this imaginary company you get to collaborate with unique personalities. Whether it's resolving conflicts, getting work done by tough associates or managing multiple stakeholders - you’ll become a pro at the art of people management.</span>
                            <span className="absolute w-[70%] translate-y-[50vh]" ref={monitorTextRef_3}>To create solutions outside of theoretical knowledge and become unstoppable in the real world, you must adapt to changing scenarios. You learn this through making emotive business pitches, building innovative solutions, negotiating deals and managing crisis situations in the simulation.</span>
                            <span className="absolute w-[70%] translate-y-[50vh]" ref={monitorTextRef_4}>Attend masterclasses with accomplished professionals from the real world of work who will share their wisdom. You will also have access to 50+ hours of proprietary content derived from the experiences of 1000+ successful professionals</span>
                            <span className="absolute w-[70%] translate-y-[50vh]" ref={monitorTextRef_5}>Big boss is always watching! We observe your approach in various scenarios to generate your 'Workplace Intelligence Profile'. Employers now prefer such unique insights about candidates - giving you a unique edge over competitors with just standard degrees and certifications to show!</span>
                        </div>
                    </div>
                    <div className="absolute right-[2.5%] hidden bottom-[12vh] w-[15%] h-[70vh] md:flex flex-col justify-between items-center text-center p-4 bg-[rgba(0,0,0,0.3)] rounded-lg opacity-0 translate-x-[50vw]" ref={sideRef}>
                        <span className="absolute -top-12 text-white font-bold text-[1.5rem]">SKILLS YOU LEARN</span>
                        <div className="text-[gray]" ref={sideItem_1}>Entrepreneurial Mindset</div>
                        <div className="text-[gray]" ref={sideItem_2}>Storytelling</div>
                        <div className="text-[gray]" ref={sideItem_3}>Negotiation</div>
                        <div className="text-[gray]" ref={sideItem_4}>Emotional Intelligence</div>
                        <div className="text-[gray]" ref={sideItem_5}>First Principles Thinking</div>
                        <div className="text-[gray]" ref={sideItem_6}>Collaboration</div>
                        <div className="text-[gray]" ref={sideItem_7}>Creative Problem Solving</div>
                        <div className="text-[gray]" ref={sideItem_8}>Productivity Management</div>
                        <div className="text-[gray]" ref={sideItem_9}>Sharp Remote Communication</div>
                    </div>
                    <div className="absolute top-12 md:hidden w-[95%] right-[2.5%] text-center translate-y-[50vh]" ref={sideMobileRef}>
                        <span className="w-full text-center text-white font-bold text-[1.5rem]">SKILLS YOU LEARN</span>
                        <div className="relative h-[10vh] bg-[rgba(0,0,0,0.3)] flex flex-col overflow-hidden">
                            <div className="absolute flex w-full justify-between items-center px-4 h-[10vh]" ref={sideItem_mobile_1}>
                                <div className="text-white w-[30%] text-center">Collaboration</div>
                                <div className="text-white w-[30%] text-center">Storytelling</div>
                                <div className="text-white w-[30%] text-center">Sharp Remote Communication</div>
                            </div>
                            <div className="absolute flex w-full justify-between items-center px-4 h-[10vh] translate-y-[20vh]" ref={sideItem_mobile_2}>
                                <div className="text-white w-[30%] text-center">Creative Problem Solving</div>
                                <div className="text-white w-[30%] text-center">Negotiation</div>
                                <div className="text-white w-[30%] text-center">Emotional Intelligence</div>
                            </div>
                            <div className="absolute flex w-full justify-between items-center px-4 h-[10vh] translate-y-[20vh]" ref={sideItem_mobile_3}>
                                <div className="text-white w-[30%] text-center">Entrepreneurial Mindset</div>
                                <div className="text-white w-[30%] text-center">First Principles Thinking</div>
                                <div className="text-white w-[30%] text-center">Productivity Management</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {location.pathname === '/section-two' && <Section3 className="fixed top-0 left-0 w-screen h-screen z-[-1]" />}
        </div>
    )
}

export default Section2