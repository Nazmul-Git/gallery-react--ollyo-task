/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img11 from '../images/image-11.jpeg';
import img1 from '../images/image-1.webp';
import img2 from '../images/image-2.webp';
import img3 from '../images/image-3.webp';
import img4 from '../images/image-4.webp';
import img5 from '../images/image-5.webp';
import img6 from '../images/image-6.webp';
import img7 from '../images/image-7.webp';
import img8 from '../images/image-8.webp';
import img9 from '../images/image-9.webp';
import img10 from '../images/image-10.jpeg'
import { DragDropContext } from 'react-beautiful-dnd';
import { FcGallery } from 'react-icons/fc';

import MyGallery from './MyGallery';


const Gallery = () => {
    const [imgArr, setImgArr] = useState([
        { id: '0', img: img11, check: false },
        { id: '1', img: img1, check: false },
        { id: '2', img: img2, check: false },
        { id: '3', img: img3, check: false },
        { id: '4', img: img4, check: false },
        { id: '5', img: img5, check: false },
        { id: '6', img: img6, check: false },
        { id: '7', img: img7, check: false },
        { id: '8', img: img8, check: false },
        { id: '9', img: img9, check: false },
        { id: '10', img: img10, check: false },

    ]);

    const [totalCheck, setTotalChecked] = useState(0);
    const [deleted, setDeleted] = useState(false);

    // collection of selected image
    const returnChecked = (id) => {
        const match = imgArr.find(img => img.id === id);

        if (!match.check) {
            match.check = true;
        } else if (match.check) {
            match.check = false;
        }

        const have = imgArr.filter(img => img.check === true);
        setTotalChecked(have.length);
    };

    // delete image
    const deleteChecked = () => {
        const rest = imgArr.filter(img => img.check !== true);
        setImgArr(rest);
        setDeleted(true);
        setTimeout(()=>{
            setDeleted(false);
            setTotalChecked(0);
        },2000);
    };

    // swapping algorithm
    const handleSwapping = (result) => {
        const { source, destination } = result;
        const copy = [...imgArr];
        const stored = copy[source.index];
        copy[source.index] = copy[destination.index];
        copy[destination.index] = stored;
        setImgArr(copy);
        // console.log(copy);
    }

    return (
        <DragDropContext onDragEnd={handleSwapping}>
            <section className=' shadow-md shadow-black m-4'>
                <div className='p-4'>
                    {
                        totalCheck === 0 ? <h3 className=' font-extrabold'>Gallery</h3> : <div className='flex justify-between m-4'>
                            <div className='font-extrabold'>
                                {
                                    deleted ? <p>{totalCheck} file deleted !</p> :
                                        <p>{totalCheck} file selected</p>
                                }
                            </div>
                            <button onClick={deleteChecked} className='text-red-500 font-extrabold underline'>Delete File</button>
                        </div>
                    }


                </div>
                <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    {
                        imgArr.map((img, idx) => <MyGallery key={img.id} index={idx} image={img}
                            returnChecked={returnChecked}
                        ></MyGallery>)
                    }
                    <div className=' rounded-md border-2 border-black border-dashed flex justify-center items-center sm:p-4 md:p-8 lg:p-12'>
                        <button className='font-bold text-lg'><FcGallery className='h-8 w-8 ml-7'></FcGallery>Add Image</button>
                    </div>

                </div>

            </section>
        </DragDropContext>
    );
};

export default Gallery;