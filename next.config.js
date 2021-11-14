module.exports = {
      async redirects() {
      return [
        {
          source: '/',
          destination: '/api/conectores',
          permanent: true,
        }
      ]
    },
  }