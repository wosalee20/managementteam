import { Link } from "react-router-dom";

function Roles() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className=" transition duration-1000 lg:mr-[-1100px]">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold transition duration-1000">
            <Link to="#" className="text-blue-500 hover:text-blue-700">
              POPULAR ROLES PLAYED
            </Link>
          </h2>
          <p className="mt-4">
            This is the list of movies Jennifer Aniston
            <br /> is featured in.
          </p>
        </div>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-20 lg:mx-auto lg:ml-[-200px] lg:mt-[100px]">
        <div className="flex items-center justify-center">
          <Link
            to="https://en.wikipedia.org/wiki/Office_Space"
            className="inline-block"
          >
            <img
              src="https://jenniferaniston.website/wp-content/uploads/2023/12/IMG-20231214-WA0044-150x150.jpg"
              alt=""
              className="h-36 w-36 rounded-md object-cover hover:opacity-80"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="https://en.wikipedia.org/wiki/Mac_and_Me"
            className="inline-block"
          >
            <img
              src="https://jenniferaniston.website/wp-content/uploads/2023/12/IMG-20231214-WA0041-150x150.jpg"
              alt=""
              className="h-36 w-36 rounded-md object-cover hover:opacity-80"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="https://jenniferaniston.website/book-a-call/"
            className="inline-block"
          >
            <img
              src="https://jenniferaniston.website/wp-content/uploads/2023/12/IMG-20231214-WA0035-150x150.jpg"
              alt=""
              className="h-36 w-36 rounded-md object-cover hover:opacity-80"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="https://jenniferaniston.website/book-a-call/"
            className="inline-block"
          >
            <img
              src="https://jenniferaniston.website/wp-content/uploads/2023/12/IMG-20231214-WA0021-e1702617463756-150x150.jpg"
              alt=""
              className="h-36 w-36 rounded-md object-cover hover:opacity-80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Roles;
