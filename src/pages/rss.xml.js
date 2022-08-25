import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "ubionexd",
		description: "ubionexd blog and portfolio",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.md'),
	});
