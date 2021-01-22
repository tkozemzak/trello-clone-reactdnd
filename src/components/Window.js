import { useState } from 'react'
import Modal from "react-modal"

Modal.setAppElement("#app")


const Window = ({ show, onClose, item, handleChange, handleClick, editStatus }) => {
    console.log(editStatus);
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassname={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                { !editStatus ?
                <h1 style={{ flex: "1 90%"}} onClick={handleClick}>{item.title}</h1>
                : 
                <div>
                    <input type="text" placeholder={item.title} onChange={(e) => handleChange(e)}/> 
                    <button className={"close-btn"} onClick={handleClick}>✔️</button>
                </div>
                }
                <button className={"close-btn"} onClick={onClose}>❌</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>{item.icon} {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}</p>
            </div>
        </Modal>
    )
}

export default Window
