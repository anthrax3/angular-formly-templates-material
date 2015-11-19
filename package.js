var client = 'client';

Package.describe({
    name: "wieldo:angular-formly-templates-material",
    summary: "Material design templates for angular-formly",
    version: "0.5.2",

    documentation: 'README.md',
    git: 'https://github.com/wieldo/angular-formly-templates-material.git'
});

Package.onUse(function (api) {

    var packages = {
        use: [
            'angular@1.0.0',
            'pbastowski:angular-babel@1.0.2',
            'pbastowski:angular2-now@0.3.13',
            'wieldo:angular-formly@7.3.2'
        ],
        imply: [
            'angular:angular@1.4.7',
            'angular:angular-messages@1.4.7',
            'angular:angular-material@0.11.4',
            'wieldo:angular-formly'
        ]
    };

    api.versionsFrom("METEOR@1.0");

    api.use(packages.use);

    api.imply(packages.imply);

    api.addFiles([
        'lib/client/main.js',
        // formlyMaterial prodiver
        'lib/client/formly-material.js',

        //
        // templateManipulators
        //

        // md-theme
        'lib/client/run/md-theme-manipulator.js',

        //
        // wrappers
        //

        // input-container
        'lib/client/wrappers/input-container/input-container.js',
        'lib/client/wrappers/input-container/input-container.ng.html',
        // label
        'lib/client/wrappers/label/label.js',
        'lib/client/wrappers/label/label.ng.html',
        // messages
        'lib/client/wrappers/messages/messages.js',
        'lib/client/wrappers/messages/messages.ng.html',

        //
        // types
        //

        // input
        'lib/client/types/input/input.js',
        'lib/client/types/input/input.ng.html',

        // checkbox
        'lib/client/types/checkbox/checkbox.js',
        'lib/client/types/checkbox/checkbox.ng.html',

        // switch
        'lib/client/types/switch/switch.js',
        'lib/client/types/switch/switch.ng.html',

        // select
        'lib/client/types/select/select.js',
        'lib/client/types/select/select.ng.html',

        // radio
        'lib/client/types/radio/radio.js',
        'lib/client/types/radio/radio.ng.html',

        // textarea
        'lib/client/types/textarea/textarea.js',
        'lib/client/types/textarea/textarea.ng.html',
        
        // datepicker
        'lib/client/types/datepicker/datepicker.js',
        'lib/client/types/datepicker/datepicker.ng.html',

        // chips
        'lib/client/types/chips/chips.js',
        'lib/client/types/chips/chips.ng.html',

        // slider
        'lib/client/types/slider/slider.js',
        'lib/client/types/slider/slider.ng.html'

    ], client);

});

Package.onTest(function(api) {
    api.use([
        'pbastowski:angular-babel@1.0.2',
        'pbastowski:angular2-now@0.3.13',
        'sanjo:jasmine@0.20.2',
        'velocity:helpers',
        'velocity:console-reporter',
        'jquery',
        'angular:angular-mocks@1.4.7',
        'wieldo:angular-formly-templates-material'
    ]);
    
    api.addFiles([
        'tests/client/test-utils.js',
        'tests/client/angular-material-mocks.js',
        'tests/client/formly-material-spec.js',
        // run
        'tests/client/run/md-theme-manipulator-spec.js',
        // wrappers
        'tests/client/wrappers/input-container-spec.js',
        'tests/client/wrappers/label-spec.js',
        'tests/client/wrappers/messages-spec.js',
        // types
        'tests/client/types/checkbox-spec.js',
        'tests/client/types/chips-spec.js',
        'tests/client/types/datepicker-spec.js',
        'tests/client/types/input-spec.js',
        'tests/client/types/radio-spec.js',
        'tests/client/types/select-spec.js',
        'tests/client/types/slider-spec.js',
        'tests/client/types/switch-spec.js',
        'tests/client/types/textarea-spec.js'
    ], client);
});