import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import buildingImg from "../assets/home/building.png";
import centerImg from "../assets/home/center.png";
import leftCityImg from "../assets/home/left-city.png";
import rightCityImg from "../assets/home/right-city.png";
import railingImg from "../assets/home/railing.png";
import roadImg from "../assets/home/road.png";
import tmpBgImg from "../assets/home/temp-bg.png";
import character1Img from "../assets/home/character1.png";
import character2Img from "../assets/home/character2.png";
import character3Img from "../assets/home/character3.png";
import character4Img from "../assets/home/character4.png";
import character5Img from "../assets/home/character5.png";
import logoImg from '../assets/logo.png';
import { gsap } from "gsap";
import Section2 from "./Section2";

interface MyComponentProps {
	className?: string;
}

const Section1: React.FC<MyComponentProps> = ({ className }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const titleRef = useRef(null);
	const bodyRef = useRef(null);
	const footerRef = useRef(null);
	const logoRef = useRef(null);
	const char1Ref = useRef(null);
	const char2Ref = useRef(null);
	const char3Ref = useRef(null);
	const char4Ref = useRef(null);
	const char5Ref = useRef(null);
	const centerRef = useRef(null);
	const buildingRef = useRef(null);
	const leftCityRef = useRef(null);
	const rightCityRef = useRef(null);
	const railingRef = useRef(null);
	const roadRef = useRef(null);
	const wholeRef = useRef(null);

	let index = 0;
	let maximunScroll = 500;
	let currentScroll = 0;

	const goNext = () => {
		if (index === 0) {
			gsap.to(titleRef.current, { y: '0vh', duration: 1 });
			gsap.to(footerRef.current, { y: '0vh', duration: 1, delay: .5 });
			gsap.to(bodyRef.current, { gap: '5%', opacity: 1, duration: 1, delay: .5 })
			gsap.to(logoRef.current, { rotate: 360, scale: 1, duration: 1, delay: .5 });
		} else if (index === 1) {
			gsap.to(titleRef.current, { opacity: 0, duration: 1.5 });
			gsap.to(footerRef.current, { y: '50vh', duration: 1.5 });
			gsap.to(char1Ref.current, { x: '-50vw', duration: 1.5 })
			gsap.to(char2Ref.current, { x: '-50vw', duration: 1.5 })
			gsap.to(char3Ref.current, { y: '100vh', duration: 1.5 })
			gsap.to(char4Ref.current, { x: '50vw', duration: 1.5 })
			gsap.to(char5Ref.current, { x: '50vw', duration: 1.5 })
		} else if (index === 2) {
			gsap.to(logoRef.current, { rotate: 45, scale: 50, opacity: 0, duration: 1 });
			gsap.to(wholeRef.current, { opacity: 0, duration: 1, delay: .5 });
		}

		if (index < 3) index += 1;

		if (index === 3) setTimeout(() => {
			navigate("/section-two")
		}, 1000);
	}

	const goBefore = () => {
		if (index === 3) {
			gsap.to(logoRef.current, { rotate: -45, scale: 1, opacity: 1, duration: 1 });
			gsap.to(wholeRef.current, { opacity: 1, duration: 1, delay: .5 });
		} else if (index === 2) {
			gsap.to(titleRef.current, { opacity: 1, duration: 1.5 });
			gsap.to(footerRef.current, { y: '0', duration: 1.5 });
			gsap.to(char1Ref.current, { x: '0', duration: 1.5 })
			gsap.to(char2Ref.current, { x: '0', duration: 1.5 })
			gsap.to(char3Ref.current, { y: '0', duration: 1.5 })
			gsap.to(char4Ref.current, { x: '0', duration: 1.5 })
			gsap.to(char5Ref.current, { x: '0', duration: 1.5 })
		} else if (index === 1) {
			gsap.to(titleRef.current, { y: '100vh', duration: 1 });
			gsap.to(footerRef.current, { y: '50vh', duration: 1, delay: .5 });
			gsap.to(bodyRef.current, { gap: '0', opacity: 0, duration: 1, delay: .5 })
			gsap.to(logoRef.current, { rotate: 0, scale: 0, duration: 1, delay: .5 });
		}

		if (index > 0) index -= 1;
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

		console.log(currentScroll, '============')
	}

	return (
		<div className={className} onWheel={handleWheel}>
			<div className="fixed top-0 left-0 w-screen h-screen" ref={wholeRef}>
				<div className="fixed w-screen h-screen">
					<img src={centerImg} className="absolute w-full h-full" ref={centerRef} />
					<img src={buildingImg} className="absolute w-full bottom-[27vh] md:bottom-[20%]" ref={buildingRef} />
					<img src={leftCityImg} className="absolute w-[40vw] left-0 bottom-[27vh] md:bottom-0" ref={leftCityRef} />
					<img src={rightCityImg} className="absolute w-[40vw] right-0 bottom-[27vh] md:bottom-0" ref={rightCityRef} />
					<img src={railingImg} className="absolute w-[400vw] max-w-none left-[-150vw] md:left-0 md:w-full bottom-0" ref={railingRef} />
					<img src={roadImg} className="absolute w-[400vw] max-w-none left-[-150vw] md:left-0 md:w-full bottom-0" ref={roadRef} />
				</div>
				{/* <div className="fixed w-screen h-screen">
				<img src={tmpBgImg} className="absolute w-full h-full" />
			</div> */}
				<Header />
				<div>
					<div className="relative z-[999] w-full flex flex-col justify-center items-center translate-y-[100vh] text-[1.2rem] md:text-[2.5rem]" ref={titleRef}>
						<div>
							<span className="text-[#BAFFF7] font-bold">Outsmart</span>
							<span className="text-[#555555] font-bold ml-4">Artificial Intelligence</span>
						</div>
						<div className="flex flex-col md:flex-row justify-center items-center">
							<span className="text-[#555555] ">By enhancing your</span>
							<span className="text-[#BAFFF7] font-bold ml-4">Workplace Intelligence</span>
						</div>
						<div className="flex md:hidden flex-col items-center justify-center text-[1rem] md:text-[1.5rem] mt-8">
							<div>
								<span className="text-[#FFFFFF] ">Apply to the</span>
								<span className="text-[#FFFFFF] font-bold ml-4">SMART FELLOWSHIP</span>
							</div>
							<div className="flex flex-col justify-center items-center">
								<span className="text-[#FFFFFF]">Get an unique edge over other candidates:</span>
								<span className="text-[#BAFFF7] ml-4">humans or bots!</span>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center items-center opacity-0 z-[997] w-full mt-48 md:mt-24 bottom-[20vh]" ref={bodyRef}>
						<img src={character1Img} ref={char1Ref} className="h-[22vh] md:h-auto z-[997]" />
						<img src={character2Img} ref={char2Ref} className="h-[22vh] md:h-auto z-[997]" />
						<img src={character3Img} ref={char3Ref} className="h-[22vh] md:h-auto z-[997]" />
						<img src={character4Img} ref={char4Ref} className="h-[22vh] md:h-auto z-[997]" />
						<img src={character5Img} ref={char5Ref} className="h-[22vh] md:h-auto z-[997]" />
						<div className="absolute w-full top-[-10%] scale-0 z-[996]" ref={logoRef}>
							<img src={logoImg} className="w-16 md:w-32 mx-auto" />
						</div>
					</div>
					<div className="absolute w-[80%] left-[10%] mx-auto flex flex-col justify-center items-center z-[998] px-4 md:px-24 py-4 border-[2px] border-[#5EECFF] rounded-lg mt-3 md:-mt-[5%] bottom-[5vh] translate-y-[50vh]" ref={footerRef}>
						<div className="text-center hidden md:block">
							<div>
								<span className="text-[#FFFFFF] text-[1.5rem]">Apply to the</span>
								<span className="text-[#FFFFFF] text-[1.5rem] font-bold ml-4">SMART FELLOWSHIP</span>
							</div>
							<div>
								<span className="text-[#FFFFFF] text-[1.5rem]">Get an unique edge over other candidates:</span>
								<span className="text-[#BAFFF7] text-[1.5rem] ml-4">humans or bots!</span>
							</div>
							<div className="w-[50%] h-[3px] bg-gray-400"></div>
						</div>
						<div className="text-[#5EECFF] text-center text-[.8rem] md:text-[1.2rem]">
							Placement Linked | Simulated Workplace Experience | Domain Specific | ₹ 2999/-
						</div>
					</div>
				</div>
			</div>
			{location.pathname === '/section-one' && <Section2 className="fixed top-0 left-0 w-screen h-screen z-[-1]" />}
		</div>
	)
}

export default Section1