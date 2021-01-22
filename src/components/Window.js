import { useState } from 'react'
import Modal from "react-modal"

Modal.setAppElement("#app")


const Window = ({ show, onClose, item }) => {
    const [titleText, setTitleText] = useState(item.title)
    const handleClick = () => {
        console.log("click");
    }
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassname={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%"}} onClick={handleClick}>{item.title}</h1>
                <button className={"close-btn"} onClick={onClose}>X</button>
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
