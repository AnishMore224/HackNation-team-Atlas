module.exports = {
    async rewrites() {
      return [
        {
            source: "/public/index.html",
            destination: "/pages/api/myfile1.js",
        },
        {
            source: "/public/action.html",
            destination: "/pages/api/myfile2.js",
        },
        {
            source: "/public/another.html",
            destination: "/pages",
        }
      ];
    },
  };
  