import type { MetaFunction, LoaderFunction } from "remix";
import { useNavigate } from "remix";
import VectorCharacter from "../components/VectorCharacter"
import Boop from '../components/Boop';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};


export let meta: MetaFunction = () => {
  return {
    title: "Adrian Florescu",
    description: "Welcome to Adrianf.com V3 - Front-end Developer"
  };
};

export default function Index() {
  let navigate = useNavigate();

  return (
    <div id="Home" className="sectionWelcomeWrapper section">
      <VectorCharacter />
      <div className="sectionWelcomeText">
        <div>
          <div className="sectionWelcomeText__introHeader">
            <h1>Hey there!</h1>
            <h2>I’m Adrian, nice to meet you!</h2>
          </div>
          <div className="sectionWelcomeText__introDescription">
            <p>
              I am a Front-end Developer living in Bucharest, Romania. I've been designing and coding user interfaces for the web in the last decade using HTML, CSS, and JS.
          </p>
          </div>
          <div className="sectionWelcomeText__introButtons">
            <Boop y={2}>
              <button
                onClick={() => {
                  navigate("/Resume-Adrian-Florescu.pdf")
                }}
                className="button__readMore"
                data-description="Or click on the links in the top right corner 🚀"
              >
                Download Resume
          </button>
            </Boop>
            <Boop y={2}>
              <button
                onClick={() => {
                  navigate("/contact/")
                }}
                className="button__contact"
              >
                Contact me
          </button>
            </Boop>
          </div>
        </div>
      </div>
    </div>
  );
}
