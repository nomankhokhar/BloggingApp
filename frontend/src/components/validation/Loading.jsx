const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-16 w-16 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12a8 8 0 0114.36-4.36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-gray-600 mt-4">Loading... Please wait</p>
      </div>
    </div>
  );
};

export default Loading;
