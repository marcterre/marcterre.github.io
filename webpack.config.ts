module.exports = {
  // ...other configuration options

  module: {
    rules: [
      // ...other rules

      // Rule for processing images
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // Specify the output directory for images
            },
          },
        ],
      },
    ],
  },
};
