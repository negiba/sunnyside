export const CenteredArticle = ({ title, text, color }) => {
  const styles = {
      width: '10rem'
  };
  return (
    <div className={`flex flex-col text-center`} style={{width: '22rem'}}>
      <h3
        className={`font-serif font-black text-2xl max-w-lg pb-6 text-${color}`}
      >
        {title}
      </h3>
      <p className={`font-sans text-gray-400 text-md pb-12 text-${color}`}>
        {text}
      </p>
    </div>
  );
};
