const Pagination = () => {
  return (
    <div id="pagination">
      <div className="flex flex-row gap-4 float-right my-20">
        <div className="flex justify-center items-center px-8  rounded-3 bg-orange-400 border-transparent text-white text-13 font-400 leading-25 cursor-pointer">
          15
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          30
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          50
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-transparent text-zinc-800 text-13 font-400 leading-25">
          per page
        </div>
      </div>
      <div className="flex flex-row gap-4 float-left my-20">
        <div className="flex justify-center items-center px-8  rounded-3 bg-orange-400 border-transparent text-white text-13 font-400 leading-25">
          1
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          2
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          3
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          4
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          5
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-transparent text-neutral-700 text-13 font-400 leading-25">
          ...
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          1565065
        </div>
        <div className="flex justify-center items-center px-8  rounded-3 bg-transparent border-gray-200 text-neutral-700 text-13 font-400 leading-25 hover:border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-neutral-900">
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
