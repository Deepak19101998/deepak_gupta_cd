import React from 'react'
import "../App.css";

const Dropdown = ({setDropdownValue,dropdownValue}) => {
  return (
    <>
      <select className='selection-tag' id="components" value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
        <option value="">Select any option</option>
        <option value="Home">Home</option>
        <option value="Building">Building</option>
        <option value="Apartment">Apartment</option>
        <option value="Location">Location</option>
      </select>
    </>
  )
}

export default Dropdown
