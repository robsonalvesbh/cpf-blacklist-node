const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);
const request = chai.request;

const endpoint = 'http://127.0.0.1:3000/api/v1';
const cpfFree = '12345678909';

describe('GET /api/v1/cpf/:cpf', () => {
  it('response with json', (done) => {
    request(endpoint)
      .get('/cpf/' + cpfFree)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body.cpf).to.eql('FREE');
        done();
      });
  });
});
