const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/heavy-wheels-rentals/'  // Replace 'your-repository-name' with the actual repo name
    : '/'
};

