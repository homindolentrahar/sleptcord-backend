const errorMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ status: "error", msg: "Something went wrong", detail: err });
};

module.exports = errorMiddleware;
