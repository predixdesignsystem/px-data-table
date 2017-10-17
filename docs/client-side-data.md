# Client-Side Sort/Filter/Pagination

## Advanced

```html
    <px-data-table
      selected-rows="{{mySelectedItems}}"
      filterable
      selectable
      striped
      table-data="{{data}}"
      >
      <px-data-table-column
        name="first"
        sortable
        filter-function-name="myTableCustomFunctions.filterWholeWord"
        sort-function-name="myTableCustomFunctions.sortByEmailDomain"
        >
      </px-data-table-column>
      <px-data-table-column name="last" ...></px-data-table-column>
      <px-data-table-column name="color" ...></px-data-table-column>
      <px-data-table-column name="date" ...></px-data-table-column>
    </px-data-table>
```
