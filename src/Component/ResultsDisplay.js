import React from "react";
import Modal from "react-modal";
import ResultsUpdate from "./ResultsUpdate";

Modal.setAppElement("#root")

const ResultsDisplay = ({ result, handleRemove, modalIsOpen, handleModalOpen, handleModalClose, name, grade, unit, handleChange,handleUpdate }) => {
    return (
        <div className="allProperties">
            <span className="display">Name: {result.name}</span>
            <span className="display">Unit: {result.unit}</span>
            <span className="display">Grade: {result.grade}</span>
            <button className="remove-btn" onClick={() => handleRemove(result.id)}>Remove</button>
            <button className="edit-btn" onClick={() => handleModalOpen(result.id)}>Update</button>
            <hr />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => handleModalClose()}
                style={{
                    overlay: {
                        backgroundColor: "rgba(119,119,119,0.2)"
                    },
                    content: {
                        display: "flex",
                        justyfiContent: "center",
                        alignItems: "center",

                    },
                }}
            >
                <ResultsUpdate
                    name={name}
                    grade={grade}
                    unit={unit}
                    handleChange={handleChange}
                    handleModalClose={handleModalClose}
                    handleUpdate={handleUpdate}
                />
            </Modal>
        </div>
    );
};

export default ResultsDisplay;