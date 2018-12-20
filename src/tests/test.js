
const test = require('tape')
const request = require('supertest')
const app = require('../server/app')
const buildDB = require('../database/db_build.js')
buildDB(() => {
  test('home page', t => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        t.error(err)
        t.end()
      })
  })

  test('Should be able to get an image and description', t => {
    request(app)
      .get(`/`)
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        t.error(err)
        var textTest = 'https://t4.ftcdn.net/jpg/01/94/82/79/240_F_194827982_vFcthNvwokiEdHkyPHwpCPJCQ35tBBtw.jpg'
        var expected = res.text.includes(textTest)
        t.ok(expected, 'html contain img fron home page')
        t.end()
      })
  })
  test('Should add a new img', t => {
    const data = 'img=http://s1.bwallpapers.com/thumbs2/2014/01/29/winter-pic_050605177.jpg &des=snow bear'
    request(app)
      .post(`/add`)
      .send(data)
      .expect(302)
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .end((err, res) => {
        t.error(err)
        t.end()
      })
  })
  test.onFinish(() => process.exit(0))
})
