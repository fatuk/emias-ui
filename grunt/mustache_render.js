module.exports = {
    options: {
        directory: 'templates/partials',
        clear_cache: true,
        extension: '.html'
    },
    all: {
        files: [{
            data: "json/data.json",
            template: "templates/index.html",
            dest: "index.html"
        }]
    }
};