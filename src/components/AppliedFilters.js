import React from 'react';
import '../styles/AppliedFilters.css';

const AppliedFilters = () => {
  const languageFilter = ['Telugu','English'];
  const genreFilter = ['Action','Horror'];
  return (
    <div className='applied-filters'>
        <div className='label'>Applied Filters: </div>
        <div className='list'>
          {languageFilter.map(filter => {
            return (
              <div key={filter} className='filter-item'>
                <span>{filter}</span>
                <span className='filter-cross'>&#x2715;</span>
              </div>
            )
          })}
          {genreFilter.map(filter => {
            return (
              <div key={filter} className='filter-item'>
                <span>{filter}</span>
                <span className='filter-cross'>&#x2715;</span>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default AppliedFilters