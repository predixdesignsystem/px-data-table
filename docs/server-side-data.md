# Server-Side Sort/Filter/Pagination

## Advanced Example

In the following example `serverResponse` is an object that is updated upon the response of a server.

```html

    <px-data-table
      id="remoteDataTable"
      total-entries="{{serverResponse.totalRecordsCount}}"
      first-item-index="{{serverResponse.recordIndexOfSubset}}"
      table-data="{{serverResponse.dataSubset}}"
      remote-data="true"
      >
      <px-data-table-column
        name="first"
        sortable
        filter-function-name="myTableCustomFunctions.filterWholeWord"
        sort-function-name="myTableCustomFunctions.sortByEmailDomain">
      </px-data-table-column>
      <px-data-table-column name="last"></px-data-table-column>
      <px-data-table-column name="color"></px-data-table-column>
      <px-data-table-column name="date"></px-data-table-column>
    </px-data-table>
```

## Usage

For container element `ContainerEl`, create the following event listeners and request new data based on the user-intended change. Upon receiving updated data, update the variables bound to the `table-data`, `total-entries`, and `first-item-index` attributes.

### Events

For full descriptions, run `gulp serve` and check out the [demo page](../demo/index.html).

- `px-data-table-init`
- `px-page-change-intent`
- `px-page-size-change-intent`
- `px-filter-change-intent`
- `px-sort-change-intent`s


## Example Usage

### Markup

```html
  <div id="dataTableController">
    <px-data-table
      id="remoteDataTable"
      total-entries="{{remoteData.totalRecordsCount}}"
      first-item-index="{{remoteData.recordIndexOfSubset}}"
      table-data="{{remoteData.dataSubset}}"
      remote-data="true"
      >
      <px-data-table-column name="last"></px-data-table-column>
    </px-data-table>
  </div>
```

### Data Binding

```javascript
  var rdt = document.getElementById('remoteDataTable');

  rdt.remoteData = {
    totalRecordsCount: 0,
    recordIndexOfSubset: 0,
    dataSubset: []
  };

  rdt.addEventListener('px-page-change-intent', (evt) => {
    composeFetchRequest({page: evt.detail});
  });

  function composeFetchRequest(options) {
    fetchNewData('/someUrl', objToUrlParams(options));
  }

  function handleNewDataReceived (serverResponse) {
    rdt.remoteData = {
      totalRecordsCount: serverResponse.totalRecordsCount,
      recordIndexOfSubset: serverResponse.recordIndexOfSubset,
      dataSubset: serverResponse.dataSubset
    };
  }

  function objToUrlParams (params) {
    return Object.keys(params).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(a[k])
    }).join('&');
  }
```
