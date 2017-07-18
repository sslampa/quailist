const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Test', () => {

  describe('/GET Test', () => {
    it('it should return json', (done) => {
      chai.request(server)
        .get('/api/test')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

})
