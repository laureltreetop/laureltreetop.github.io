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

var client = algoliasearch('IA90805VYI', '9e30d633e7ae5597b0ddb7744f621017');
var index = client.initIndex('index');
/*
autocomplete('#aa-search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'text',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<span>' +
            suggestion._highlightResult.title.value + '</span>';
        }
    }
});
*/
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
