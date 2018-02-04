exports.MemoryUsageInMB = () => {
  const memoryUsage = process.memoryUsage();

  return {
    total: `${Math.floor(((memoryUsage.heapTotal / 1024 / 1024) * 100)) / 100} MB`,
    used: `${Math.floor(((memoryUsage.heapUsed / 1024 / 1024) * 100)) / 100} MB`,
  };
};

