## 1.9.2_3

Move package from spacejamio:chai to practicalmeteor:chai

## 1.9.2_2

Fix bug when reading includeStack from Meteor.settings, if meteor was not run with a settings file.

## 1.9.2_1

* Update chai to version 1.9.2
* Remove npm dependency - chai.js is now included in both client and server, which improves build time
* Update required meteor version to 0.9.3
* Update package version to use the new "wrapper package" package versions, introduced in meteor 0.9.3
* Add support for configuring chai.config.includeStack via Meteor.settings
* Add tests to verify chai is actually working, not just exported.

## 1.0.0

* Update required meteor version to 0.9.0
* Add package to meteor new packaging system
