export const SectionArticle = ({ title, text, lineColor }) => {
  return (
    <div className="flex flex-col w-full lg:w-2/3">
      <h3 className="font-serif font-black text-3xl text-center lg:text-left lg:text-5xl max-w-lg pt-12 lg:pt-0 pb-6">{title}</h3>
      <p className="font-sans text-gray-400 text-xl px-2 lg:px-0 pb-12 text-center lg:text-left">{text}</p>
      <div className={`w-32 h-0 self-start border-4 rounded text-center ${lineColor}`}>
        <button className="font-serif transform -translate-y-5">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
