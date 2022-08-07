import React from 'react';
import deleteIcon from '../../Assets/Delete.png';
import './Note.css';

let timer = 500,
  timeout;
const Note = (props) => {
  const formatDate = (time) => {
    if (!time) return '';
    const timeObj = new Date(time); // numeric val -> Date object
    const monthList = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    let hrs = timeObj.getHours();
    let ampm = hrs > 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // 0 -> 12 (0 is false)

    let mins = timeObj.getMinutes();
    mins = mins < 10 ? '0' + mins : mins;

    let day = timeObj.getDate();

    const month = monthList[timeObj.getMonth()];

    let year = timeObj.getFullYear();

    return `${hrs}:${mins} ${ampm} ${month} ${day} ${year}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timeout);
  };

  // updateText wrapped to debounce
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea
        className='note-text'
        defaultValue={props.note.text}
        onChange={(event) => {
          updateText(event.target.value, props.note.id);
        }}
      />
      <div className='note-footer'>
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt='DELETE'
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
