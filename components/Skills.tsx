import Languages from "./Languages";

const Skills = () => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28 pb-6 text-center">
        <h2
          className="font-display text-[#4B4B4B]
                     text-5xl md:text-7xl lg:text-8xl
                     leading-none tracking-[0.015em]"
        >
          Skills
        </h2>

        {/* underline */}
        <div className="mt-6 h-[3px] w-[86%] max-w-5xl mx-auto bg-[#595959] rounded-full" />

        {/* closer to the line */}
        <h3
          className="mt-7 font-display text-[#4B4B4B]
                     text-3xl tracking-[0.015em]"
        >
          Languages
        </h3>
        <Languages />
      </div>
    </section>
  );
};

export default Skills;
