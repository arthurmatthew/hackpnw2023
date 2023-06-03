const Index = () => {
  return (
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
          />
          <button className="flex h-12 w-12 items-center justify-center rounded-r-lg bg-black">
            <i className="bi-search text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
