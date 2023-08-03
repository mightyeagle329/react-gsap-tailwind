import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import bgImg from "../assets/section4/background.png";
import financeImg from "../assets/section4/finance.png";
import itImg from "../assets/section4/it.png";
import mediaImg from "../assets/section4/media.png";
import financeMobileImg from "../assets/section4/finance-mobile.png";
import itMobileImg from "../assets/section4/it-mobile.png";
import mediaMobileImg from "../assets/section4/media-mobile.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface MyComponentProps {
    className?: string;
}

gsap.registerPlugin(ScrollToPlugin);

const Section4: React.FC<MyComponentProps> = ({ className }) => {
    const navigate = useNavigate();
    const mainRef = useRef(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.buttons !== 1) return;

        gsap.to(mainRef.current, { scrollTo: { x: `-=${isMobileDevice() ? event.movementX * 2 : event.movementX * 5}` }, duration: 1 })
    }

    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    let index = 0;
    let maximunScroll = 500;
    let currentScroll = 0;

    const goNext = () => {
    }

    const goBefore = () => {
        navigate('/section-three');
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
        <div className={className} onWheel={handleWheel}>
            <div>
                <div className="fixed w-screen h-screen">
                    <img src={bgImg} className="absolute w-full h-full" />
                </div>
            </div>
            <Header />
            <div className="absolute w-full flex px-8 md:px-24 py-8 z-[999] overflow-x-scroll select-none" ref={mainRef} onMouseMove={handleMouseMove}>
                <div className="w-[85vw] mx-0">
                    <img src={financeImg} className="max-w-none hidden md:block" />
                    <img src={financeMobileImg} className="max-w-none md:hidden" />
                </div>
                <div className="w-[85vw] mx-0">
                    <img src={itImg} className="max-w-none hidden md:block" />
                    <img src={itMobileImg} className="max-w-none md:hidden" />
                </div>
                <div className="w-[85vw] mx-0">
                    <img src={mediaImg} className="max-w-none hidden md:block" />
                    <img src={mediaMobileImg} className="max-w-none md:hidden" />
                </div>
            </div>
        </div>
    )
}

export default Section4