const { isValidObjectId } = require('mongoose');

const { HttpError } = require('../helpers');

const isValidId = (req, _, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, `ID ${id} is not valid MongoDB ID`));
  }
  next();
};

module.exports = isValidId;
