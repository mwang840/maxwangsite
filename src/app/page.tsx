import Image from "next/image";
import Spotlight, {SpotlightCard} from "./components/Highlights";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Link from "next/link";
import {inter} from "./components/fonts";
import {ytToAudioImg, sudokuCSPImg, HenHacks2024Img} from "./components/project-images";

export default function Page() {
    return (
        <main className="bg-slate-950">
            <div className="min-h-screen">
                <Spotlight>
                    <SpotlightCard>
                        <div className={`${inter.className} px-10 my-44 mx-auto flex flex-col lg:px-0 px-auto lg:w-1/2 max-w-5xl`}>
                            <div className="px-5 py-5">
                                <p className={`text-slate-200 text-5xl font-extrabold my-10`}>
                                    Hey! I&apos;m Maxwell Wang 👋
                                </p>
                                <p className={`text-slate-200 text-3xl font-semibold mt-2 mb-5`}>
                                    I&apos;m an software engineer, web developer, and data scientist.
                                </p>
                            </div>
                            <div id={"About"} className="mt-20 flex flex-col space-y-3 scroll-mt-24 px-5 py-5">
                                <p className={`text-slate-200 text-xl font-bold`}>
                                    About
                                </p>

                                <p className={`text-slate-200 text-md`}>
                                   I am a software engineer, having recently graduated from the University of Delaware with a Bachelors of Science in Computer Science.
                                </p>
                                <p  className={`text-slate-200 text-md`}>
                                    When I&apos;m not coding on my computer. I love traveling the world and also hiking in parks. I also am a avid gym goer, ensuring that I always keep myself healthy and build an respectable physique. I also have a side hobby in chess, occasionally going to chess.com to learn more puzzles.
                                    Other then that, I also enjoy aviation a lot, having a big passion for passenger planes ranging from the 747/A380 hub and spoke eras to modern aircraft such as the 787, A350, A330neo and the 777 series.
                                    Sometimes I do some podcasting on youtube.
                                </p>
                            </div>
                            <div id={"Education"} className="mt-20 flex flex-col space-y-3 scroll-mt-24 px-5 py-5">
                                <p className="text-slate-200 text-xl font-bold">
                                    Education
                                </p>

                                <p className="text-slate-200 text-md font-semibold">
                                    University of Delaware College of Engineering
                                    <br></br>
                                    Bachelors of Science Degree in Computer Science, Artificial Intelligence and Robotics Concentration
                                    <br></br>
                                    Class of 24&apos;
                                </p>

                                <Link href={'files/MW Resume.pdf'} target="_blank" rel="noopener noreferrer">
                                    <span className="text-slate-200 hover:text-sky-300">
                                        View Full Résumé
                                    </span>
                                </Link>

                            </div>
                            <div id={"Experience"} className="mt-20 flex flex-col space-y-3 scroll-mt-24 px-5 py-5">
                                <p className="text-slate-200 text-xl font-bold">
                                    Experience
                                </p>

                                <Experience start="June 2023" end="Present" title="Northrop Grumman" jobTitle="Software Engineer and Co-Op" description="Designed and implemented a software prototype and an custom user experience while  facilitating efficient communication and task prioritization across the team Gained Proficiency in DevOps, Unit Testing, Jira, Cmake, Confluence, and CI/CD pipeline. Optimized standup meetings in the role of interim scrum master, fostering streamlined communication and task prioritization across the team for enhanced efficiency"/>
                                <Experience start="Feb 2023" end="May 2024" title="University of Delaware Computer & Info. Sciences" jobTitle="Teaching Assistant" description="I instruct CISC 437, focusing on Database Systems, where I cover topics such as SQL, data retrieval languages, and the principles of security, integrity, as well as the physical and logical organization of databases. Additionally, I actively engage with students through office hours, conduct exams and quizzes, and provide clear and constructive feedback to a cohort of 50-60 students. Additionally as duty as an proctor TA, it is my responsibility to schedule exams, whether it be makeup or for computer science courses and to make sure there is not a time constraint in students schedule and the exam schedule. I also report to the TA coordinator about scheduling issues, and whether slots for scheduling exams are avaliable."/>
                                <Experience start="August 2022" end="May 2024" title="University of Delaware Computer Science for Social Good" jobTitle="Volunteer Outreach" description="I guided potential computer science students to various volunteering, internship, research and industry opportunities within the field. Additionally, I revamped the club's website, enhancing its functionality to showcase events and pose questions for club members, among other improvements."/>
                                <Experience start="June 2022" end="Janurary 2023" title="University of Delaware Computer & Info. Sciences Sensify Lab" jobTitle="Research Assistant" description="I engaged in a research project at the Sensify Lab under the guidance of Dr. Matthew Mauriello. During this project, I developed an application employing the Arduino controller and Unity. The purpose of the application was to empower children on the autism spectrum, enabling them to customize music layers in a song to suit their individual preferences. Throughout the project, I gained valuable insights into human-computer interaction and applied sound software engineering practices."/>
                            </div>
                            <div id={"Projects"} className="mt-20 flex flex-col space-y-3 scroll-mt-24 px-5 py-5">
                                <p className="text-slate-200 text-xl font-bold">
                                    Projects
                                </p>
                                <Projects title="Youtube to Audio File Converter GUI" chips={["Python", "Tkinter", "Pytube", "MoviePy", "Requests"]} description="An GUI created with Python, Tkinter, Pytube and Movie Py which downloads a youtube link that the user has to input in the textbox and choose which format to download the youtube link. This project helped me to learn tkinter and was originally started as an alternative to extract audio from youtube videos without the needs of going through a third party website to get the audio." imageRef={ytToAudioImg} externalLink={['https://github.com/mwang840/YtAudioConverter', 'Click to learn more']}/>
                                <Projects title="Sudoku Constraint Satisfication Problem" chips={["Python", "Flask", "HTML"]} description="A project taking a Sudoku Board, utilizing AC-3 algortithm to solve a sudoku problem as well as leveraging backtracking algorithm to fill out a 4x4 or an 9x9 sudoku board. Note the algorithm may not work for all 9x9 puzzles" imageRef={sudokuCSPImg} externalLink={['https://en.wikipedia.org/wiki/Constraint_satisfaction_problem', 'Click to learn more']}/>
                            </div>
                        </div>
                    </SpotlightCard>
                </Spotlight>
            </div>
        </main>
    );
}