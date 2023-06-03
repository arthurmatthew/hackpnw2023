const Index = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 px-40">
      <h1 className="text-center text-7xl font-black">
        Save the{" "}
        <i className="bg-gradient-to-tr from-green-400 to-blue-600 bg-clip-text not-italic text-transparent">
          environment
        </i>{" "}
        with a scan.
      </h1>
      <div className="flex flex-col gap-2">
        <button className="h-12 w-96 rounded-lg bg-green-400 shadow-sm">
          Scan your object
        </button>
        <input
          className="h-12 w-96 rounded-lg border-2 border-solid border-green-400 p-2 shadow-inner"
          type="text"
          placeholder="Or use text"
        />
      </div>
    </div>
  );
};

export default Index;
