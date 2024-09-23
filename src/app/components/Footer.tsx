import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return(
        <div className="bg-slate-200 w-full p-6 md:py-10 lg:py-16 flex flex-col items-center h-screen">
            <div className="items-center flex-col flex space-y-4 md:space-y-5 lg:space-y-6 lg:w-1/2">
                <p className="text-slate-800 font-semibold text-md md:text-lg lg:text-xl text-center">
                    I&apos;m always open for new ideas regardless whether it can be startups, projects, or you just need help! I can&apos;t guarantee work, but I&apos;m always open to passionate people.
                </p>
                <p className="text-slate-800 font-semibold text-md md:text-lg lg:text-xl text-center">
                    Interested? Shoot me an email, connect with me on linkedin or github or follow my youtube channel below!
                </p>
            </div>
            <div className="flex flex-row mt-16 space-x-5">
                <Link href='https://github.com/mwang840'>
                    <Image src={'/files/ghlogo.svg'} alt="github logo" width={32} height={32}/>
                </Link>
                <Link href='https://www.linkedin.com/in/maxwell-wang-08ws/'>
                    <Image src={'/files/linkedin.svg'} alt="linkedin logo" width={50} height={50}/>
                </Link>
                <Link href="https://www.youtube.com/channel/UC9LV2LzPtnWEjJ8Kn21KTZw">
                    <Image src={"/files/YouTube.png"} alt="youtube logo" width={40} height={40}/>
                </Link>
            </div>
            <p className="my-5 pb-5">
                Maxwell Wang © 2024
            </p>
        </div>
    );
}