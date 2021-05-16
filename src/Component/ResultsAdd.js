import React from 'react';

const ResultsAdd = ({ name, grade, unit, handleChange, handlePost }) => {
    return (
        <div className="results-add">
            <form className="ui-form" onSubmit={handlePost} autoComplete ='off'>
                <h2>New Entry</h2>
                <label>Name:</label>
                <input
                    autoFocus
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
                <input type="submit" />

            </form>
        </div>
    )
}

export default ResultsAdd;