module.exports = {
	options: {
		prefix: '', // This will prefix each ID
		svg: { // will be added as attributes to the resulting SVG
			viewBox: '0 0 100 100'
		}
	},
	default: {
		files: {
			'templates/partials/svg-icons.mustache': ['svg.min/*.svg']
		}
	}
};