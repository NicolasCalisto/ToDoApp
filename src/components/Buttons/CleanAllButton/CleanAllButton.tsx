import React from "react";
import './CleanAllButton.css'

interface Props {
    onClick: () => void
}

export const ClearButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button className="btn-cleanAll" onClick={onClick}>
            Limpar Tudo
        </button>
    )

}