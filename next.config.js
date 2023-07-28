module.exports = {
  async redirects() {
    return [
      {
        source: "/music",
        destination: "https://distrokid.com/hyperfollow/kingajanicka/current",
        permanent: false,
      },
    ];
  },
};
