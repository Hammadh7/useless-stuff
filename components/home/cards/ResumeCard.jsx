import React from "react";
import Link from "next/link";
import { BsFileEarmarkText } from "react-icons/bs";

const resumeLink = "https://drive.google.com/drive/folders/1o-6G5rHN_52yFh-7tEO44ty5A86kLnqN?usp=drive_link";

const ResumeCard = () => {
    return (
        <Link
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 rounded-md px-5 py-5 flex flex-col justify-between space-y-3 drop-shadow-[0_10px_8px_rgba(82,82,82,0.04)] transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300 hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)]"
        >
            <BsFileEarmarkText className="w-10 h-10 hover:text-amber-500" />
            <p className="font-bold text-2xl font-sans">Resume</p>
        </Link>
    );
};

export default ResumeCard;
