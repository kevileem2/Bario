const plugins = [
  [
    "module-resolver",
    {
      root: ["./app/"],
      alias: {
        "_assets": "./app/assets",
        "_shared":"./app/shared",
        "_screens":"./app/screens",
        "_theme":"./app/theme",
        "_navigation":"./app/navigation"
      }
    }
    
  ]
];


module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [...plugins],
}
