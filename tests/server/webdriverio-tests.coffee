Tinytest.addAsync "webdriverio - test", (test, done) ->
  options = { desiredCapabilities: { browserName: 'chrome' } }
  cb = (err, res)->
    console.log('Title was: ' + res.value)
    outputs: "Title was: Google"
  webdriverio.remote(options)
    .init()
    .url('http://www.google.com')
    .title(cb)
    .end()
