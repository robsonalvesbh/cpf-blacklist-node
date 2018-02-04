module.exports = {
  getMemoryUsed: () => ({
    total: `${Math.floor(((process.memoryUsage().heapTotal / 1024 / 1024) * 100)) / 100} MB`,
    used: `${Math.floor(((process.memoryUsage().heapUsed / 1024 / 1024) * 100)) / 100} MB`,
  }),
};

