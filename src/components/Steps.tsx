"use client"

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const STEPS = [
    {
        name:"Step 1: Add Image",
        description:"Choose an image for your case",
        url:"/upload"
    },
    {
        name:"Step 2: Customize design",
        description:"Make the case yours",
        url:"/upload"
    },
    {
        name:"Step 3: Summary",
        description:"Review your final design",
        url:"/preview",
    },
];

const Steps = () => {
    
    const pathname = usePathname();

    
    return (
        <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
            {STEPS.map((step, i) => {
                const isCurrent = pathname.endsWith(steps.url);
                const isCompleted = STEPS.slice(i+1).some(step=>pathname.endsWith(step.url));
                const imgPath = `/snake-${i+1}.png`;


                return <li key={step.name} className="">
                    <div>
                        <span className={cn("absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full", {
                            "bg-zinc-700": isCurrent,
                            "bg-primary": isCompleted,
                        })} aria-hidden/>

                        <span className={cn(i !== 0 ? "lg:pl-9":"", "flex items-center px-6 py-4 text-sm font-medium")}>
                            <span className="flex-shrink-0">
                                <img src={imgPath} className={cn("flex h-20 w-20 object-contain items-center justify-center", {
                                    "border-none": isCompleted,
                                    "border-zinc-700": isCurrent,
                                })} alt="" />
                            </span>
                        </span>
                    </div>
                </li>
            })}
        </ol>
    )
}

export default Steps;