import { CenteredArticle } from "../centered-article/centered-article";

export const ImageWithArticle = ({
  image,
  articleTitle,
  articleText,
  articleColor,
}) => {
  return (
    <div
      className="flex bg-cover bg-center w-full h-full justify-center items-end"
      style={{ backgroundImage: `url(${image})` }}
    >
      <CenteredArticle
        title={articleTitle}
        text={articleText}
        color={articleColor}
      />
    </div>
  );
};
