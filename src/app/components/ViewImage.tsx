"use client"
import React, {useState} from "react";
import {motion, AnimatePresence, wrap} from "framer-motion";

const ImageVariants = {
    enter: (size: number)=>{
        return {
            x: size > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (size: number)=>{
        return {
            zIndex: 0,
            x: size < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
}

const threshold = 1000;

const swiping = (velocity: number, offset: number)=>{
    return Math.abs(velocity * offset);
}

type ImageProps ={
    images: string[];
}

export default function ViewImage({images}: ImageProps) {
    const [[page, direction], setPage] = useState([0, 0]);

    const imgIndex = wrap(0, images.length, page);
    const paginate = (currentDirection: number)=>{
        setPage([page + currentDirection, currentDirection]);
    }

    return (<div>
        <AnimatePresence initial={false} custom={direction}>
            <motion.img
            key={page} 
            src={images[imgIndex]}
            custom={direction}
            variants={ImageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x : {type: "spring", stiffness: 300, damping: 30},
                opacity: {duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{left : 0, right : 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
                const swipe = swiping(offset.x, velocity.x);

                if (swipe < -threshold) {
                    paginate(1);
                } else if (swipe > threshold) {
                    paginate(-1);
                }
            }}/>
        </AnimatePresence>
        <div className=" bg-slate-500 text-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 absolute right-2 top-1/2 transform -translate-y-1/2" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="bg-slate-500 text-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-10 absolute left-2 top-1/2 transform -translate-y-1/2 scale-x-[-1]" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
    </div>);
}