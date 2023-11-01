/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const MyGallery = ({ image, returnChecked, index }) => {
    const [haveClass, setHaveClass] = useState(true);
    const { id, img } = image;

    // Manage visibility of checkbox
    const handleMark = () => {
        setHaveClass(!haveClass);
    };

    // checkbox provide a id & pass this id with props function parameter
    const handleChecked = (id) => {
        returnChecked(id);
    };

    return (
        <Droppable droppableId={index + ''}>
            {
                (provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className={`${index === 0 ? 'col-span-2 row-span-2' : 'w-full h-auto'} shadow-sm shadow-black relative `} >
                        <input onClick={() => handleChecked(id)} type="checkbox" className={`${haveClass ? 'hidden' : ''} absolute m-4 h-6 w-6`} />

                            <Draggable draggableId={id} index={index}>
                                {
                                    (drag) => (
                                        <div {...drag.draggableProps} {...drag.dragHandleProps} ref={drag.innerRef}>
                                            <img onMouseOver={handleMark} src={img}
                                            className=''>
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