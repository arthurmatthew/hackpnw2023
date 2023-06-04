import { useState } from "react";
import Logo from "../assets/logo_with_text_transparant.png";

const Index = () => {
  const [shownPopup, setShownPopup] = useState(false);
  const [text, setText] = useState("");

  // Info about object
  const [object, setObject] = useState("");
  const [safety, setSafety] = useState(0);
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  const handleByText = async () => {
    const object = text;
    setText("");
    if (text != "") {
      const result = await fetch(
        `http://localhost:3000/object?object=${object}`
      );
      const text = await result.text();
      console.log(text);
      const parsed = JSON.parse(text);
      setSafety(parsed.safety);
      setType(parsed.status);
      setDesc(parsed.description);
      setObject(object);
      setShownPopup(true);
      console.log(text);
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
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-gray-50 px-4 md:px-12 xl:px-40">
        {/* <img src={Logo} alt="EcoSort Logo" className="h-52" /> */}
        <h1 className="text-center text-2xl font-black sm:text-4xl lg:text-7xl">
          Save the{" "}
          <i className="bg-gradient-to-tr from-green-400 to-green-600 bg-clip-text not-italic text-transparent">
            environment
          </i>{" "}
          with a scan.
        </h1>
        <div className="flex flex-col gap-2 text-white">
          <label className="flex h-12 w-80 items-center justify-center rounded-lg bg-black shadow-sm sm:w-96">
            Get a picture
            <input type="file" className="hidden" accept="image/*" />
          </label>
          <div className="flex h-12 w-80 items-center sm:w-96">
            <input
              className="h-full flex-grow rounded-lg rounded-r-none border-2 border-solid border-black p-2 text-black shadow-inner focus:outline-0"
              type="text"
              placeholder="Or use text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => handleByText()}
              className="flex h-12 w-12 items-center justify-center rounded-r-lg bg-black"
            >
              <i className="bi-search text-lg text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-4 py-12 md:px-20 lg:px-40 xl:px-56">
        <h1 className="text-4xl font-black">About EcoSort</h1>
        <p className="text-lg">
          EcoSort is a state of the art web application which helps you sort
          your garbage accordingly. EcoSort is powered by intensively trained
          artificial intelligence. The days of dumping everything into the
          garbage can are over. With EcoSort, a single click can tell you what
          kind of garbage you're dealing with and how to dispose of it
          correctly.
        </p>
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
    <div
      onClick={() => hide(false)}
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/25 p-4 lg:p-28"
    >
      <div className="rounded-xl border-2 border-solid border-green-800 bg-white p-4 shadow-xl">
        <span className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-black">{object}</h1>
          <i className="bi-x-cirlce" />
        </span>
        <h2>
          {type} - Safety Rating: {safety}/10
        </h2>
        <p className="font-extralight">{desc}</p>
      </div>
    </div>
  );
};

export default Index;
