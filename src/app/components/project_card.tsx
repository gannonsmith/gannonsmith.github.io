import { url } from "inspector";
import Image from "next/image";

export default function ProjectCard({title, image, description, skills}) {

  return (
    <div className="m-2 flex flex-col items-center w-96 h-auto text-white rounded-lg shadow-2xl bg-zinc-800">
        <Image
            className="rounded-t-lg"
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
  );
}