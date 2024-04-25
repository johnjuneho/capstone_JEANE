import React from 'react';

export default function EndScreen({ lessonTitle, message }) {
  return (
    <div>
      <h2>{lessonTitle}</h2>
      <p>{message}</p>
    </div>
  );
}
