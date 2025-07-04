import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-green-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto">
        Unlock your potential with courses crafted to
        <span className="text-cyan-600"> shape your success.</span>
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        Learn from industry experts, engage with dynamic content, and join a thriving community committed to your growth—both personally and professionally.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        We bring together world-class instructors to help you achieve your professional goals.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
          <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md transition">
            Get Started
          </button>
          <button className="px-8 py-3 bg-blue-500 border-4 border-white text-white rounded-full hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
      </div>
      <SearchBar />
    </div>
  );
};

export default Hero;
