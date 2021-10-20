const Sleep = require("../models/Sleep");

const getAllSleep = async (req, res) => {
  const result = await Sleep.find({});

  res
    .status(200)
    .json({ status: "success", count: result.length, data: result });
};

const getSleepById = async (req, res) => {
  const { id } = req.params;

  const result = await Sleep.findOne({ _id: id });

  if (!result) {
    return res
      .status(404)
      .json({ stauts: "error", msg: `No data with id: ${id}` });
  }

  res.status(200).json({ status: "success", data: result });
};

const addSleep = async (req, res) => {
  const result = await Sleep.create(req.body);

  res
    .status(201)
    .json({ status: "success", msg: `Added data: ${result.name}` });
};

const updateSleep = async (req, res) => {
  const { id } = req.params;

  const result = await Sleep.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", msg: `No data with id: ${id}` });
  }

  res
    .status(200)
    .json({ status: "success", msg: `Data ${id} updated successfuly` });
};

const deleteSleep = async (req, res) => {
  const { id } = req.params;

  const result = await Sleep.findOneAndDelete({ _id: id });

  if (!result) {
    return res
      .status(404)
      .json({ status: "error", msg: `No data with id: ${id}` });
  }

  res
    .status(200)
    .json({ status: "success", msg: `Data ${id} deleted successfuly` });
};

module.exports = {
  getAllSleep,
  getSleepById,
  addSleep,
  updateSleep,
  deleteSleep,
};
