import React from 'react'
import myImg from './123.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (

        <>
            <footer className="p-4 bg-black  shadow md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={myImg} className="mr-3 h-24" alt="Dao Logo bg-green-600" />
                        <span className="self-center text-2xl font-semibold whitespace-nowra text-white">Decentralize Autonomus Organization</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-100 sm:mb-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-100 sm:text-center dark:text-gray-400">Â© 2022 <a href="#" className="hover:underline">Super Daoâ„¢</a>. All Rights Reserved.
                </span>
            </footer>
        </>


    )
}