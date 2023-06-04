import { useState } from "react";
import "./index.css";

import { motion } from "framer-motion";

import Heart from "../assets/undraw_heart.svg";
import Bird from "../assets/undraw_bird.svg";
import Tree from "../assets/undraw_tree.svg";
import Group from "../assets/groupPhoto.jfif";

const Index = () => {
  const [shownPopup, setShownPopup] = useState(false);
  const [text, setText] = useState("");

  // Info about object
  const [object, setObject] = useState("");
  const [safety, setSafety] = useState(0);
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  const showPopup = (
    safety: number,
    status: string,
    description: string,
    object: string
  ) => {
    setSafety(safety);
    setType(status);
    setDesc(description);
    setObject(object);
    setShownPopup(true);
  };

  const handleByText = async () => {
    const object = text;
    setText("");
    if (text != "" && text != "Bananas") {
      const result = await fetch(
        `http://localhost:3000/object?object=${object}`
      );
      const text = await result.text();
      const parsed = JSON.parse(text);
      showPopup(parsed.safety, parsed.status, parsed.description, object);
    } else if (text == "Bananas") {
      const result = await fetch(`http://localhost:3000/test`);
      const text = await result.text();
      const parsed = JSON.parse(text);
      showPopup(parsed.safety, parsed.status, parsed.description, object);
      console.log(text);
    }
  };

  const submitImageForm = async () => {
    const input = document.getElementById("photoUpload") as HTMLInputElement;
    const formData = new FormData();
    if (input.files !== null) {
      formData.append("file", input.files[0]);
      const results = await fetch("http://localhost:3000/image", {
        method: "POST",
        body: formData,
      });
      const text = await results.text();
      const parsed = JSON.parse(text);
      showPopup(parsed.safety, parsed.status, parsed.description, "Photo");
    }
  };

  return (
    <>
      {shownPopup ? (
        <Popup
          hide={setShownPopup}
          object={object}
          safety={safety}
          type={type}
          desc={desc}
        />
      ) : (
        <></>
      )}
      <div
        id="landing"
        className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-gray-100 px-4 md:px-12 xl:px-40"
      >
        {/* <img src={Logo} alt="EcoSort Logo" className="h-52" /> */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="xs:text-6xl text-center text-5xl font-black lg:text-7xl"
        >
          Save the{" "}
          <i className="bg-gradient-to-tr from-green-400 to-blue-600 bg-clip-text not-italic text-transparent">
            environment
          </i>{" "}
          with a snap.
        </motion.h1>
        <div className="flex flex-col gap-2 text-white">
          <motion.span
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <form
              method="POST"
              action="http://localhost:3000/image"
              encType="multipart/form-data"
            >
              <motion.label
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-80 items-center justify-center rounded-lg bg-blue-700 shadow-sm duration-75 hover:bg-blue-600 sm:w-96"
              >
                Snap a picture
                <input
                  id="photoUpload"
                  type="file"
                  name="uploaded"
                  className="hidden"
                  accept="image/*"
                  onChange={() => submitImageForm()}
                />
              </motion.label>
            </form>
          </motion.span>
          <motion.div
            className="group flex h-12 w-80 items-center sm:w-96"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeInOut",
            }}
          >
            <input
              className="h-full flex-grow rounded-lg rounded-r-none border-2 border-solid border-blue-700 p-2 text-black shadow-inner duration-75 focus:outline-0 group-hover:border-blue-600"
              type="text"
              placeholder="Or use text. Try typing 'banana'"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => handleByText()}
              className="flex h-12 w-12 items-center justify-center rounded-r-lg bg-blue-700 duration-75 group-hover:bg-blue-600"
            >
              <i className="bi-search text-lg text-white" />
            </button>
          </motion.div>
          <motion.p
            className="text-center text-sm text-black/50"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: "easeInOut",
            }}
          >
            Check if an object belongs in the trash, recycling, or compost.
          </motion.p>
        </div>
      </div>
      <div id="about">
        <div className="flex flex-col gap-6 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-4xl font-black text-blue-900">About EcoSort</h1>
          <span className="flex items-center">
            <p className="lora pr-2 text-xl sm:pr-24 md:pr-56 xl:pr-96">
              EcoSort is a user-friendly, state-of-the-art, AI-powered web
              application which helps you{" "}
              <i className="font-black not-italic text-blue-800">
                sort your garbage
              </i>{" "}
              appropriately. The days of dumping everything into the garbage can
              are over. With EcoSort, a single click can tell you all the
              information you need to dispose of something correctly for the
              good of the environment.
            </p>
            <img src={Tree} />
          </span>
        </div>
        <div className="flex flex-col gap-6 px-4 md:px-20 lg:px-40 xl:px-56">
          <h3 className="italic text-black/25">
            Fun fact: Each ton (2,000 pounds) of recycled paper can save 17
            trees.
          </h3>
        </div>
        <div className="flex flex-col gap-6 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-right text-4xl font-black text-blue-900">
            Learn the Facts
          </h1>
          <span className="flex items-center">
            <img src={Heart} />
            <p className="lora pl-2 text-right text-xl sm:pl-24 md:pl-56 xl:pl-96">
              According to various professionals, only about 32 percent of
              recycling is actually recycled. When trash is incorrectly disposed
              of, it ends up{" "}
              <i className="font-black not-italic text-blue-800">
                polluting the Earth
              </i>
              , even if you had good intentions. So next time you dispose of
              trash, ask yourself if you're sure of where it goes. Chances are-
              you aren't.
            </p>
          </span>
        </div>
        <div className="flex flex-col gap-6 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-4xl font-black text-blue-900">How it Works</h1>
          <span className="flex items-center">
            <p className="lora pr-2 text-xl sm:pr-24 md:pr-56 xl:pr-96">
              Our app is completely powered by{" "}
              <i className="font-black not-italic text-blue-800">
                artificial intelligence
              </i>
              . When you take a picture, it is securely transferred to our
              servers where it is analyzed by AI. From here, our machines come
              up with correct information on disposal, safety, and more.
            </p>
            <img src={Bird} />
          </span>
        </div>
        <div className="flex flex-col gap-6 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-right text-4xl font-black text-blue-900">
            Our Mission
          </h1>
          <span className="flex items-center">
            <img src={Tree} />
            <p className="lora pl-2 text-right text-xl sm:pl-24 md:pl-56 xl:pl-96">
              One day, one of our team members was walking down the street. He
              noticed something flabbergasting. A Best Buy employee was dumping
              hundreds of broken phones into the landfill. This was insane. They
              should've properly disposed of their phones. Maybe they didn't
              how- but that's exaclty our mission. We want to make it so easy to
              put your trash in the right place that there will never be an
              issue again.
            </p>
          </span>
        </div>
        <div id="team"></div>
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
          <h1 className="text-center text-4xl font-black text-blue-900">
            Meet the Team
          </h1>
          <p className="lora text-center text-xl">
            EcoSoft is made by a four person team of passionate developers.
            Check us out!
          </p>
          <img className="h-auto w-96 pt-10" src={Group} alt="Team" />
          <p className="text-center text-sm">From left to right:</p>
          <ol className="lora rounded-md bg-gray-100 p-5 underline">
            <li>
              <a href="https://www.github.com/saiawe2021">
                Sai Srinivas Pasyavula
              </a>
            </li>
            <li>
              <a href="https://www.github.com/sebas101-1">Sebastien Kaku</a>
            </li>
            <li>
              <a href="https://www.github.com/arthurmatthew">Matthew Arthur</a>
            </li>
            <li>
              <a href="https://www.github.com/harry695">Harry Ouyang</a>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const Popup = ({
  hide,
  object,
  safety,
  type,
  desc,
}: {
  hide: React.Dispatch<React.SetStateAction<boolean>>;
  object: string;
  safety: number;
  type: string;
  desc: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => hide(false)}
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/25 p-4 lg:p-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="z-50 rounded-xl bg-white p-4 shadow-xl"
      >
        <span className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-black">{object}</h1>
          <i className="bi-x-cirlce" />
        </span>
        <h2>
          {type} - Safety Rating: {safety}/10
        </h2>
        <p className="font-extralight">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default Index;
