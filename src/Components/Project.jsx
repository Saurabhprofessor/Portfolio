import React from 'react'
import Card from './Card';

function Project() {
    let data = [
        {image: 'Hospital_Img.jpg', title: 'Child Vaccination Management', Discriiption: "A vaccination management project streamlining vaccine searches and hospital responses, ensuring efficient scheduling and improved accessibility for users."},
        {image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Weather Detection', Discriiption: "A weather detection project offering real-time updates on temperature, humidity, and conditions, ensuring accurate and user-friendly forecasts."},
        {image: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Speech Recognizer', Discriiption: "A speech recognizer project converting text into speech with multiple voice accents, enhancing accessibility and user customization for diverse needs."},
        {image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Music Application', Discriiption: "A web application that lets users listen to songs, stream music, and enjoy seamless playback with personalized recommendations."},
    ]
    
    return (
        <>
            <div className="bg-gradient-to-b from-gray-50 to-blue-100 w-full py-10">
                <div className="text-center mb-8">
                    <h1 className="text-lg text-zinc-500 font-medium">My Recent</h1>
                    <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
                </div>
                <div className='w-full flex justify-center'>
                    <div className="flex flex-wrap gap-4 justify-center mx-auto">
                        {data.map((ele, index) => (
                            <Card ele={ele} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
