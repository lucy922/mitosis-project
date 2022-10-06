module.exports = {
  files: "src/**",
  targets: ["react"],
  options: {
    react: {
      typescript: true,
      transpiler: { format: "esm", languages: ["ts"] },
    },
  },
};
