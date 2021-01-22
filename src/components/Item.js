import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({ item, index, moveItem, status }) => {

    const [editStatus, setEditStatus] = useState(false)
    const [titleText, setTitleText] = useState(item.title)
    const handleClick = () => {
        setEditStatus(!editStatus)
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        setTitleText(e.target.value)
    }


    const ref = useRef(null);
console.log("item:", item);
    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ITEM_TYPE, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                <p className={"item-title"}>{item.title}</p>
                <p>{item.content}</p>
                <p className={"item-status"}>{item.icon}</p>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
                handleChange={handleChange}
                handleClick={handleClick}
                editStatus={editStatus}
            />
        </>
    );
};

export default Item;