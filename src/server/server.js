const app = require('./app.js')

app.listen(app.get('port'), () => {
  console.log(`Our app running  on port`, app.get('port'))
})
