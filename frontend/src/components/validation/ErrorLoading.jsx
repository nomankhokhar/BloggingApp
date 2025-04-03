const ErrorLoading = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-red-600">Error Loading</h2>
        <p className="text-gray-600 mt-4">
          Something went wrong while loading the data. Please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorLoading;
