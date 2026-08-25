import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="Godsgift"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="Godsgift"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Godsgift"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Godsgift Eseoghena Braimah
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						<span className="text-black font-medium"> Hello and Welcome!</span> 
						{" "} You can call me Gods+gift. <br/> I am a
						<span className="text-black font-medium">
							{" "}
							Data Scientist 
						</span>{" "}
						with growing expertise in
						<span className="text-black font-medium">
							{" "}
							Artificial Intelligence,
						</span>{" "}
						currently pursuing my{" "}
						<span className="text-black font-medium">
							Master's degree in Data Science
						</span>{" "}
						at the{" "}
						<span className="text-black font-medium">
							University of British Columbia, Canada.
						</span>{" "}
						Over the past five years, I’ve worked across 
						<span className="text-black font-medium"> consulting, 
						healthcare, educational technology, 
						research, and geospatial </span>  
						integration, contributing to building data-driven solutions that 
						translates into measurable outcomes and real-world impact. 
						My experience spans <span className="text-black font-medium"> 
						model development, analytics strategy, AI integration, and 
						stakeholder-focused implementation.</span> <br />
						I’ve also facilitated data science and AI trainings, workshops, 
						and masterclasses for over 1,000 educators and learners across Africa, 
						Canada, and Europe. <br/>
						My work is grounded in the <span className="text-black font-medium"> safe, 
						responsible, and ethical</span> applications  of AI. This focus also 
						shapes my role as the {" "} 
						<span className="text-black font-medium">
						founder of {" "} 
						<a 
						href="https://aiforkidsafrica.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-blue-600 transition"
						>
						AI for Kids
						</a>
						</span>, where I help young learners develop practical and thoughtful 
						foundations in emerging technologies. <br />
						I’m driven by  <span className="text-black font-medium">complex problems 
						that translate into meaningful results </span> for the people and organizations I serve.<br />
						<em>
						Outside of work, I enjoy dancing, (Afro and Hip-Hop specifically😁).
						</em>
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
