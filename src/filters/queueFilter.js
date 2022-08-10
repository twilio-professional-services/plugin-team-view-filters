const options = [
  'energiaWpp',
  'energiaCadastrados',
  'energiaNaoCadastrados'
];

export const queueFilter = () => ({
  id: 'data.attributes.routing.skills',
  title: 'Queues',
  fieldName: 'queues',
  type: 'multiValue',
  options: options.sort().map(value => ({
    value,
    label: value,
    default: false
  })),
  condition: 'IN'
});
