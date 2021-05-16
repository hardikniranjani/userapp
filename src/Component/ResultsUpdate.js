import React from 'react';

const ResultsUpdate = ({ name, grade, unit, handleChange, handleUpdate, handleModalClose }) => {
    return (
        <div className="results-edit">
            <form className="ui-form" onSubmit={handleUpdate} autoComplete='off'>
                <h2>Update Entry</h2>
                <label>Name:</label>
                <input
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={handleChange}
                />
                <label>Unit:</label>
                <input
                    name="unit"
                    type="text"
                    required
                    placeholder="Unit"
                    value={unit}
                    onChange={handleChange}
                />
                <label>Grade:</label>
                <input
                    name="grade"
                    type="text"
                    required
                    placeholder="Grade"
                    value={grade}
                    onChange={handleChange}
                />
                <input type="submit" value="Update" />
            </form>
            <button className="close-btn" onClick={()=> handleModalClose()}>Close</button>
        </div>
    )
}

export default ResultsUpdate;