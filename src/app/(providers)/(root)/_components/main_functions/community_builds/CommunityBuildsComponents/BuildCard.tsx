/*







*/

export const BuildCard = ({ build, theme, onClick }) => {
  const textThemeH4Style = theme === "dark" ? "text-white" : "text-black";
  const textThemeStyle = theme === "dark" ? "text-gray-200" : "text-gray-900";
  const backgroundThemeStyle =
    theme === "dark"
      ? "bg-[#0d1117] border-sky-400"
      : "bg-white border-pink-500";
  const lineThemeStyle =
    theme === "dark"
      ? "linear-gradient(to right, #0ea5e9, #3730a3, #c026d3, #e11d48)"
      : "linear-gradient(to right, #a855f7 , #6b21a8 , #3b0764 , #000000)";

  return (
    <article
      key={build.id}
      className={`${backgroundThemeStyle} flex h-80 flex-col border p-4 rounded-lg shadow-md bg-opacity-40 cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-[100%] flex flex-wrap content-between">
        <section className="h-1/3">
          <h4 className={`font-semibold ${textThemeH4Style}`}>CPU</h4>
          <small className={`mt-0 line-clamp-none ${textThemeStyle}`}>
            {build.CPU}
          </small>
        </section>
        <section className="h-1/3">
          <h4 className={`font-semibold ${textThemeH4Style}`}>VGA</h4>
          <small className={`mt-0 line-clamp-none ${textThemeStyle}`}>
            {build.VGA}
          </small>
        </section>
        <section className="h-1/3">
          <h4 className={`font-semibold ${textThemeH4Style}`}>RAM</h4>
          <small className={`mt-0 line-clamp-none ${textThemeStyle}`}>
            {build.RAM}
          </small>
        </section>
      </div>
      <span
        className=" bottom-0 left-0 w-full h-[2px] opacity-60"
        style={{
          background: lineThemeStyle,
        }}
      ></span>
      <footer
        className={`text-right font-bold text-xl text-${
          theme === "dark" ? "white" : "black"
        }`}
      >
        {build.totalPrice.toLocaleString()} 원
      </footer>
    </article>
  );
};