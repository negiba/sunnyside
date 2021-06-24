export const SectionArticle = ({ title, text, lineColor }) => {
  return (
    <div className="flex flex-col w-2/3">
      <h3 className="font-serif font-black text-5xl max-w-lg pb-6">{title}</h3>
      <p className="font-sans text-gray-400 text-xl pb-12">{text}</p>
      <div className={`w-32 h-0 self-start border-4 rounded text-center ${lineColor}`}>
        <button className="font-serif transform -translate-y-5">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
