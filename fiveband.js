var five = require('./5ive');

five.band(function () {
  setTimeout(function () {
    console.log('finished');
  }, 500000);
});