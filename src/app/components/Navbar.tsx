"use client"
import React, {useCallback, useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import {debounce} from "next/dist/server/utils";
import { useDebounce } from "use-debounce";
import NavLinks from "./NavLinks";

export default function NavBar() {
    const [scrollDirection, setScrollDirection] = useState(true); // Assuming initially scrolling down
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollPosition = window.scrollY;
        setScrollDirection(currentScrollPosition <= prevScrollPosition);
        setPrevScrollPosition(currentScrollPosition);
    }, [prevScrollPosition]);

    const [debouncedScroll] = useDebounce(handleScroll, 200);

    useEffect(() => {
        window.addEventListener('scroll', debouncedScroll);
        return () => {
            window.removeEventListener('scroll', debouncedScroll)
        }
    }, [debouncedScroll]);

    return (
        <div className={`transition duration-500 flex h-full flex-row px-3 py-4 md:px-2 bg-slate-950 
        ${scrollDirection ? "opacity-100" : 'opacity-0'}`
        }>
            <Link
                className="group transition duration-500 ease-linear flex items-end justify-start rounded-md border-slate-200 border-2 hover:bg-left-bottom hover:bg-slate-200  px-4 py-2"
                href="/"
            >
                <Image src={'/favicon.ico'} alt="MW initials" width={30} height={30}/>
                <p className="px-2 text-slate-200 group-hover:text-slate-950 my-auto">
                    | Design
                </p>
            </Link>
            <div className="flex flex-row ml-auto mr-4 my-auto">
                <NavLinks/>
            </div>
        </div>
    );
}