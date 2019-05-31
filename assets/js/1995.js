function hitTemplate(hit) {
var resultStr = `${hit.text.join('')}`;
     return `
    <dl>
    <dt><a href="${hit.url}" target="_blank">${hit._highlightResult.title.value}</a></dt>
    <dd>
        ${resultStr.slice(0, 160)}&hellip;
    </dd>
    </dl>
  `;
}

const search = instantsearch({
    appId: 'IA90805VYI',
    apiKey: '9e30d633e7ae5597b0ddb7744f621017',
    indexName: 'index',
    routing: true,
    searchParameters: {
        hitsPerPage: 5
    }
});

// initialize SearchBox
search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#searchbox',
        placeholder: 'ver.1995を検索…',
        poweredBy: true,
    })
);

// initialize hits widget
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: "キーワード<em>「{{query}}」</em>では探せませんでした。",
            item: function(hit) {
                return hitTemplate(hit);
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
		autoHideContainer: true,
    })
);

search.start();
