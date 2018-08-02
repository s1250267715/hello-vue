module.exports = {
  devServer: {
    port: 7777
  },
  configureWebpack: { //webpack 配置 
    module: {
      rules: [
        // ... 其它规则省略
        {
          test: /\.css$/,
          use: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                // 开启 CSS Modules
                modules: true,
                // 自定义生成的类名
                localIdentName: "[local]_[hash:base64:8]"
              }
            }
          ]
        }
      ]
    }
  }
};
