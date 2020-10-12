import React from 'react';

import { MultiSelectFilter, MultiSelectFilterLabel } from '../components/MultiSelectFilter';

const departments = [
  'General Management',
  'Marketing',
  'Operations',
  'Finance',
  'Sales',
  'Human Resources',
  'Purchasing',
  'Customer Service',
  'Recruiting'
];

export const departmentFilter = () => ({
  id: 'data.attributes.department',
  title: 'Departments',
  fieldName: 'departments',
  options: departments.sort().map(value => ({
    value,
    label: value
  })),
  customStructure: {
    field: <MultiSelectFilter />,
    label: <MultiSelectFilterLabel />
  },
  condition: 'IN'
});
