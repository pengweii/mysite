// module.exports = {
//   docs: {
//     Docusaurus: ["doc1", "doc2"],
//     Vue: ["Vue/vue_cli"],
//     Features: ["mdx"],
//   },
//   test: {
//     Markdown语法: ["mdx"]
//   }
// };
// 
module.exports = {
  docs2: [
    {
      type: 'category',
      label: 'Docusaurus',
      items: ["doc1", "doc2"],
    },
    {
      type: 'category',
      label: 'Vue',
      items: ["Vue/vue_cli", "doc3"]
    },
    {
      type: 'category',
      label: 'Features',
      items: ["mdx"]
    },
    "doc1"
  ],
  test: [
    'doc1'
  ]
};