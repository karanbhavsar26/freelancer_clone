// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="flex items-start justify-center min-h-screen bg-white">

            <div className="w-[420px] m-10 shadow-md">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-10 pt-12 pb-8 "
                >
                    <div className='flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="72.449" viewBox="0 0 300 72.449" class="flicon-logo-fullcolor"><title>Freelancer Logo</title><g fill="#29B2FE"><path d="M56.897 0l6.624 9.29L97.036 0M22.075 72.333l18.13-17.725-10.912-11.71M54.152 0l-9.69 8.738 16.298.608M16.482 0l3.48 7.133 19.18 1.195M26.75 36.986l14.17-26.434L-.23 8.328M28.4 38.662L41.785 53.04 56.55 38.567l4.582-26.957-17.993-.918" /></g><path fill="#161F2B" d="M85.22 33.902h-3.67l-3.214 20.286c-.084.532-.587.966-1.12.966h-7.34c-.532 0-.897-.434-.813-.966l4.506-28.45c1.14-7.195 4.772-8.79 9.747-8.79 1.545 0 3.164.146 4.43.387.564.097.945.435.86.966l-.727 4.59c-.084.53-.58.917-1.16.917h-2.027c-1.207 0-1.622.482-1.85 1.932l-.207 1.303h3.67c.532 0 .897.434.813.967l-.78 4.926c-.086.532-.59.966-1.12.966zM103.54 34.24h-.675c-2.077 0-4.103.29-5.73 1.11l-2.968 18.74c-.084.533-.555 1.063-1.135 1.063h-7.244c-.58 0-.978-.53-.894-1.062l4.13-26.08c.085-.533.443-.968 1.12-.968h6.954c.676 0 .928.242.813.967l-.183 1.158c2.533-2.27 4.31-2.512 6.87-2.512.82 0 .934.193.812.967l-.934 5.892c-.09.58-.307.725-.935.725zM127.806 43.707h-15.02l-.014.096c-.406 2.56.405 4.153 3.93 4.153 2.56 0 7.33-.24 9.237-.387.78-.05 1.046.095.93.82l-.687 4.348c-.122.773-.37 1.11-1.18 1.353-3.252 1.016-6.66 1.498-10.717 1.498-6.52 0-12.013-3.43-10.552-12.654l.505-3.188c1.345-8.5 7.005-13.137 14.926-13.137 8.452 0 11.514 5.36 10.283 13.136l-.46 2.9c-.1.626-.605 1.06-1.184 1.06zm-7.038-5.265c.46-2.898-.425-4.637-2.84-4.637-2.318 0-3.848 1.74-4.307 4.637l-.022.145h7.147l.023-.145zM154.538 43.707h-15.02l-.014.096c-.406 2.56.405 4.153 3.93 4.153 2.56 0 7.33-.24 9.237-.387.78-.05 1.048.095.933.82l-.688 4.348c-.122.773-.37 1.11-1.18 1.353-3.252 1.016-6.66 1.498-10.717 1.498-6.52 0-12.013-3.43-10.552-12.654l.505-3.188c1.347-8.5 7.007-13.137 14.928-13.137 8.452 0 11.514 5.36 10.283 13.136l-.458 2.9c-.1.626-.605 1.06-1.184 1.06zm-7.04-5.265c.46-2.898-.424-4.637-2.838-4.637-2.318 0-3.85 1.74-4.308 4.637l-.023.145h7.146l.023-.145zM164.34 55.154h-7.292c-.532 0-.978-.53-.894-1.062l5.592-35.308c.084-.53.684-.965 1.215-.965h7.293c.532 0 .897.433.813.964l-5.592 35.308c-.084.53-.603 1.062-1.134 1.062zM190.007 55.154h-6.713c-.53 0-.897-.434-.813-.966l.162-1.014c-2.05 1.352-4.632 2.414-7.288 2.414-3.815 0-7.922-2.125-6.89-8.645l.092-.58c.918-5.796 5.642-7.873 13.707-7.873h2.077l.222-1.4c.375-2.366-.33-2.8-2.744-2.8-2.705 0-7.09.24-8.458.338-.828.048-1-.387-.91-.967l.743-4.684c.115-.724.54-.965 1.15-1.16 1.67-.482 5.93-1.16 9.022-1.16 7.003 0 11.724 2.513 10.47 10.434l-2.708 17.098c-.085.532-.59.966-1.12.966zm-6.173-11.64h-2.366c-2.415 0-3.503.773-3.824 2.8l-.077.484c-.26 1.643.774 2.126 2.126 2.126 1.16 0 2.517-.34 3.4-.724l.74-4.686zM217.898 55.154h-7.244c-.58 0-.978-.53-.894-1.062l2.593-16.374c.405-2.56-.285-3.38-2.46-3.38-1.11 0-2.58.433-3.782 1.014l-2.967 18.74c-.084.532-.555 1.062-1.135 1.062h-7.244c-.58 0-.978-.53-.894-1.062L198 28.01c.085-.532.588-.967 1.12-.967h6.713c.532 0 .897.434.813.967l-.176 1.11c2.865-1.932 5.654-2.464 8.36-2.464 7.58 0 7.706 5.313 6.796 11.06l-2.593 16.375c-.085.533-.556 1.064-1.135 1.064zM239.323 54.816c-1.703.386-3.89.772-6.738.772-7.39 0-10.793-4.733-9.538-12.654l.574-3.622c1.248-7.873 6.166-12.703 13.555-12.703 2.85 0 5.195.433 6.494.77.604.146.904.388.804 1.016l-.864 5.458c-.092.58-.45 1.014-1.16.917-1.62-.143-3.134-.337-5.5-.337-2.076 0-3.49 1.305-4.056 4.88l-.574 3.62c-.566 3.575.443 4.83 2.52 4.83 2.365 0 3.926-.096 5.6-.29.74-.095.968.29.87.918l-.858 5.41c-.1.63-.477.87-1.13 1.016zM267.67 43.707h-15.02l-.015.096c-.406 2.56.405 4.153 3.93 4.153 2.56 0 7.33-.24 9.237-.387.78-.05 1.047.095.933.82l-.69 4.348c-.12.773-.368 1.11-1.18 1.353-3.25 1.016-6.66 1.498-10.716 1.498-6.52 0-12.014-3.43-10.553-12.654l.505-3.188c1.346-8.5 7.006-13.137 14.927-13.137 8.45 0 11.514 5.36 10.282 13.136l-.46 2.9c-.1.626-.604 1.06-1.183 1.06zm-7.04-5.265c.46-2.898-.424-4.637-2.84-4.637-2.317 0-3.848 1.74-4.307 4.637l-.023.145h7.147l.023-.145zM282.857 27.043l-4.3 27.048c-.084.533-.555 1.063-1.135 1.063h-7.244c-.58 0-.978-.53-.894-1.062l2.854-17.894 10.72-9.153z" /><path fill="#29B2FE" d="M285.326 27.043l-1.484 9.28 15.93-9.28" /></svg>
                    </div>
                    <div className="mb-4 flex flex-col gap-6 mt-2">
                        <div className='mb-4 flex items-center justify-center font-semibold text-black text-xl'>
                            Welcome back
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className=" flex items-center border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-200 focus:shadow-outline "
                            >
                                <FaGoogle color='red' />
                                <div className='w-[90%] font-semibold flex justify-center items-center'>Continue with Google</div>
                            </div>
                            <div className=" flex items-center border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-200 focus:shadow-outline "
                            >
                                <FaFacebook color='blue' />
                                <div className='w-[90%] font-semibold flex justify-center items-center'>Continue with Facebook</div>
                            </div>
                        </div>
                        <div className='flex items-center w-full justify-between font-semibold'>
                            <div className='border-[0.1px] border-gray-300 w-[40%]'></div>
                            <div>OR</div>
                            <div className='border-[0.1px] border-gray-300 w-[40%]'></div>

                        </div>
                       
                    </div>
                    <div className="mb-6 flex flex-col gap-8">
                    <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:border-blue-200 focus:shadow-outline "
                            placeholder="Email or Username"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded w-full py-3 px-6 text-gray-700 leading-tight focus:border-blue-200 focus:shadow-outline "
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6 mt-6">
                        <label className="block text-gray-700 text-md font-bold">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="mr-2 leading-9"
                            />
                            Remember Me
                        </label>
                        <a
                            href="#"
                            className="inline-block align-baseline text-md text-blue-500 hover:text-blue-800"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                    </div>
                    <div className='flex items-center w-full justify-between font-semibold mt-10'>
                        <div className='border-[0.1px] border-gray-300 w-[100%]'></div>

                    </div>
                    <div className='flex items-center justify-center mt-4'>
                        Don't have an account?  <span className='text-blue-500'> Sign up</span>
                    </div>
                    <div className='flex justify-center gap-4 mt-8'>
                        <img clasName='w-8' style={{height:"40px"}} src='./Available_on_the_App_Store_(black)_SVG.svg.png'/>
                        <img clasName='w-8' style={{height:"40px"}} src='./Google_Play_Store_badge_EN.svg.png'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
