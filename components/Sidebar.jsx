// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faHome,
// 	faUser,
// 	faFolderOpen,
// 	faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";


// const Sidebar = () => {
// 	const handleMoveToSection = (index) => {
// 		fullpage_api.moveTo(index);
// 		fullpage_api.getActiveSection();
// 	};

// 	const containIsActive = (index) => {
// 		if (fullpage_api.getActiveSection().index === index) {
// 			return "bg-gray-500";
// 		}
// 		return "";
// 	};
// 	return (
// 		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
// 			<ul
// 				id="sidebar"
// 				className="flex flex-col justify-evenly items-center h-full  text-gray-50">
// 				<li data-menuanchor="home" className="active">
// 					<button onClick={() => handleMoveToSection(1)}>
// 						<FontAwesomeIcon icon={faHome} className="text-xl" />
// 					</button>
// 				</li>
// 				<li data-menuanchor="about">
// 					<button onClick={() => handleMoveToSection(2)}>
// 						<FontAwesomeIcon icon={faUser} className="text-xl" />
// 					</button>
// 				</li>
// 				<li data-menuanchor="projects">
// 					<button onClick={() => handleMoveToSection(3)}>
// 						<FontAwesomeIcon
// 							icon={faFolderOpen}
// 							className="text-xl"
// 						/>
// 					</button>
// 				</li>
// 				<li data-menuanchor="contact">
// 					<button onClick={() => handleMoveToSection(4)}>
// 						<FontAwesomeIcon
// 							icon={faEnvelope}
// 							className="text-xl"
// 						/>
// 					</button>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

// export default Sidebar;


// THE ORIGINAL IS ABOVE
// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHome,
//     faUser,
//     faFolderOpen,
//     faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//     // Native replacement for fullpage_api.moveTo()
//     const handleMoveToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "start" });
//         } else {
//             window.location.href = `/#${sectionId}`;
//         }
//     };

//     return (
//         <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
//             <ul
//                 id="sidebar"
//                 className="flex flex-col justify-evenly items-center h-full text-gray-50">
//                 <li data-menuanchor="home">
//                     {/* Notice we pass the text string of the ID here */}
//                     <button onClick={() => handleMoveToSection("home")}>
//                         <FontAwesomeIcon icon={faHome} className="text-xl hover:text-gray-400 transition-colors" />
//                     </button>
//                 </li>
//                 <li data-menuanchor="about">
//                     <button onClick={() => handleMoveToSection("about")}>
//                         <FontAwesomeIcon icon={faUser} className="text-xl hover:text-gray-400 transition-colors" />
//                     </button>
//                 </li>
//                 <li data-menuanchor="projects">
//                     <button onClick={() => handleMoveToSection("projects")}>
//                         <FontAwesomeIcon
//                             icon={faFolderOpen}
//                             className="text-xl hover:text-gray-400 transition-colors"
//                         />
//                     </button>
//                 </li>
//                 <li data-menuanchor="contact">
//                     <button onClick={() => handleMoveToSection("contact")}>
//                         <FontAwesomeIcon
//                             icon={faEnvelope}
//                             className="text-xl hover:text-gray-400 transition-colors"
//                         />
//                     </button>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;

// "use client";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHome,
//     faUser,
//     faFolderOpen,
//     faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//     // 1. We add a state to track which section is currently active
//     const [activeSection, setActiveSection] = useState("home");

//     // Native replacement for fullpage_api.moveTo()
//     const handleMoveToSection = (sectionId) => {
//         setActiveSection(sectionId); // 2. Update the visual state when clicked
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "start" });
//         } else {
//             window.location.href = `/#${sectionId}`;
//         }
//     };

//     // Helper function for the animated button styling
//     const getButtonClasses = (id) => {
//         const isActive = activeSection === id;
//         return `flex items-center space-x-3 rounded-full transition-all duration-300 ease-in-out overflow-hidden ${
//             isActive
//                 ? "bg-gray-500 w-[120px] px-3 py-2 text-white shadow-lg" // Expanded active state
//                 : "bg-transparent w-10 px-2 py-2 text-gray-50 hover:bg-gray-600 hover:w-[120px] group" // Small inactive state (expands on hover)
//         }`;
//     };

//     // Helper function for the animated text styling
//     const getTextClasses = (id) => {
//         const isActive = activeSection === id;
//         return `font-semibold whitespace-nowrap transition-all duration-300 ${
//             isActive
//                 ? "opacity-100" // Always visible if active
//                 : "opacity-0 group-hover:opacity-100" // Visible on hover if inactive
//         }`;
//     };

//     return (
//         // Changed items-center to items-start and adjusted padding so the pills expand out to the right beautifully
//         <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-start py-6 px-2 left-0 top-1/4 rounded-e-3xl">
//             <ul
//                 id="sidebar"
//                 className="flex flex-col justify-evenly items-start w-full h-full text-gray-50 space-y-4">
//                 <li data-menuanchor="home">
//                     <button onClick={() => handleMoveToSection("home")} className={getButtonClasses("home")}>
//                         {/* min-w-[24px] prevents the icon from squishing when expanding */}
//                         <FontAwesomeIcon icon={faHome} className="text-xl min-w-[24px] text-center" />
//                         <span className={getTextClasses("home")}>Home</span>
//                     </button>
//                 </li>
//                 <li data-menuanchor="about">
//                     <button onClick={() => handleMoveToSection("about")} className={getButtonClasses("about")}>
//                         <FontAwesomeIcon icon={faUser} className="text-xl min-w-[24px] text-center" />
//                         <span className={getTextClasses("about")}>About</span>
//                     </button>
//                 </li>
//                 <li data-menuanchor="projects">
//                     <button onClick={() => handleMoveToSection("projects")} className={getButtonClasses("projects")}>
//                         <FontAwesomeIcon icon={faFolderOpen} className="text-xl min-w-[24px] text-center" />
//                         <span className={getTextClasses("projects")}>Projects</span>
//                     </button>
//                 </li>
//                 <li data-menuanchor="contact">
//                     <button onClick={() => handleMoveToSection("contact")} className={getButtonClasses("contact")}>
//                         <FontAwesomeIcon icon={faEnvelope} className="text-xl min-w-[24px] text-center" />
//                         <span className={getTextClasses("contact")}>Contact</span>
//                     </button>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;





"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faFolderOpen,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    // 1. We keep the state to track which section is currently active
    const [activeSection, setActiveSection] = useState("home");

    // Native replacement for fullpage_api.moveTo() remains intact
    const handleMoveToSection = (sectionId) => {
        setActiveSection(sectionId); // Update the visual state when clicked
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.href = `/#${sectionId}`;
        }
    };

    // Helper function to dynamically add the blue text color if the section is active
    const getButtonClasses = (id) => {
        const isActive = activeSection === id;
        return `flex items-center space-x-4 w-full transition-colors ${
            isActive ? "text-blue-400" : "hover:text-blue-400 text-gray-50"
        }`;
    };

    return (
        /* VISUAL UPDATES APPLIED: 
          - Increased z-index to z-50
          - Added shadow and a slight border 
          - Added the expanding hover effect on the entire container (w-16 to hover:w-48 group)
        */
        <div className="hidden md:flex fixed z-50 bg-gray-900 border-y border-r border-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.4)] h-[50vh] w-16 hover:w-36 transition-all duration-300 ease-in-out flex-col justify-between items-center py-8 left-0 top-1/4 rounded-e-3xl overflow-hidden group">
            
            <ul
                id="sidebar"
                className="flex flex-col justify-evenly items-start w-full h-full text-gray-50 px-5 space-y-8">
                
                <li data-menuanchor="home" className="w-full">
                    <button onClick={() => handleMoveToSection("home")} className={getButtonClasses("home")}>
                        <FontAwesomeIcon icon={faHome} className="text-2xl min-w-[24px]" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Home</span>
                    </button>
                </li>
                
                <li data-menuanchor="about" className="w-full">
                    <button onClick={() => handleMoveToSection("about")} className={getButtonClasses("about")}>
                        <FontAwesomeIcon icon={faUser} className="text-2xl min-w-[24px]" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">About</span>
                    </button>
                </li>
                
                <li data-menuanchor="projects" className="w-full">
                    <button onClick={() => handleMoveToSection("projects")} className={getButtonClasses("projects")}>
                        <FontAwesomeIcon icon={faFolderOpen} className="text-2xl min-w-[24px]" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Projects</span>
                    </button>
                </li>
                
                <li data-menuanchor="contact" className="w-full">
                    <button onClick={() => handleMoveToSection("contact")} className={getButtonClasses("contact")}>
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl min-w-[24px]" />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Contact</span>
                    </button>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;


















// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHome,
//     faUser,
//     faFolderOpen,
//     faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//     // Robust manual scrolling function replacing fullpage_api
//     const handleMoveToSection = (sectionId) => {
//         // Find the section by its ID on the page
//         const element = document.getElementById(sectionId);
//         if (element) {
//             // Force the browser to scroll to the top of that specific element smoothly
//             element.scrollIntoView({ behavior: "smooth", block: "start" });
//         } else {
//             // Fallback: If they somehow click this from another page, send them to the home page section
//             window.location.href = `/#${sectionId}`;
//         }
//     };

//     return (
//         <div className="hidden md:flex fixed z-50 bg-gray-900 border-y border-r border-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.4)] h-[50vh] w-16 hover:w-48 transition-all duration-300 ease-in-out flex-col justify-between items-center py-8 left-0 top-1/4 rounded-e-3xl overflow-hidden group">
            
//             {/* Kept your original id="sidebar" and data-menuanchor attributes just in case your CSS uses them */}
//             <ul
//                 id="sidebar"
//                 className="flex flex-col justify-evenly items-start w-full h-full px-5 space-y-8 text-gray-50">
                
//                 <li data-menuanchor="home" className="w-full">
//                     {/* Reverted to standard <button> to match your original working logic */}
//                     <button 
//                         onClick={() => handleMoveToSection("home")}
//                         className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faHome} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Home</span>
//                     </button>
//                 </li>
                
//                 <li data-menuanchor="about" className="w-full">
//                     <button 
//                         onClick={() => handleMoveToSection("about")}
//                         className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faUser} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">About</span>
//                     </button>
//                 </li>
                
//                 <li data-menuanchor="projects" className="w-full">
//                     <button 
//                         onClick={() => handleMoveToSection("projects")}
//                         className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faFolderOpen} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Projects</span>
//                     </button>
//                 </li>
                
//                 <li data-menuanchor="contact" className="w-full">
//                     <button 
//                         onClick={() => handleMoveToSection("contact")}
//                         className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faEnvelope} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Contact</span>
//                     </button>
//                 </li>
                
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;






// "use client";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHome,
//     faUser,
//     faFolderOpen,
//     faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//     return (
//         /* VISUAL UPDATES: 
//           - Increased z-index to z-50 to ensure it's always on top
//           - Added shadow-2xl and a slight border to make it pop off the background
//           - Added an expanding hover effect (w-16 to hover:w-48)
//         */
//         <div className="hidden md:flex fixed z-50 bg-gray-900 border-y border-r border-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.4)] h-[50vh] w-16 hover:w-48 transition-all duration-300 ease-in-out flex-col justify-between items-center py-8 left-0 top-1/4 rounded-e-3xl overflow-hidden group">
            
//             <ul className="flex flex-col justify-evenly items-start w-full h-full text-gray-50 px-5 space-y-8">
                
//                 <li className="w-full">
//                     {/* Using Next.js Link guarantees it routes to the home page first, then scrolls to the #home section */}
//                     <Link href="/#home" className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faHome} className="text-2xl min-w-[24px]" />
//                         {/* This text is hidden until the user hovers over the sidebar */}
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Home</span>
//                     </Link>
//                 </li>
                
//                 <li className="w-full">
//                     <Link href="/#about" className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faUser} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">About</span>
//                     </Link>
//                 </li>
                
//                 <li className="w-full">
//                     <Link href="/#projects" className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faFolderOpen} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Projects</span>
//                     </Link>
//                 </li>
                
//                 <li className="w-full">
//                     <Link href="/#contact" className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faEnvelope} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Contact</span>
//                     </Link>
//                 </li>
                
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;



// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHome,
//     faUser,
//     faFolderOpen,
//     faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//     // We use the ID strings (like 'home', 'about') to find the sections and scroll to them natively
//     const handleMoveToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth" });
//         }
//     };

//     return (
//         /* VISUAL UPDATES: 
//           - Increased z-index to z-50 to ensure it's always on top
//           - Added shadow-2xl and a slight border to make it pop off the background
//           - Added an expanding hover effect (w-16 to hover:w-48)
//         */
//         <div className="hidden md:flex fixed z-50 bg-gray-900 border-y border-r border-gray-600 shadow-[0_0_20px_rgba(0,0,0,0.4)] h-[50vh] w-16 hover:w-48 transition-all duration-300 ease-in-out flex-col justify-between items-center py-8 left-0 top-1/4 rounded-e-3xl overflow-hidden group">
            
//             <ul className="flex flex-col justify-evenly items-start w-full h-full text-gray-50 px-5 space-y-8">
                
//                 <li className="w-full">
//                     {/* We pass 'home' instead of 1 so the browser knows exactly which section to scroll to */}
//                     <button onClick={() => handleMoveToSection('home')} className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faHome} className="text-2xl min-w-[24px]" />
//                         {/* This text is hidden until the user hovers over the sidebar */}
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Home</span>
//                     </button>
//                 </li>
                
//                 <li className="w-full">
//                     <button onClick={() => handleMoveToSection('about')} className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faUser} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">About</span>
//                     </button>
//                 </li>
                
//                 <li className="w-full">
//                     <button onClick={() => handleMoveToSection('projects')} className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faFolderOpen} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Projects</span>
//                     </button>
//                 </li>
                
//                 <li className="w-full">
//                     <button onClick={() => handleMoveToSection('contact')} className="flex items-center space-x-4 w-full hover:text-blue-400 transition-colors">
//                         <FontAwesomeIcon icon={faEnvelope} className="text-2xl min-w-[24px]" />
//                         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">Contact</span>
//                     </button>
//                 </li>
                
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;






