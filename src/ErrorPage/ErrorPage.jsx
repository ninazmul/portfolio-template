import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center p-20 space-y-4 flex flex-col items-center">
      <h1 className="text-9xl text-center font-bold text-shadow-2 text-blue-700 gradient-text ">
        Oops!
      </h1>
      <p className="w-1/2">
        The page you are looking for might have been removed, had it's name
        changed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="uppercase btn bg-blue-700 text-black rounded-full"
      >
        Go to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
