const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);
const { request } = chai;
const constants = require('./../app/config/constants');

const cpf = {
  free: { cpf: constants.CPF_TEST_FREE },
  freeWithoutFormat: { cpf: constants.CPF_TEST_FREE_WITHOUT_FORMAT },
  block: { cpf: constants.CPF_TEST_BLOCK },
  blockWithoutFormat: { cpf: constants.CPF_TEST_BLOCK_WITHOUT_FORMAT },
};

/**
 * Adiciona CPF a blocklist
 */
describe('Route POST /api/v1/cpf', () => {
  it('Should add a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .post('/cpf')
      .send(cpf.free)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_201);
        expect(res.body.msg).to.eql(constants.MSG_CPF_ADDED_BLACKLIST);
        done();
      });
  });

  it('Should add a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .post('/cpf')
      .send(cpf.freeWithoutFormat)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_201);
        expect(res.body.msg).to.eql(constants.MSG_CPF_ADDED_BLACKLIST);
        done();
      });
  });
});

/**
 * Tenta adicionar CPF já existente na blocklist
 */
describe('Route POST /api/v1/cpf', () => {
  it('Should add a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .post('/cpf')
      .send(cpf.free)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_500);
        done();
      });
  });

  it('Should add a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .post('/cpf')
      .send(cpf.freeWithoutFormat)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_500);
        done();
      });
  });
});

/**
 * lista todos os CPF da blocklist
 */
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

/**
 * Busca um CPF que está blocklist
 */
describe('Route GET /api/v1/cpf/:cpf', () => {
  it('Should return a cpf that is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${cpf.free.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.cpf).to.eql(constants.MSG_BLOCK);
        done();
      });
  });

  it('Should return a cpf that is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${cpf.freeWithoutFormat.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.cpf).to.eql(constants.MSG_BLOCK);
        done();
      });
  });
});

/**
 * Busca um CPF que não está blocklist
 */
describe('Route GET /api/v1/cpf/:cpf', () => {
  it('Should return a cpf that dont is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${cpf.block.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_404);
        expect(res.body.cpf).to.eql(constants.MSG_FREE);
        done();
      });
  });

  it('Should return a cpf that dont is on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get(`/cpf/${cpf.blockWithoutFormat.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_404);
        expect(res.body.cpf).to.eql(constants.MSG_FREE);
        done();
      });
  });
});

/**
 * Remove um CPF que está blocklist
 */
describe('Route DELETE /api/v1/cpf/:cpf', () => {
  it('Should remove a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/${cpf.free.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_CPF_REMOVED_BLACKLIST);
        done();
      });
  });

  it('Should remove a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/${cpf.freeWithoutFormat.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        expect(res.body.msg).to.eql(constants.MSG_CPF_REMOVED_BLACKLIST);
        done();
      });
  });
});

/**
 * Tenta remover um CPF que não está blocklist
 */
describe('Route DELETE /api/v1/cpf/:cpf', () => {
  it('Should return error a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/${cpf.block.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_404);
        expect(res.body.msg).to.eql(constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST);
        done();
      });
  });

  it('Should return error a cpf on blacklist', (done) => {
    request(constants.ENDPOINT_API_V1)
      .delete(`/cpf/${cpf.blockWithoutFormat.cpf}`)
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_404);
        expect(res.body.msg).to.eql(constants.MSG_CPF_NOT_FOUND_ON_BLACKLIST);
        done();
      });
  });
});

/**
 * Request de status da aplicação
 */
describe('Route GET /api/v1/status', () => {
  it('Should return application status', (done) => {
    request(constants.ENDPOINT_API_V1)
      .get('/status')
      .end((err, res) => {
        expect(res.status).to.eql(constants.STATUS_200);
        done();
      });
  });
});

