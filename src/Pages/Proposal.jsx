import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Proposal = () => {
    return (
        <div>
            <h1 className="heading">Governance Overview</h1>
            <div>
                <section className="text-black-600 body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/2">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Votes For= <span className="font-bold">1</span></h1>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">100%</h1>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/2">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden text-center relative">
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Votes Against= <span className="font-bold">0</span></h1>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">0%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="md:w-3/5 md:pl-6">
                        <table className=" bg-gray-100" style={{ width: '100%' }}>
                            <tr>
                                <th className="border text-left px-8 py-4">Address</th>
                                <th className="border text-left px-8 py-4">Vote</th>
                            </tr>
                            <tr>
                                <td className="border px-8 py-4">0x00756eb3f879cb30fe243b4dfee438691c043318585733ff6000526016600af3</td>
                                <td className="border px-8 py-4">Passed</td>
                            </tr>
                        </table>
                    </div>
                    <div className='ml-10' style={{ width: '400px' }}>
                        <div className="mb-2">
                            <div className="">
                                <div className="h-full bg-gray-100 bg-opacity-75 pt-8 rounded-lg overflow-hidden relative">
                                    <div className="container px-5">
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Cast Vote</h1>
                                        <div className="flex items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                                focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
                                                dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">For</label>
                                        </div>

                                        <div className="flex items-center mb-4">
                                            <input id="default-radio-1" type="radio" value="" name="default-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
                                                focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
                                                dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Against</label>
                                        </div>
                                        <div className="mb-4">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Proposal;