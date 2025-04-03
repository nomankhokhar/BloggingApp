const NoData = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-500">
          No Data Available
        </h2>
        <p className="text-gray-600 mt-4">
          There is no data to display at the moment. Please check back later.
        </p>
      </div>
    </div>
  );
};

export default NoData;
