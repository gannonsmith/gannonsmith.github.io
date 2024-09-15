
export default function ClassCard({code, title, description, skills}) {
    const colors = ["yellow", "orange", "green"];


  return (
    <div className="p-4 flex flex-col rounded-2xl max-w-full h-auto shadow-2xl border border-gray-300">
        <div className="text-2xl">
            {code}
        </div>
        <div className="text-gray-600">
            <h3>{title}</h3>
        </div>
        <div className="hide-on-tablet">
            <p>{description}</p>
        </div>
        <div className="hide-on-tablet flex flex-row flex-wrap">
            {skills.map((val: any, index: any) => (
                <div className="border border-black m-1 rounded text-xs font-medium py-0.5 px-1 inline-flex" style={{backgroundColor: colors[index]}}>
                    {val}
                </div>
            ))}
        </div>
    </div>
  );
}