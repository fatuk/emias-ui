module.exports = {
    options: {
        sourceMap: true,
        sourceMapFilename: 'css/style.css.map',
        sourceMapRootpath: '../',
        yuicompress: true,
        compress: true
    },
    build: {
        files: {
            "css/main.css": "less/main.less"
        }
    }
};