import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const ResultsList = ({ results , handleRemove , modalIsOpen ,handleModalOpen, handleModalClose, name, grade , unit , handleChange ,handleUpdate }) => {
    return (
        <div className="results-display">
            <h2>{results.length}-Results Found</h2>
            {results.map((result) => {
                return (
                    <ResultsDisplay 
                        name={name}
                        grade={grade}
                        unit={unit}
                        handleChange={handleChange}
                        result={result} 
                        key={result.id} 
                        handleRemove={handleRemove} 
                        modalIsOpen={modalIsOpen}
                        handleModalOpen={handleModalOpen}
                        handleModalClose={handleModalClose}
                        handleUpdate={handleUpdate}
                    />
                )
            
            })}
        </div>
    );
}

export default ResultsList;