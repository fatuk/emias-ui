module.exports = {
    replaceSvgFill: {
        src: ['templates/partials/svg-icons.html'], // source files array (supports minimatch)
        dest: 'templates/partials/svg-icons.html', // destination directory or file
        replacements: [{
            from: /fill=\"#[0-9,A-F,a-f]{1,6}\"/g, // string replacement
            to: ''
        }]
    }
};