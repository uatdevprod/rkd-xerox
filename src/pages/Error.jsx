import { useRouteError, useNavigate, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  // Log the error to a service like Sentry in production
  console.error(error);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-6 py-24 sm:py-32 lg:px-8 font-sans">
      <div className="text-center max-w-md">
        {/* Error Status Code */}
        <p className="text-base font-semibold text-indigo-600 sm:text-xl">
          {error?.status || "404"}
        </p>
        
        {/* Main Heading */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {error?.statusText || "Page not found"}
        </h1>
        
        {/* Friendly Message */}
        <p className="mt-6 text-base leading-7 text-slate-600">
          {error?.data?.message || "Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted."}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-4">
          {/* Go Back One Page */}
          <button
            onClick={() => navigate(-1)}
            className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition"
          >
            &larr; Go back
          </button>

          {/* Go to Homepage */}
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}