const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const request = chai.request;
const constants = require('./../app/config/constants');

describe('Route GET /api/v1/cpf', () => {
  it('Should return a list of cpf that is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get('/cpf')
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        done();
      });
  });
});

describe('Route GET /api/v1/cpf/:cpf', () => {
  it('Should return a cpf that is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${constants.CPF_IS_ON_BLACKLIST}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_BLOCK);
        done();
      });
  });
});

describe('Route GET /api/v1/cpf/:cpf', () => {
  it('Should return a cpf that dont is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${constants.CPF_DONT_IS_ON_BLACKLIST}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_FREE);
        done();
      });
  });
});

describe('Route POST /api/v1/cpf/', () => {
  it('Should add a cpf on blacklist', (done) => {

    let cpf = {
      'cpf': constants.CPF_TEST
    };

    request(constants.ENDPOINT_API_V1)
      .post('/cpf')
      .send(cpf)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_CPF_ADDED_BLACKLIST);
        done();
      });
  });
});

describe('Route DELETE /api/v1/cpf/:cpf', () => {
  it('Should remove a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/${constants.CPF_TEST}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_CPF_REMOVED_BLACKLIST);
        done();
      });
  });
});

describe('Route DELETE /api/v1/cpf/:cpf', () => {
  it('Should return error a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/99999999999`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST);
        done();
      });
  });
});


