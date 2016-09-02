v1.13.3
================
* Hide scrollbar if not needed

v1.13.2
================
* Remove gruntfile

v1.13.1
================
* Fix for column chooser and long column names

v1.13.0
================
* Move to gulp and style modules

v1.12.7
================
* Added wrapping for long column headers

v1.12.6
================
* added support for parent-name in demo-snippet

v1.12.5
================
* Update ghp to include secondary demo pages

v1.12.4
================
* Added new demo pages

v1.12.3
================
* added image to readme

v1.12.2
================
* vulcanized old demo page as well.

v1.12.1
================
* added vulcanize to demo page

v1.12.0
================
* Fixes to allow re-cycling of existing data table element with new data

v1.11.1
================
* Fix bug that when table was selectable but not filterable, select all button (and row) were hidden.

v1.11.0
================
* Upgrade to Polymer 1.5.0

v1.10.3
================
* Filterable hide fix & merge.

v1.10.2
================
* Fix & tests for empty filter header row showing when no columns are marked as filterable.

v1.10.1
================
* Fix & tests for https://github.com/PredixDev/px-data-table/issues/30

v1.10.0
================
* Added cell click event.

v1.9.5
================
* Upping bower dependencies to latest polymer-font-awesome to stop bower resolution conflicts.

v1.9.4
================
* added oss_notice to bower ignore

v1.9.3
================
* added pull request test for travis and updated OSS Notice

v1.9.2
================
* added auto github pages functionality

v1.9.1
================
* fix racing condition that could lead to the same column being shown several times if px-data-column was defined in HTML + the data changed several time in succession at init

v1.9.0
================
* Many fixes to move highlight and selection styles onto px-data-table-cell.
* Fixes to make highlight style consistent.
* Highlight style fixes to make it in combination with selection styles and validation modes.

v1.8.2
================
* cosmetic enhancements for column reordering

v1.8.1
=================
* make sure insertion indicator when moving columns has a consistent size. Make sure 'select' column can't be dragged

v1.8.0
=================
* Upgrade to Polymer 1.4.0

v1.7.1
=================
* Added auto github pages rebuilding on tag push

v1.7.0
=================
* Added enable-column-resize attribute on px-data-table, allowing the user to resize columns by clicking and dragging the right border of a header

v1.6.2
=================
* fix bug when dropping first user defined column on 'selected' column

v1.6.1
=================
* Columns tracked directly in the light dom: if adding data through the dataTable attribute px-data-table-column will be added in the light dom for each appropriate column. The column order is tracked within the light dom as well.

v1.6.0
=================
* Added columns hiding/showing functionality: hideColumn(columnName) and showColumn(columnName) API functions and show-column-chooser attribute on px-data-table, adding a dropdown allowing to select which column should be hidden.
* Added column reordering functionality: drag and drop column headers. Enabled through the enable-column-reorder attribute on px-data-table.

v1.5.2
=================
* added a css variable for dropdown border.

v1.5.1
=================
* fixed an issue with dropdown tooltips within data table

v1.5.0
=================
* Fixes to correctly notify table-data attribute when changes happen to the table data and propagate them out of the component.
* Fixes to make table react correctly when the underlying model (table-data) changes.
* Fixes to dropdown width and to make the cell text (character) width consistent with other column definitions.
* Sass fixes for shadow DOM.

v1.4.0
=================
* Added css variable to support custom cell padding: --px-data-table-padding-top, --px-data-table-padding-bottom, --px-data-table-padding-left, --px-data-table-padding-right

v1.3.1
=================
* Updated dropdown to latest version

v1.3.0
=================
* Added Dropdown functionality

v1.2.0
=======
* Initial support for cell and row highlighting. See demo.html for an example.
* Support for 'high'/'medium'/'low' highlight styles on given cell or row.
* Light DOM observation of addition and removal of px-data-table-columns elements. Table now dynamically reacts to these changes.
* Remove 'x' from input elements on IE and Edge.
* Fix for making highlight and selected rows consistent when filtering or ordering of columns.
* Fixes for IE when using column and cell highlight.
* More tests.


v1.1.3
=================
* Move bower components to use registered component names.

v1.1.2
=================
* Fix 1px border-collapse padding bug.

v1.1.1
=================
* Updated README with preventing auto-synching your info.

v1.1.0
=================
* Add hide-pagination-control property to allow user to control if the data table pagination controls are available or not to the user.

v1.0.5
=================
* Fixes for table borders disappearing in Safari
* Fixes for column only and row only cell borders.
* Removal of '5' row option in pagination control to match data table design.

v1.0.3
=================
* Updated License

v1.0.2
=================
 * removed extraneous 5 from array which was causing a dropdown bug

v1.0.1
==================
* Fixes missing tooltip and incorrect positioning on validation error.

v1.0.0
==================
* Now possible to set a column as 'editable' and allow the cell to be selected and the content edited.
* Per-cell validation is now possible. As a cell is edited and the change accepted a (developer supplied) validation routine is executed, a cell will be marked as

 v0.0.1
==================
* Initial release
