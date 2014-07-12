(function () {
    if (typeof module !== 'undefined' && module.exports) {
        var env = 'node';
    } else if (window) {
        var env = 'browser';
    }

    var five = function () {
        return 5;
    };

    five.upHigh = function () {
        return '⁵';
    };
    five.downLow = function () {
        return '₅';
    };
    five.roman = function () {
        return 'V';
    };

    five.arabic = function () {
        return 'خمسة'
    };
    five.croatian = function () {
        return 'pet'
    };
    five.czech = function () {
        return 'pět'
    };
    five.english = function () {
        return 'Five'
    };
    five.french = function () {
        return 'cinq'
    };
    five.german = function () {
        return 'fünf'
    };
    five.irish = function () {
        return 'cúig'
    };
    five.mongolian = function () {
        return 'таван'
    };
    five.polish = function () {
        return 'pięć'
    };
    five.swedish = function () {
        return 'fem'
    };
    five.thai = function () {
        return 'ห้า'
    };

    five.tooSlow = function () {
        var returnIn = new Date(new Date().valueOf() + 555);

        do {} while (new Date() < returnIn);

        return five();
    };

    function openLink(address, cb) {
        if(env === 'browser') {
            window.open(address);
        } else if(env === 'node') {
            var exec = require('child_process').exec;

            console.log(process.platform);
            if(process.platform === 'darwin') {
                var command = 'start "' + address + '"';
            } else if(process.platform === 'win32') {
                var command = 'open "" "' + address + '"';
            } else {
                var command = 'chromium-browser "' + address + '"';
            }
            exec(command, cb);
        }
    }

    five.band = function (cb) { openLink('https://www.youtube.com/watch?v=qoPRDbC85NE', cb); };

    if (env === 'node') {
        module.exports = five;
    } else if (env === 'browser') {
        window.five = five;
    }
}());
