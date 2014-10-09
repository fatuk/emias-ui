module.exports = {
	options: {
		plugins: [{
			removeViewBox: false
		}]
	},
	dist: {
		files: [{
			cwd: "svg.src/",
			src: "*.svg",
			dest: "svg.min/",
			expand: true
		}]
	}
};