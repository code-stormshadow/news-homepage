import "./App.css";
import imageWebdesktop from "./assets/images/imageWebdesktop.jpg";
import imageweb3mobile from "./assets/images/imageweb3mobile.jpg";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import iconmenu from "./assets/images/iconmenu.svg";
// import iconmenuclose from "./assets/images/iconmenuclose.svg";
import logo from "./assets/images/logo.svg";
import imageretropcs from "./assets/images/imageretropcs.jpg";
import imagetoplaptops from "./assets/images/imagetoplaptops.jpg";
import imagegaminggrowth from "./assets/images/imagegaminggrowth.jpg";
import { useEffect } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("isMenuOpen");
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on the body element
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling on the body element
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup: Enable scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div className="container md:screen md:mx-20 lg:mx-20 lg:px-5 xl:mx-32 xl:px-18">
      <div className="content-Div">
        <div className="hidden md:block md:w-full">
          <div className="flex mb-7 mt-5 md:w-full md:gap-32 lg:w-[940px] lg:gap-72 xl:w-9/12 xl:gap-80">
            <div className="md:">
              <div>
                <img className="mr-52" src={logo} alt="icon"></img>
              </div>
            </div>
            <div className="flex space-x-6 w-3/3 mt-3 ml-12">
              <h2 className=" hover:text-red-600 font-inter text-base font-light">
                Home
              </h2>
              <h3 className=" hover:text-red-600 font-inter text-base font-light">
                New
              </h3>
              <h3 className=" hover:text-red-600 font-inter text-base font-light">
                Popular
              </h3>
              <h3 className=" hover:text-red-600 font-inter text-base font-light">
                Trending
              </h3>
              <h3 className=" hover:text-red-600 font-inter text-base font-light">
                Categories
              </h3>
            </div>
          </div>
          <div className="font-inter flex grid grid-cols-2 grid-rows-2 lg:w-full xl:gap-6 xl:w-full">
            <div className="md:w-[430px] md:h-[270px] lg:w-max lg:h-[270px] xl:flex xl:w-full xl:col-span-1 xl:h-full">
              <img className="md:w-[500px] md:h-full lg:w-[600px] lg:h-[270px] xl:w-[690px]" src={imageWebdesktop} alt=""></img>
            </div>
            <div className=" row-span-2 bg-black pl-5 md:w-80 md:ml-16  lg:ml-32 lg:h-4/12 xl:row-span-2 xl:ml-0 xl:h-6/12">
              <h1 className="mt-8 mb-4 text-orange-300 text-3xl font-inter font-semibold">
                New
              </h1>
              <h3 className="mt-6 mb-3 text-xl text-white font-inter font-semibold">
                Hydrogen vs Electric Cars
              </h3>
              <p className="font-inter font-medium text-neutral-200 text-sm">
                Will hydrogen-fueled cars ever catch up <br /> to EVs?
              </p>
              <br />
              <div className="w-11/12 border-b border-gray-300 mb-5"></div>

              <h3 className="mt-7 mb-3 text-xl text-white font-inter font-semibold">
                The Downsides of AI Artistry
              </h3>
              <p className="font-inter font-medium text-neutral-200 text-sm">
                What are the possible adverse effects of <br /> on-demand AI
                image generation?
              </p>
              <br />
              <div className="w-11/12 border-b border-gray-300 mb-5"></div>

              <h3 className="mt-7 mb-3 text-xl text-white font-inter font-semibold">
                Is VC Funding Drying Up?
              </h3>
              <p className="font-inter font-medium text-neutral-200 text-sm">
                Private funding by VC firms is down 50% <br />
                YOY. We take a look at what that means.
              </p>
              <br />
            </div>
            <div className="mt-5 grid grid-cols-2 md:flex w-[400px] lg:flex lg:w-[600px] xl:flex xl:w-[680px]">
              <h1 className="text-black-300 text-5xl font-inter font-extrabold md:w-4/5 md:font-bold md:text-4xl lg:w-5/6 lg:mt-2 xl:w-3/4 h-36">
                The Bright Future of <br /> Web 3.0?
              </h1>
              <div className="text-sm md:w-4/5 lg:w-full lg:h-52 xl:w-4/5 xl:h-52">
                <p className="line-clamp-4 md:line-clamp-5">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button
                  className="bg-red-400 hover:bg-red-600 mt-10 content-center w-2/4 h-1/4 text-sm 
                 text-white font-inter font-medium tracking-[4px] md:w-3/4 md:font-medium tracking-[3px]"
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-20 md:w-full lg:w-[940px] xl:w-4/5 xl:flex xl:flex-between">
            <div className=" md:md:w-[60px] md:h-[100px] lg:w-[282px] flex xl:w-80">
              <img
                className="lg:w-[70px] xl:w-[80px] h-[105px]"
                src={imageretropcs}
                alt=""
              ></img>
              <div className="w-56 h-28 md:px-2 lg:px-2 xl:px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-xl font-semibold md:text-lg">
                  01
                </h1>
                <h2 className="mb-1 hover:text-red-600 text-base font-bold">
                  Reviving Retro PCs
                </h2>
                <p className="w-52 text-stone-400 text-sm">
                  What happens when old PCs are given modern upgrades.
                </p>
              </div>
            </div>
            <div className="flex w-80 lg:w-72 lg:mr-0 lg:-ml-7 xl:ml-2 xl:w-80 xl:mr-7 ">
              <img
                className="md:w-[60px] md:h-[100px] lg:w-[70px] lg:h-[105px] xl:w-[80px] xl:h-[105px]"
                src={imagetoplaptops}
                alt=""
              ></img>
              <div className="w-56 h-28 md:px-2 lg:px-2 xl:px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-xl font-semibold md:text-lg">
                  02
                </h1>
                <h2 className="mb-1 hover:text-red-600 text-base font-bold">
                  Top 20 Laptops of 2022
                </h2>
                <p className="md:w-44 w-52 text-stone-400 text-sm">
                  Our best pick for various needs and projects.
                </p>
              </div>
            </div>
            <div className="flex w-80 xl:ml-10">
              <img
                className="md:md:w-[60px] md:h-[100px] lg:w-[70px] xl:w-[80px] h-[105px]"
                src={imagegaminggrowth}
                alt=""
              ></img>
              <div className="w-56 h-28 md:px-2 lg:px-2 xl:px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-xl font-semibold md:text-lg">
                  03
                </h1>
                <h2 className="mb-1 hover:text-red-600 text-base font-bold">
                  The Growth of Gaming
                </h2>
                <p className="w-52 text-stone-400 text-sm">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Screen */}

        <div className= "sm:container sm:px-2 sm:block sm:mb-15 md:hidden">
          <div className="sm:mx-3 w-full flex justify-between mt-9 mb-9 relative">
            <img src={logo} alt="icon"></img>

            <img
              onClick={toggleMenu}
              className="sm: ease-in duration-300"
              src={iconmenu}
              alt="icon"
              width="70px"
            ></img>

            {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
          </div>
          <img className="sm:mx-2 sm:w-fit" src={imageweb3mobile} alt=""></img>
          <h1 className="sm:mx-5 mt-7 mb-6 text-black-300 text-6xl font-inter font-extrabold">
            The Bright Future of Web 3.0?
          </h1>
          <p className="mx-5 mb-9 text-xl text-zinc-500 font-inter font-medium">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back
            into the hands of the people. But is it really fulfilling its
            promise?
          </p>
          <button className="mx-5 bg-red-400 hover:bg-red-600 w-2/4 text-xl text-white font-inter font-semibold tracking-widest p-3 mb-12">
            READ MORE
          </button>
          <div className="mx-5 bg-slate-900 pl-5 md:w-max pt-6">
            <h1 className=" mb-4 text-amber-300 text-4xl font-inter font-bold">
              New
            </h1>
            <h3 className="mb-3 text-3xl text-white font-inter font-extrabold">
              Hydrogen vs Electric Cars
            </h3>
            <p className="font-inter text-stone-300 text-2xl">
              Will hydrogen-fueled cars ever catch up <br /> to EVs?
            </p>
            <br />
            <div className="w-full border-b border-gray-300 mb-4"></div>

            <h3 className="mb-3 text-3xl text-white font-inter font-extrabold">
              The Downsides of AI Artistry
            </h3>
            <p className="font-inter text-stone-300 text-xl font-normal">
              What are the possible adverse effects of <br /> on-demand AI image
              generation?
            </p>
            <br />
            <div className="w-full border-b border-gray-300 mb-4"></div>

            <h3 className="mb-3 text-3xl text-white font-inter font-extrabold">
              Is VC Funding Drying Up?
            </h3>
            <p className="font-inter text-stone-300 text-lg">
              Private funding by VC firms is down 50% <br />
              YOY. We take a look at what that means.
            </p>
            <br />
          </div>
          <div className="mx-5 grid grid-cols-1 gap-7 mt-16 overscroll-contain">
            <div className="flex w-full">
              <img
                className="w-[130px] h-[160px]"
                src={imageretropcs}
                alt=""
              ></img>
              <div className=" h-full w-full px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-4xl font-semibold">
                  01
                </h1>
                <h2 className="mb-1 mt-3 text-xl font-bold">
                  Reviving Retro PCs
                </h2>
                <p className="w-fit text-xl mt-3 text-gray-400">
                  What happens when old PCs are given modern upgrades.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <img
                className="w-[130px] h-[160px]"
                src={imagetoplaptops}
                alt=""
              ></img>
              <div className="w-full h-full px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-4xl font-semibold">
                  02
                </h1>
                <h2 className="mb-1 mt-3 text-xl font-bold">
                  Top 20 Laptops of 2022
                </h2>
                <p className="w-fit text-xl mt-3 text-gray-400">
                  Our best pick for various needs and projects.
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <img
                className="w-[130px] h-[160px]"
                src={imagegaminggrowth}
                alt=""
              ></img>
              <div className="w-full h-full px-4">
                <h1 className="mb-1 text-gray-400 font-inter text-4xl font-semibold">
                  03
                </h1>
                <h2 className="mb-1 mt-3 text-xl font-bold">
                  The Growth of Gaming
                </h2>
                <p className="w-fit text-xl mt-3 text-gray-400">
                  How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-5 md:mx-0 mt-16">
          <p>
            Challenge by{" "}
            <a
              className="text-sm font-inter"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="text-sm sm:text-lg"
              href="https://github.com/code-stormshadow"
              target="_blank"
              rel="noreferrer"
            >
              Emi-ife Faluyi
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
