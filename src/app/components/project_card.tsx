import Image from "next/image";

interface ProjectCardProps {
    title: string;
    link: string;
    image: string;
    description: string;
    skills: string;  
}

export default function ProjectCard({title, link, image, description, skills}: ProjectCardProps) {

  return (
    <a href={link} target="_blank">
        <div className="border-4 border-zinc-800 hover:border-violet-400 m-2 flex flex-col items-center w-96 h-auto text-white rounded-lg shadow-2xl bg-zinc-800">
            <Image
                className="rounded-t"
                src={image}
                width={500}
                height={300}
                alt="company card"
            />
            <div className="flex flex-col space-y-2 w-full p-4">
                <div className="text-2xl">
                    {title}
                </div>
                <div className="text-md">
                    {description}
                </div>
                <div className="text-sm text-gray-400">
                    {skills}
                </div>
            </div>
        </div>
    </a>
  );
}