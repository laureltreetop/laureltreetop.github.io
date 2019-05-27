function hitTemplate(hit) {
var resultStr = `${hit.text.join('')}`;
     return `
<div class="hit">
<div class="hit-content">
    <dl>
    <dt class="hit-title"><a href="${hit.url}" target="_blank">${hit._highlightResult.title.value}</a></dt>
    <dd class="hit-text">
        ${resultStr.slice(0, 160)}&hellip;
    </dd>
    </dl>
</div>
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
        container: '#aa-search-input',
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
        escapeHits: true,
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
