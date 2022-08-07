import React, { useState } from 'react';
import addIcon from '../../Assets/AddNote.png';
import './Sidebar.css';
const Sidebar = (props) => {
  const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91'];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className='sidebar'>
      <img
        src={addIcon}
        alt='ADD NOTE'
        onClick={() => setListOpen(!listOpen)}
      />
      <ul className={`sidebar-list ${listOpen ? 'sidebar-list-active' : ''}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className='sidebar-list-item'
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
