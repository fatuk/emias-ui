module.exports = {
    options: {
        livereload: true
    },
    scss: {
        files: 'scss/*.scss',
        tasks: ['sass', 'autoprefixer'],
        options: {
            interrupt: true,
            livereload: false
        }
    },
    css: {
        files: 'css/*.css'
    },
    html: {
        files: '*.html'
    },
    js: {
        files: ['js/*.js']
    },
    mustache: {
        files: ['templates/**', 'json/*.json'],
        tasks: ['mustache_render']
    },
    plugins: {
        files: 'bower_components/**',
        tasks: ['uglify']
    }
};