const search = instantsearch({
    searchClient: algoliasearch('IA90805VYI', '9e30d633e7ae5597b0ddb7744f621017'),
    indexName: 'index',
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: ' ver.1995を検索…',
        poweredBy: true,
        cssClasses: {
            form: 'search-nagisa',
        },
    })
);

/*
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#refinement-list',
        attribute: 'text',
        //searchable: true,
        templates: {
            item(item) {
                var resultStr = `${item.value}`;
                return `
                👉 ${resultStr} (${item.count})
                `;
            }
        }
    })
);
*/

search.addWidget(
    instantsearch.widgets.poweredBy({
        container: '#powered-by',
        cssClasses: {
            root: 'powered-by-nagisa',
        },
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        cssClasses: {
            item: 'item-nagisa',
        },
        templates: {
            empty: "キーワード<em>「{{query}}」</em>では探せませんでした。",
             item(hit) {
                var resultStr = `${hit.text.join('')}`;
                return `
                <dt><a href="${hit.url}" target="_blank">${hit._highlightResult.title.value}</a></dt>
                <dd>${resultStr.slice(0, 120)}&hellip;</dd>
                `;
            }
        },
    })
);

// initialize pagination
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
        maxPages: 20,
        // default is to scroll to 'body', here we disable this behavior
        scrollTo: false,
		showFirstLast: true,
		collapsible: true,
		//autoHideContainer: true,
        cssClasses: {
            item: 'pagination-nagisa',
        },
    })
);

search.start();
