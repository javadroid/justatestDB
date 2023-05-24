import React from 'react';
import Table from './Table';
import service from '../../assets/socials/Amazon.svg';

const Historiess = () => {
  const data = [
    {
      dateTime: '2023-05-01 10:30 AM',
      serviceImage: service,
      serviceName: 'Service 1',
      countryFlag: service,
      countryName: 'Country 1',
      phoneNumber: '1234567890',
    },
    {
      dateTime: '2023-05-01 10:30 AM',
      serviceImage: service,
      serviceName: 'Service 1',
      countryFlag: service,
      countryName: 'Country 1',
      phoneNumber: '1234567890',
    },
    {
      dateTime: '2023-05-01 10:30 AM',
      serviceImage: service,
      serviceName: 'Service 1',
      countryFlag: service,
      countryName: 'Country 1',
      phoneNumber: '1234567890',
    },
    // Add more data objects as needed
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default Historiess;
