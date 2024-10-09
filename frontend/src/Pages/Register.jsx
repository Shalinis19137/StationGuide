import React, { useState, useEffect } from 'react';
import logo from '../assets/stationsaarthi.svg';
import { useNavigate } from 'react-router-dom';
import backicon from '../assets/svg/backicon.svg';

const Register = () => {
    const navigate = useNavigate();

    const LoginClick = () => {
        navigate('/Login');
    };
    const HomeClick = () => {
        navigate('/');
    };

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState(''); // State for confirmation message

    const handleRegister = (e) => {
        e.preventDefault();
        // Perform registration logic here (e.g., API call)

        // Set confirmation message
        setConfirmationMessage("Your account is created successfully. Please login to access the website.");
        
        // Clear form fields
        setName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
    };

    // Use effect to clear the confirmation message after 3 seconds
    useEffect(() => {
        if (confirmationMessage) {
            const timer = setTimeout(() => setConfirmationMessage(''), 3000);
            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [confirmationMessage]);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-blue-100 to-blue-5000 relative">
                {/* Top Positioned Translucent Confirmation Message */}
                {confirmationMessage && (
                    <div className="fixed top-0 left-0 w-full p-3 text-center text-white bg-green-600 bg-opacity-80">
                        {confirmationMessage}
                    </div>
                )}
                
                <div>
                    <button onClick={HomeClick}>
                        <img src={backicon} alt="" className='fixed left-[1vh] h-[9vh] w-auto' />
                    </button>
                </div>
                <div className="mb-6 text-center">
                    <img src={logo} alt="Station Saarthi Logo" className="w-20 mx-auto mb-2 h-22" />
                    <h1 className="text-2xl font-bold text-gray-800">Station Saarthi</h1>
                    <p className="mt-1 text-sm text-gray-700">Your Trusted Platform Guide</p>
                </div>

                <form onSubmit={handleRegister} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                    <h2 className="py-1 mb-4 text-xl font-bold text-center bg-blue-100 border border-blue-300 shadow-sm rounded-3xl">
                        Register
                    </h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-semibold text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            pattern="\d{10}"
                            maxLength="10"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {phoneNumber && phoneNumber.length !== 10 && (
                            <p className="text-sm text-red-500">Please enter a valid 10-digit phone number.</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-1 font-medium text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-sm font-semibold text-white transition duration-200 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-4 text-sm text-gray-700">
                    Already have an account?{' '}
                    <button
                        onClick={LoginClick}
                        className="text-blue-500 underline cursor-pointer"
                    > Login</button>
                </p>
            </div>
        </>
    );
};

export default Register;
