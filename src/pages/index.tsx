import { useState } from "react";
import { Job } from "@/types.ts";

function getTestData(): Job[] {
    return [
        {
            id: "0",
            companyName: "Google",
            jobTitle: "Beeg Dev",
            description: "Massive job opportunity.",
            email: "email@gmail.com",
        },
        {
            id: "1",
            companyName: "Porter Johns",
            jobTitle: "John #3",
            description: "Be the best John you can be",
            email: "johndle@jonathon.com",
        },
        {
            id: "2",
            companyName: "iPhone",
            jobTitle: "Apple Man",
            description: "Who waht to be an Apple man?",
            email: "Apple@apple.apple",
        },
    ];
}

export default function Home() {
    const [jobList, setJobList] = useState<Job[]>([]);

    return (
        <main className="flex flex-col text-xl items-center justify-between pt-8">
            <h1>Job Tracker</h1>
            {getTestData().map((job) => (
                <div className="mt-4">
                    <h1 className="text-lg">{job.jobTitle + " - " + job.companyName}</h1>
                </div>
            ))}
        </main>
    );
}
