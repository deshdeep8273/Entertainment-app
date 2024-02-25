function Description() {
  return (
    <div className="flex">
      {/* Left Side (30%) */}
      <div className="w-30 h-screen bg-gray-800 text-white p-8 relative">
        {/* Movie Image */}
        <img
          src="https://placekitten.com/400/600" // Replace with your movie image source
          alt="Movie Poster"
          className="w-full h-full object-cover rounded-md"
        />
        {/* Movie Title */}
        <h1 className="absolute bottom-0 left-0 mb-4 ml-4 text-2xl font-bold">
          Movie Title
        </h1>
      </div>

      {/* Right Side (70%) */}
      <div className="w-70 p-8">
        {/* Movie Title */}
        <h1 className="text-3xl font-bold mb-4">Movie Title</h1>

        {/* Star Rating */}
        {/* <div className="flex mb-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className={`text-2xl ${
                index < Math.floor(imdbRating)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
          {/* Display decimal part as a half star if applicable */}
        {/*{imdbRating % 1 !== 0 && (
            <span className="text-yellow-500 text-2xl">★</span>
          )}
        </div> */}

        {/* Movie Details (Length, Language, Year, Status) */}
        <div className="flex mb-4">
          <p className="mr-4">Length: 2h 30min</p>
          <p className="mr-4">Language: English</p>
          <p className="mr-4">Year: 2023</p>
          <p>Status: Released</p>
        </div>

        {/* Synopsis */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Synopsis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cast */}
        <div>
          <h2 className="text-xl font-bold mb-2">Cast</h2>
          <ul>
            <li>Actor 1</li>
            <li>Actor 2</li>
            <li>Actor 3</li>
            {/* Add more cast members as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Description;
