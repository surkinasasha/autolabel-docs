// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/functional',
        'requirements/non-functional',
      ],
    },
    {
      type: 'category',
      label: 'База данных',
      items: [
        'db/data-model',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/api-reference',
        'api/error-codes',
      ],
    },
    {
      type: 'category',
      label: 'Дизайн',
      items: [
        'design/mockups',
      ],
    },
  ],
};

export default sidebars;