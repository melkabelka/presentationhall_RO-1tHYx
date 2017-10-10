(function (global) {

    var paths = {
        'npm:': 'https://cdn2.rodin.io/v0.0.8-dev2/',
        'modules:': 'https://api.rodin.space/modules'
    };

    var map = {
        'rodin/core': 'npm:core',
        'rodin/physics': 'npm:physics',
        'rodin/modules':'modules:'
    };

    var packages = {
        'dist': { main: 'index.js', defaultExtension: 'js' },
        'rodin/core': { main: 'index.js', defaultExtension: 'js' },
        'rodin/physics': { main: 'index.js', defaultExtension: 'js' },
        'rodin/modules':{main:''}
    };

    var moduleNames = [
        'core/error',
        'core/time',
        'core/scene',
        'core/sculpt',
        'core/sculpt/elements',
        'core/messenger',
        'core/eventEmitter',
        'core/set',
        'core/initializer',
        'core/constants',
        'core/rodinEvent',
        'core/raycaster',
        'core/controllers',
        'core/animation',
        'core/video',
        'core/button',
        'core/gamePad',
        'core/utils',
        'core/loader',
        'core/plugin',
        'core/particleSystem',
        'core/color',
        'core/camera',
        'core/avatar',
        'core/math',
        'core/transport',
        'core/device',
        'core/grid',
    ];

    function packIndex(moduleName) {
        packages['' + paths['npm:'] + moduleName + ''] = { main: 'index.js', defaultExtension: 'js' };
    }

    moduleNames.forEach(packIndex);

    var config = {
        paths: paths,
        map: map,
        packages: packages,
        meta: {
            'https://cdnjs.cloudflare.com/*':{
                authorization: false
            },
            'https://api.rodin.space/*': {
                authorization: false
            },
            '*': {
                authorization: true
            }
        }
    };

    System.config(config);

})(this);
