module.exports = {
    icons: {
        src: 'svg/*.svg',
        dest: 'fonts/icons',
        syntax: 'bem',
        destCss: 'less/',
        options: {
            stylesheet: 'less',
            htmlDemo: false,
            relativeFontPath: '../fonts/icons',
            templateOptions: {
                baseClass: 'icon',
                classPrefix: 'icon-',
                mixinPrefix: 'icon_'
            },
        }
    }
};