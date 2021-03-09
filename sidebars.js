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
  docs: [
    {
      type: "category",
      label: "Guide",
      items: ["guide/doc1", "guide/装机配置"],
    },
    {
      type: "category",
      label: "前端基础",
      items: ["前端基础/css"],
    },
    {
      type: "category",
      label: "Vue基础",
      items: [
        "Vue基础/01",
        "Vue基础/02",
        "Vue基础/03",
        "Vue基础/04",
        "Vue基础/05",
        "Vue基础/06",
        "Vue基础/07",
        "Vue基础/08",
      ],
    },
  ],
};
