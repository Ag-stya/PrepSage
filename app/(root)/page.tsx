import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const HomePage = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI by your side!</h2>
                    <p className="text-lg">
                        Practice on real-interview questions and get instant feedback!
                    </p>
                    <button  className="btn-primary max-sm:w-full">
                        <Link href="/interview"> Start an Interview!</Link>
                    </button>

                </div>
                <Image src="/robot.png" alt="robo-dude"  width={400} height={400} className="max-sm:hidden"/>

            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Taken Interviews</h2>
                <div className="interviews-section">
                    {/*<p>You havent taken any interviews yet.</p>*/}
                    {dummyInterviews.map((interview)=>(
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}
                </div>

            </section>



            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview)=>(
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}
                </div>
            </section>
        </>

    )
}
export default HomePage
