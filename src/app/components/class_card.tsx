import Image from "next/image";

export default function ClassCard({code, title, description, skills}) {

  return (
    <div className="p-4 flex flex-col rounded-2xl max-w-full h-auto shadow-2xl border border-gray-300">
        <div className="text-3xl">
            {code}
        </div>
        <div className="text-md text-gray-600">
            {title}
        </div>
        <div>
            {description}
        </div>
        <div>
            {skills}
        </div>
    </div>
  );
}