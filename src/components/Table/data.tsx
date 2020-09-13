import React from 'react';
import { FaCode } from 'react-icons/fa';

export const columns = [
  {
    title: 'Student ID',
    key: 'id',
  },
  {
    title: 'Student Name',
    key: 'name',
  },
  {
    title: 'Date Enrolled',
    key: 'dateEnrolled',
  },
  {
    title: '',
    key: 'icon',
  },
  {
    title: 'Course',
    key: 'course',
    render: ({ value }: any) => `${value}`,
  },
];

export const data = [
  {
    id: 2,
    name: 'Musli Ademi',
    course: 'Web Design',
    dateEnrolled: '2020/07/24',
    icon: <FaCode />,
  },
  {
    id: 8,
    name: 'Ivan Kitanovski',
    course: 'Advanced JavaScript',
    dateEnrolled: '2020/07/21',
    icon: <FaCode />,
  },
];

export const totalPages = Math.ceil(data.length / 5);
