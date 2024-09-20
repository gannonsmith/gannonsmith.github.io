
export default function ClassCard({code, title, description, skills}) {
    var skill_to_color: { [skill: string]: string } = {
        "C++": "#960018",
        "Verilog": "#2072AF",
        "C": "#ff4f00",
        "Python": "#8A2BE2",
        "SQL": "#8B8589",
        "HTML/CSS": "#993300",
        "Assembly": "#E0AB76"
    }


  return (
    <div className="p-4 flex flex-col rounded-2xl max-w-full h-auto shadow-2xl border border-gray-300">
        <div className="text-2xl">
            {code}
        </div>
        <div className="text-gray-600 text-xl">
            <h3>{title}</h3>
        </div>
        <div className="hide-on-tablet">
            <p>{description}</p>
        </div>
        <div className="hide-on-tablet flex flex-row flex-wrap">
            {skills.map((val: any, index: any) => (
                <div className="m-1 border border-gray-200 rounded-md text-xs font-medium py-0.5 px-1 inline-flex text-white" style={{backgroundColor: skill_to_color[val]}}>
                    {val}
                </div>
            ))}
        </div>
    </div>
  );
}