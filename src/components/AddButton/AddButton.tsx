import React from "react";
import './AddButton.css'

interface Props {
    onClick: () => void
}

const AddButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button onClick={onClick} className='btn-add'>+</button>
    );

}

export default AddButton;