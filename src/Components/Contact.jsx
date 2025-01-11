import React from 'react'

function Contact() {
    return (
        <>
            <div className="w-full mt-10 flex flex-col items-center ">
                <div className="text-center mb-8">
                    <h1 className="text-lg text-zinc-500 font-medium">Get In Touch</h1>
                    <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
                </div>

                <div className='flex p-2 m-auto gap-5'>
                    <div className='flex bg-blue-200 rounded-md'>
                        <a href="https://github.com/Saurabhprofessor" target="_blank" rel="noopener noreferrer">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </div>
                        </a>
                        <a className='bg-blue-200 mt-2 p-1' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">saurabhmulik19@gmail.com</a>
                    </div>

                    <div className='flex bg-blue-200 rounded-md'>
                        <a href="https://github.com/Saurabhprofessor" target="_blank" rel="noopener noreferrer">
                            <div className="w-12 h-12 flex justify-center items-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
                                    <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
                                </svg>
                            </div>
                        </a>
                        <a className='mt-2 p-1' href="tel:+917517203661">+91 7517203661</a>
                    </div>
                </div>

                <div className='w-full h-52 mt-10 bg-zinc-600 flex items-center justify-center'>
                    <p className='text-white'>© 2025 Saurabh Mulik. All rights reserved and ready for work with you.</p>
                </div>
            </div>
        </>
    )
}

export default Contact
