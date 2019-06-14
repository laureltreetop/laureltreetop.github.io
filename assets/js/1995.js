const search = instantsearch({
    searchClient: algoliasearch('IA90805VYI', '9e30d633e7ae5597b0ddb7744f621017'),
    indexName: 'index',
    routing: true,
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'ver.1995を検索…',
        poweredBy: true,
        cssClasses: {
            form: 'search-nagisa',
        },
    })
);

search.addWidget(
    instantsearch.widgets.poweredBy({
        container: '#powered-by',
        cssClasses: {
            root: 'powered-by-nagisa',
        },
    })
);

search.addWidget(
    instantsearch.widgets.infiniteHits({
        container: '#infinite-hits',
        cssClasses: {
            item: 'infinite-nagisa',
        },
        templates: {
            empty: "キーワード<em>「{{query}}」</em>では探せませんでした。",
            item(hit) {
                return `
                <dt><a href="${hit.url}" target="_blank">${hit._highlightResult.title.value}</a></dt>
                <dd>${hit._snippetResult.content.value}</dd>
                `;
            }
        }

    })
);

search.start();
