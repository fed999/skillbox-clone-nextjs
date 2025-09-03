import React from 'react';
import SinglePopupButton from '../pages/SinglePopupButton';
import './PopupButton.css';

const PopupButton = () => {
  const buttonsData = [
  { id: 1, label: 'Виджет 1', title: 'Первый виджет' },
  { id: 2, label: 'Виджет 2', title: 'Второй виджет' },
  { id: 3, label: 'Виджет 3', title: 'Третий виджет' },
  { id: 4, label: 'Виджет 4', title: 'Четвертый виджет' }
  ];

  return (
    <div className="buttons-container">
      {buttonsData.map(button => (
        <SinglePopupButton
          key={button.id}
          buttonId={button.id}
          label={button.label}
          title={button.title}
          scriptId={button.scriptId}
          scriptSrc={button.scriptSrc}
        />
      ))}
    </div>
  );
};

export default PopupButton;