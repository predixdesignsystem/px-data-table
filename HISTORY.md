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
