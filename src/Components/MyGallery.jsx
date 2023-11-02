/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const MyGallery = ({ image, returnChecked, index }) => {
    const [mark, setMart] = useState(false);
    const { id, img } = image;

    // Manage visibility of checkbox
    const handleMark = () => {
        setMart(true)
    };

    // checkbox provide a id & pass this id by props function parameter
    const handleChecked = (id) => {
        returnChecked(id);
        
    };

    return (
        <Droppable droppableId={index + ''}>
            {
                (provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className={`${index === 0 ? 'lg:col-span-2 row-span-2 md:col-span-2' : 'w-full h-auto'} rounded-md shadow-sm shadow-black relative  `} >
                        { mark &&
                            <input onClick={() => handleChecked(id)} type="checkbox" className='absolute m-4 h-6 w-6' />  
                        }
                            <Draggable draggableId={id} index={index}>
                                {
                                    (drag) => (
                                        <div {...drag.draggableProps} {...drag.dragHandleProps} ref={drag.innerRef}>
                                            <img 
                                            onMouseOver={handleMark}
                                            onTouchStart={handleMark}
                                            src={img}
                                            className={`${mark?'p-4':''} rounded-md`}
                                            >
                                            </img>
                                        </div>
                                    )
                                }
                            </Draggable>        
                    </div>)
            }
        </Droppable>
    );
};

export default MyGallery;