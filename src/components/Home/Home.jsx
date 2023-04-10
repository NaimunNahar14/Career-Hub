import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobList from '../JobList';
import Card from '../Card';

const Home = () => {
    const cards = useLoaderData();
    const [Lists, setLists] = useState([]);
    useEffect(() => {
        fetch("list.json")
            .then((res) => res.json())
            .then((data) => setLists(data));
    }, []);


    return (
        <section>
            <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
                {/* Text Content */}
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            One Step <br className='hidden md:block' /> Closer To Your{' '}
                            <br />
                            <span className='inline-block text-blue-400'>Dream Job</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:flex-row'>
                        <button className='bg-blue-400'>
                            <div className='inline-flex items-center justify-center w-full h-full'>
                                <p className='text-white mr-3'>Get Started</p>
                            </div>
                        </button>

                    </div>
                </div>
                <div className='w-2/4'>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
            <div className='mt-4 flex flex-col items-center  md:flex-row'>
                <div className='inline-flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='mb-8'>Job Category List</h1>
                    <p className='mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div>
                        <div className=' grid grid-cols-4 justify-items-center mb-4'>
                            {
                                Lists.map((List) => (
                                    <JobList
                                        List={List}
                                    ></JobList>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='mt-4 flex flex-col items-center  md:flex-row'>
                <div className='inline-flex flex-col items-center justify-center w-full h-full'>
                    <h1>Featured Jobs</h1>
                    <p className='mt-2 mb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    <div>
                        {
                            cards.map(card =>
                                <Card
                                key={card.id}
                                card={card}
                                
                                ></Card>
                                
                                )
                        }
                    </div>
                    


                </div>
            </div>
        </section>



    );
};

export default Home;