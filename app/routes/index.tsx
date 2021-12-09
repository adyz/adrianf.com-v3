import type { MetaFunction } from "remix";
import { useNavigate } from "remix";
import VectorCharacter from "../components/VectorCharacter"
import Boop from '../components/Boop';
import {getSocialMetas} from '../utils/seo/meta';

const description = "I am a Front-end Developer living in Bucharest, Romania. I've been designing and coding user interfaces for the web in the last decade using HTML, CSS, and JS."

export let meta: MetaFunction = ({location}) => {
  return {
    ...getSocialMetas({
      image: 'https://adrianf.com/images/profile.jpeg',
      url: location.pathname,
      title: "Adrian Florescu - Front-end Developer - Bucharest - Romania",
      description,
      keywords: "adrian, adrian florescu, florescu, homepage, html, css, js, typescript, remix, react, romania, bucharest, front-end development"
    })
  };
};

export default function Index() {
  let navigate = useNavigate();

  return (
    <div id="Home" className="h-[100vh] min-h-[500px] w-full overflow-hidden border-b border-solid flex border-colorBorder relative">
      <VectorCharacter className="absolute right-[-30%] top-[10%] w-[80%] h-[80%] z-10" />
      <div className="
        text-colorBrown
        flex w-full h-full
        items-center
        justify-center
        max-w-[1000px]
        px-8
        py-0
      ">
        <div>
          <div>
            <h1 className="text-6xl m-0 font-serif font-bold">Hey there!</h1>
            <h2 className="text-3xl m-0 font-serif">I’m Adrian, nice to meet you!</h2>
          </div>
          <div>
            <p className="text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-1 gap-3">
            <Boop y={2}>
              <button
                onClick={() => {
                  window.location.href = "./Resume-Adrian-Florescu.pdf";
                }}
                className="
                  uppercase py-3 px-8 rounded-md font-bold text-sm border-0 tracking-widest shadow-lg
                  cursor-pointer bg-colorGreen text-[#fff]
                "
              >
                Download Resume
              </button>
            </Boop>
            <Boop y={2}>
              <button
                onClick={() => {
                  navigate("/contact/")
                }}
                className="
                  uppercase py-3 px-8 rounded-md font-bold text-sm border-0 tracking-widest shadow-lg 
                  cursor-pointer bg-colorWhite text-colorRed
                "
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
