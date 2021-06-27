import "./App.css";
import image1 from "./assets/image-header.jpg";
import image2 from "./assets/image-transform.jpg";
import image3 from "./assets/image-stand-out.jpg";
import graphic from "./assets/image-graphic-design.jpg";
import photography from "./assets/image-photography.jpg";
import imageEmily from "./assets/image-emily.jpg";
import imageThomas from "./assets/image-thomas.jpg";
import imageJennie from "./assets/image-jennie.jpg";
import milkBottles from "./assets/image-gallery-milkbottles.jpg";
import orange from "./assets/image-gallery-orange.jpg";
import cone from "./assets/image-gallery-cone.jpg";
import sugarCubes from "./assets/image-gallery-sugarcubes.jpg";

import { Header } from "./header/header";

import { SectionArticle } from "./section-article/section-article";
import { ImageWithArticle } from "./image-with-article/image-with-article";
import { Testimonial } from "./testimonial/testimonial";
import { FourImagesSection } from "./four-images-section/four-images-section";
import {Footer} from "./footer/footer";

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
    {
      description:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      position: "Marketing Director",
    },
    {
      description:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      position: "Chief Operating Officer",
    },
    {
      description:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      position: "Business Owner",
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <div className="w-full h-auto">
          <img className="object-cover w-full h-screen" src={image1} alt="" />
        </div>
        <section className="grid grid-cols-2 grid-rows-3 place-items-center bg-grayish">
          <SectionArticle
            title={articles[0].title}
            text={articles[0].text}
            lineColor="border-softyellow"
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
            lineColor="border-softred"
          />
          <ImageWithArticle
            image={graphic}
            articleTitle={articles[2].title}
            articleText={articles[2].text}
            articleColor="darkcyan"
          />
          <ImageWithArticle
            image={photography}
            articleTitle={articles[3].title}
            articleText={articles[3].text}
            articleColor="darkblue"
          />
        </section>
        <section className="flex flex-col place-items-center bg-grayish py-40 px-20">
          <p
            className="col-span-3 font-serif text-grayishblue text-xl pb-20"
            style={{ letterSpacing: "0.2em" }}
          >
            CLIENT TESTIMONIALS
          </p>
          <div className="grid grid-cols-3 gap-x-10 place-items-center bg-gray-50">
            <Testimonial
              avatar={imageEmily}
              description={articles[4].description}
              name={articles[4].name}
              position={articles[4].position}
            />

            <Testimonial
              avatar={imageThomas}
              description={articles[5].description}
              name={articles[5].name}
              position={articles[5].position}
            />
            <Testimonial
              avatar={imageJennie}
              description={articles[6].description}
              name={articles[6].name}
              position={articles[6].position}
            />
          </div>
        </section>
        <section>
          <FourImagesSection
            firstImage={milkBottles}
            secondImage={orange}
            thirdImage={cone}
            forthImage={sugarCubes}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
