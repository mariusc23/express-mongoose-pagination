'use strict';

const expect = require('chai').expect;
const qs = require('qs');
const middleware = require('../');

function request(query) {
  return {
    query: qs.parse(query)
  };
}

function response() {
  return {
    locals: {}
  };
}

function next() {}

describe('express-query-pagination', function() {

  it('should work for passed in values', function() {
    const req = request('skip=1&limit=2');
    const res = response();

    middleware(req, res, next);

    expect(res.locals.skip).to.equal(1);
    expect(res.locals.limit).to.equal(2);
  });

  it('should have defaults', function() {
    const req = request();
    const res = response();

    middleware(req, res, next);

    expect(res.locals.skip).to.equal(0);
    expect(res.locals.limit).to.equal(10);
  });

  it('should paginate "p" query param', function() {
    const req = request('p=3&limit=3');
    const res = response();

    middleware(req, res, next);

    expect(res.locals.skip).to.equal(6);
  });

  it('should paginate "page" query param', function() {
    const req = request('page=3&limit=3');
    const res = response();

    middleware(req, res, next);

    expect(res.locals.skip).to.equal(6);
  });

});
