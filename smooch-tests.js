// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by smooch.js.
import { name as packageName } from "meteor/aessig:smooch";

// Write your tests here!
// Here is an example.
Tinytest.add('smooch - example', function (test) {
  test.equal(packageName, "smooch");
});
