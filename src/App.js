import "./App.css";
import image1 from "./assets/image-header.jpg";
import image2 from "./assets/image-transform.jpg";
import image3 from "./assets/image-stand-out.jpg";
import graphic from "./assets/image-graphic-design.jpg";
import photography from "./assets/image-photography.jpg";
import { Header } from "./header/header";
import { SectionArticle } from "./section-article/section-article";
import { ImageWithArticle } from "./image-with-article/image-with-article";

function App() {
  const articles = [
    {
      title: "Transform your brand",
      text: ` We are a full-service creative agency specializing in helping brands
       grow fast. Engage your clients through compelling visuals that do most
       of the marketing for you.`,
    },
    {
      title: `Stand out to the right audience`,
      text: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`,
    },
    {
      title: "Graphic Design",
      text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    {
      title: "Photography",
      text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <div className="w-full h-auto">
          <img className="object-cover w-full h-screen" src={image1} alt="" />
        </div>
        <section className="grid grid-cols-2 grid-rows-3 place-items-center bg-gray-50">
          <SectionArticle
            title={articles[0].title}
            text={articles[0].text}
            lineColor="border-yellow-200"
          />
          <div className="w-full">
            <img className="w-full" src={image2} alt="" />
          </div>
          <div className="w-full">
            <img className="w-full" src={image3} alt="" />
          </div>
          <SectionArticle
            title={articles[1].title}
            text={articles[1].text}
            lineColor="border-red-300"
          />
          <ImageWithArticle
            image={graphic}
            articleTitle={articles[2].title}
            articleText={articles[2].text}
            articleColor="green"
          />
          <ImageWithArticle
            image={photography}
            articleTitle={articles[3].title}
            articleText={articles[3].text}
            articleColor="blue"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
