# Server-Side Sort/Filter/Pagination

## Advanced Example

```html
    <px-data-table
      selected-rows="{{mySelectedItems}}"
      filterable
      selectable
      striped
      table-data="{{data}}"
      remote-data="true"
      >
      <px-data-table-column
        name="first"
        sortable
        filter-function-name="myTableCustomFunctions.filterWholeWord"
        sort-function-name="myTableCustomFunctions.sortByEmailDomain">
      </px-data-table-column>
      <px-data-table-column name="last" ...></px-data-table-column>
      <px-data-table-column name="color" ...></px-data-table-column>
      <px-data-table-column name="date" ...></px-data-table-column>
    </px-data-table>
```

## Usage

For container element ContainerEl, create the following event listeners and request new data based on the user-intended change. Upon receiving updated data, update the variable bound to the `table-data` attribute.

### Events

- `px-data-table-init`
  - Fired when the data table initializes.
  - Sends out initialization information (such as suggested page size based on available space)
  - Only fired if dataRemote==true
  - Information is stored in `evt.detail`:
    ```javascript
        document.getElementById("mytable").addEventListener("px-data-table-init", function(e) {
          var data = e.detail;
          console.log("Intended page: ", data);
        });
        // ==> {pageSize:10}
    ```
- `px-page-change-intent`
  - Fired when the user interaction indicates an intention to change the page
  - Only fired if dataRemote==true
  - Information is stored in `evt.detail`:
    ```javascript
    document.getElementById("mytable").addEventListener("px-page-change-intent", function(e) {
      var data = e.detail;
      console.log("Intended page: ", data);
    });
    ```
- `px-page-size-change-intent`
  - Fired when the user interaction indicates an intention to change the page size
  - Only fired if dataRemote==true
  - Information is stored in `evt.detail`:
    ```javascript
    document.getElementById("mytable").addEventListener("px-page-size-change-intent", function(e) {
      var data = e.detail;
      console.log("Intended page size: ", data);
    });
    ```
- `px-filter-change-intent`
  - Fired when the user interaction indicates an intention to change the filter
  - Captures filter data for all filtered columns
  - Only fired if dataRemote==true
  - Information is stored in `evt.detail`:
    ```javascript
    document.getElementById("mytable").addEventListener("px-filter-change-intent", function(e) {
      var data = e.detail;
      console.log("Intended filters: ", JSON.parse(data));
    });
    // ==> [{name:'columnA',userEntry:'asdf'},{name:'columnB',userEntry:'qwert'}]
    ```
- `px-sort-change-intent`
  - Fired when the user interaction indicates an intention to change the sort
  - Captures sort data for all sorted columns (currently only single sort allowed through UI)
  - Only fired if dataRemote==true
  - Information is stored in `evt.detail`:
    ```javascript
    document.getElementById("mytable").addEventListener("px-sort-change-intent", function(e) {
      var data = e.detail;
      console.log("Intended sort: ", JSON.parse(data));
    });
    // ==> [{name:'columnA',direction:'ascending'}] or [{name:'columnB',direction:'descending'}]
    ```
