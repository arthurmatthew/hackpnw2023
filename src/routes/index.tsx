import { useState } from "react";

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
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 px-40">
        <h1 className="text-center text-7xl font-black">
          Save the{" "}
          <i className="bg-gradient-to-tr from-green-400 to-green-600 bg-clip-text not-italic text-transparent">
            environment
          </i>{" "}
          with a scan.
        </h1>
        <div className="flex flex-col gap-2 text-white">
          <button className="h-12 w-96 rounded-lg bg-black shadow-sm">
            Get a picture
          </button>
          <div className="flex h-12 w-96 items-center">
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
      className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/25 p-28"
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
