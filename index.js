'use strict';

function paginationMiddleware(req, res, next) {
  res.locals.limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;

  var page = req.query.page || req.query.p;

  if (page) {
    res.locals.skip = (parseInt(page, 10) - 1) * res.locals.limit;
  }
  else {
    res.locals.skip = req.query.skip ? parseInt(req.query.skip, 10) : 0;
  }

  next();
}

module.exports = paginationMiddleware;
