import React from "react";
import './Modal.css';

export default function Modal({setOpenModal}){
    return(
        <div className='modalBackground'>
            <div className='modelContainer'>
                <div className='titleCloseBtn'>
                    <button
                    onClick={() => {
                        setOpenModal(false)
                    }}
                    >
                        X
                    </button>

                </div>
                <div className="title">
                    <h2>Are you sure you want to continue?</h2>
                </div>
                <div className="body">
                    <p>This page looks amazing!</p>

                </div>
                <div className="footer">
                    <button
                        onClick={() => {setOpenModal(false);
                        }}
                        id = 'cancelBtn'
                        >
                            Cancel
                    </button>
                    <button>Continue</button>

                </div>

            </div>
        </div>
    );
}