import { Link } from "react-router-dom";

export default function NotFound() {
  return(
    <>
        <div className="flex flex-col h-screen w-full justify-center items-center">
            <h1 className="text-center text-5xl font-black">404</h1>
            <p className="text-center text-3xl font-bold">Error. Page not found.</p>
            <Link className="mt-4 border rounded p-2 hover:bg-gray-200" to="/">Return to Homepage</Link>
        </div>
    </>
  )
}
