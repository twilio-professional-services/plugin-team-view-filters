import React from 'react';

import { MultiSelectFilter, MultiSelectFilterLabel } from '../components/MultiSelectFilter';

const teams = [
  'Blue Team',
  'Twilio',
  'Gold Team',
  'VIP Team',
  'Orange Team',
  'Yellow Team',
  'Green Team',
  'Purple Team',
  'Gray Team'
];

export const teamFilter = () => ({
  id: 'data.attributes.team_name',
  title: 'Teams',
  fieldName: 'teams',
  options: teams.sort().map(value => ({
    value,
    label: value
  })),
  customStructure: {
    field: <MultiSelectFilter />,
    label: <MultiSelectFilterLabel />
  },
  condition: 'IN'
});
