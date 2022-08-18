const options = [
  'energiaCadastrados',
  'energiaNaoCadastrados',
  'energiaWpp',
  'revendaAviacao',
  'revendaVip',
  'revendaCombustiveis',
  'revendaShellbox',
  'revendaEngenharia',
  'revendaVoceconquista'
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