"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ScrollDownButton() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
            setIsAtBottom(true);
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setIsAtBottom(false);
        }
    };

    return (
        <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10 z-50">
            <motion.div
                className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleScroll}
            >
                <FontAwesomeIcon
                    icon={isAtBottom ? faChevronUp : faChevronDown}
                    className="text-white text-2xl"
                />
            </motion.div>
        </div>
    );
}