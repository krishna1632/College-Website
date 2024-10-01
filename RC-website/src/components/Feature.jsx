import React from 'react';

const features = [
  { id: 'detail1', title: 'Attendance Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.' },
  { id: 'detail2', title: 'Visitor Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.', className: 'bg-[#6A9CE8] bg-opacity-55' },
  { id: 'detail3', title: 'Vendor Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.' },
  { id: 'detail4', title: 'Scrap Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.' },
  { id: 'detail5', title: 'Vehicle Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.' },
  { id: 'detail6', title: 'Account Management', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.' },
];

const FeaturesDetails = () => {
  return (
    <div className="FeaturesDetails">
      {features.map(({ id, title, description, className }) => (
        <div className={`detail ${className || ''}`} key={id} id={id}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDetails;
