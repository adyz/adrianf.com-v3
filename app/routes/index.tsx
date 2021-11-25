import type { MetaFunction } from "remix";
import { useNavigate } from "remix";
import VectorCharacter from "../components/VectorCharacter"
import Boop from '../components/Boop';
import {getSocialMetas} from '../utils/seo/meta';

export let meta: MetaFunction = ({location}) => {
  return {
    ...getSocialMetas({
      image: '/images/profile.jpeg',
      url: location.pathname,
      title: "Adrian Florescu - Front-end Developer - Bucharest, Romania",
      description: "Welcome to Adrianf.com - Front-end Developer - Bucharest, Romania - (v3)"
    })
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
                  window.location.href = "./Resume-Adrian-Florescu.pdf";
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
