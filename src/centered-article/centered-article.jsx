export const CenteredArticle = ({ title, text, color }) => {
  return (
    <div className="flex flex-col text-center w-2/6">
      <h3 className={`font-serif font-black text-2xl max-w-lg pb-6 text-${color}-900`}>{title}</h3>
      <p className={`font-sans text-gray-400 text-md pb-12 text-${color}-800`}>{text}</p>
    </div>
  );
};
