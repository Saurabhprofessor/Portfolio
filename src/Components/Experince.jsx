import React from 'react';

function Experience() {
  return (
    <div className="flex flex-col items-center mt-[10%] w-full h-screen bg-gradient-to-b from-gray-100 to-blue-100">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-lg text-zinc-500 font-medium">Explore my</h1>
        <h1 className="text-4xl font-bold text-gray-800">Experience</h1>
      </div>

      {/* Experience Section */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 rounded-lg shadow-lg mt-10 bg-white">
        {/* Frontend Development Card */}
        <div className="rounded-lg shadow-md p-6 bg-gradient-to-br from-blue-50 to-blue-100">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Frontend Development
          </h1>
          <ul className="text-gray-700">
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- JavaScript</li>
            <li>- React.js</li>
            <li>- Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend Development Card */}
        <div className="rounded-lg shadow-md p-6 bg-gradient-to-br from-green-50 to-green-100">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Backend Development
          </h1>
          <ul className="text-gray-700">
            <li>- MySQL</li>
            <li>- MongoDB</li>
          </ul>
        </div>

        {/* Programming Language Card */}
        <div className="rounded-lg shadow-md p-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Programming Language
          </h1>
          <ul className="text-gray-700">
            <li>- Java</li>
          </ul>
        </div>

        {/* Tools Card */}
        <div className="rounded-lg shadow-md p-6 bg-gradient-to-br from-purple-50 to-purple-100">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Tools</h1>
          <ul className="text-gray-700">
            <li>- VS Code</li>
            <li>- Git</li>
            <li>- GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
