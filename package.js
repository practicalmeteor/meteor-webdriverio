Package.describe({
    name: 'practicalmeteor:webdriverio',
    summary: 'Selenium 2.0 bindings for node.js',
    version: '2.4.5-rc0',
    git: 'https://github.com/practicalmeteor/meteor-webdriverio.git'
});


Npm.depends({
    'webdriverio': '2.4.5'
});


Package.onUse(function (api) {
    api.versionsFrom('0.9.3');

    api.use(['coffeescript', 'meteor'], 'server');

    api.use(['practicalmeteor:loglevel', 'practicalmeteor:chai'], 'server');

    api.addFiles(['src/server/webdriverio.coffee'], 'server');

    api.export(['webdriverio'], 'server');
});


Package.onTest(function(api) {
    api.use(['practicalmeteor:webdriverio', 'coffeescript', 'practicalmeteor:munit'], 'server');

    api.addFiles(['tests/server/webdriverio-tests.coffee'], 'server');
});
