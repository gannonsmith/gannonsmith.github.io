import Image from "next/image";

interface ExperienceCardProps {
    title: string;
    company: string;
    image: string;
    bullets: string[];
    skills: string[];  
}

export default function ExperienceCard({title, company, image, bullets, skills}: ExperienceCardProps) {

  return (
    <div className="m-6 flex flex-col rounded-3xl w-96 h-auto shadow-2xl border border-gray-300">
        <Image
            className="rounded-t-3xl"
            src={image}
            width={400}
            height={300}
            alt="company card"
        />
        <div className="px-4 py-2">
            <div className="text-xl">
                {title}
            </div>
            <div className="text-md text-gray-400">
                {company}
            </div>
            {false && skills}
            <div>
                <ul>
                    {bullets.map((item: string, index: number) => {
                        return (
                            <li key={index} className="">
                            {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
  );
}