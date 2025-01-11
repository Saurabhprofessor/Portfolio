import React from 'react';

function About() {
    return (
        <div className="bg-gradient-to-b from-gray-100 to-blue-50 w-full h-auto py-10">
            {/* Header Section */}
            <div className="flex flex-col items-center mt-[3%]">
                <h1 className="text-xl text-zinc-500 font-medium">Get to know more</h1>
                <h1 className="text-3xl font-semibold text-gray-800">About Me</h1>
            </div>

            {/* Main Content */}
            <div className="w-full h-auto flex items-center justify-center mt-[5%]">
                {/* Image Section */}
                <div className="w-[25%] h-[70%] bg-blue-100 rounded-lg overflow-hidden shadow-lg">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="A creative workspace setup"
                    />
                </div>

                {/* Info Section */}
                <div className="w-[50%] h-auto flex flex-col ml-14">
                    <div className="w-[90%] flex m-10 gap-6">
                        {/* Experience Card */}
                        <div className="w-[50%] flex flex-col items-center border rounded-md p-5 hover:bg-blue-200 shadow-lg transition-all duration-300">
                            <h1 className="text-3xl font-semibold text-gray-800">Experience</h1>
                            <p className="mt-4 text-xl font-medium text-zinc-700">
                                1+ year Frontend Development
                            </p>
                            <p>But this is my first project.</p>
                        </div>

                        {/* Education Card */}
                        <div className="w-[50%] flex flex-col items-center border rounded-md p-5 hover:bg-blue-200 shadow-lg transition-all duration-300">
                            <h1 className="text-3xl font-semibold text-gray-800">Education</h1>
                            <p className="text-lg text-zinc-700 mt-4">10th Pass with 84%</p>
                            <p className="text-lg text-zinc-700">12th Pass with 86%</p>
                            <p className="text-lg text-zinc-700">B.Tech Degree</p>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="px-10">
                        <p className="text-zinc-900 leading-relaxed">
                            Highly skilled and detail-oriented web developer with one year of
                            experience creating and implementing innovative web solutions. Adept at
                            collaborating with clients to understand their needs and deliver high-quality, 
                            user-friendly websites. Throughout my engineering journey, I have been involved in 
                            small business activities like assignment writing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
