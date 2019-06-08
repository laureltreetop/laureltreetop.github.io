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

/*
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#refinement-list',
        attribute: 'text',
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
/*
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
*/

search.addWidget(
    instantsearch.widgets.infiniteHits({
        container: '#infinite-hits',
        showPrevious: true,
        disabledLoadMore: true,
        cssClasses: {
            item: 'infinite-nagisa',
        },
        templates: {
            showPreviousText: 'Show previous',
            empty: "キーワード<em>「{{query}}」</em>では探せませんでした。",
            item(hit) {
                var resultStr = `${hit.text.join('')}`;
                return `
                <dt><a href="${hit.url}" target="_blank">${hit._highlightResult.title.value}</a></dt>
                <dd>${resultStr.slice(0, 120)}&hellip;</dd>
                `;
            }

            /*
            item:
            `
                <h2>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h2>
                <p>{{ text }}</p>
            `,
            }
            */
        }

    })
);

/*
// initialize pagination
search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination',
        // default is to scroll to 'body', here we disable this behavior
        showFirst: true,
        showLast: true,
        showNext: true,
        showPrevious: true,
		collapsible: true,
        cssClasses: {
            item: 'pagination-nagisa',
        },
    })
);
*/
search.start();
