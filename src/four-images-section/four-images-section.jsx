export const FourImagesSection = ({
  firstImage,
  secondImage,
  thirdImage,
  forthImage,
}) => {
  return (
    <div className="flex flex-row">
      <img src={firstImage} alt="" className="w-1/4" />
      <img src={secondImage} alt="" className="w-1/4" />
      <img src={thirdImage} alt="" className="w-1/4" />
      <img src={forthImage} alt="" className="w-1/4" />
    </div>
  );
};
