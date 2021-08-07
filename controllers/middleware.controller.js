exports.middleware = async (req, res) => {
  res.send({
    ...process.env,
  });
};
