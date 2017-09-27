v4.0.12
==================
* fix history

v4.0.11
==================
* merge #157

v4.0.10
==================
* merge #155

v4.0.9
==================
* fix pagination (#152)

v4.0.8
==================
* fix padding of html columns (#151) and pagination buttons

v4.0.7
==================
* fix docs

v4.0.6
==================
* fix highlight demo to calculate path (#149)

v4.0.5
==================
* Fix for sub-component demos to refer to shared API docs.

v4.0.4
==================
* Fix comment for analyzer

v4.0.3
==================
* fix pagination alignment in IE

v4.0.2
==================
* fix bugs

v4.0.1
==================
* fix pagination icons & dropdown
* fix bug with select column

v4.0.0
==================
* major release for redesign

v3.0.4
==================
* remove old component image
* update README

v3.0.3
==================
* fix #139, #140 (merge #142)

v3.0.2
==================
* add check for single select

v3.0.1
==================
* move px-row-click event

v3.0.0
==================
* replace pxLocalizeBehavior with appLocalizeBehavior for localization

v2.1.7
==================
* fixed filter behavior #79 and #90

v2.1.6
==================
* fixed #128 and added placeholder #107

v2.1.5
==================
* fixed #93 - font-awesome path issue & 404s in certain app configurations

v2.1.4
==================
* fixed #120

v2.1.3
==================
* cutover to PxLocalizeBehavior

v2.1.2
==================
* update dependencies

v2.1.1
==================
* merge PR #113 to fix issue #86, fixes behavior of select all checkbox with filters

v2.1.0
==================
* re-add a11y and i18n changes from 2.0.1 and 2.0.2

v2.0.4
==================
* fixed column duplication / hiding issues

v2.0.3
==================
* revert 2.0.1 and 2.0.2

v2.0.0
==================
* This release addresses a number of issues (PR #112):
  * fixes the behavior of the selectable column (currently appears in the wrong place when turned on dynamically)
  * adds an option for single-select (radio button vs checkbox)
  * fires the row-click behavior for non-editable cells
  * fixes the validateEvent error
  * changes the behavior of row declaration (it will create all of the columns found in data with default settings then override the settings for any columns declared in lightDOM).

v1.15.21
==================
* Issue #108

v1.15.20
==================
* fixed spacing of pagination buttons
* fixed borders for table--rows and table--columns

v1.15.19
==================
* several minor fixes:
  * fixed #102
  * removed misleading references to highlight-color
  * copied style variables to highlight API

v1.15.18
==================
* updated css variable naming for dropdown

v1.15.17
==================
* fixed enableColumnResize so that it actually works

v1.15.16
==================
* fixed #79 to support pasting in filter fields

v1.15.15
==================
* fixed CodePen for subcomponent

v1.15.14
==================
* fixed badges for subcomponent pages

v1.15.13
==================
* updated to px-demo

v1.15.12
==================
* fix up column demo to correctly configure dropdown columns

v1.15.11
==================
* bower updated so px-demo-snippet and px-api-viewer have new grays

v1.15.10
==================
* fixed failing unit test with new grays

v1.15.8
==================
* hide ms-clear to fix issue #90 in IE

v1.15.7
==================
* Update colors design to pick up new colors

v1.15.6
==================
* changing ghp.sh to account for Alpha releases

v1.15.5
==================
* Fixed validation failure icon. Fix up imports of px-polymer-font-awesome.

v1.15.4
==================
* Fixed polymer-font-awesome icon

v1.15.3
==================
* Scripting to CI/CD and preparing for docs push

v1.15.2
==================
* Fix pagination button icons and column sort icons. Fix double-tap selection of column headers and add nowrap for first column

v1.15.1
==================
* Update missed design depndencies

v1.15.0
==================
* Updated dependencies

v1.14.22
==================
* Fixed striping table row style

v1.14.21
==================
* added style variables for header row

v1.14.18
==================
* Fix sort icon wrapping onto newline issue

v1.14.17
==================
* changing all devDeps to ^

v1.14.16
==================
* Update px-theme to 2.0.1 and update test fixtures

v1.14.15
==================
* small change to demo options

v1.14.14
==================
* fixed typo in documentation

v1.14.12
==================
* Ensure cell tooltip is removed on detached

v1.14.11
==================
* update dependencies for dropdown

v1.14.10
==================
* Fix dropdown css variable names to point to correct name.

v1.14.9
==================
* removing px-theme style call

v1.14.8
==================
* changing Gruntfile.js to gulpfile.js

v1.14.7
==================
* added css variables

v1.14.6
==================
* bower updating px-demo-snippet

v1.14.5
================
* Fix for error with auto-generated columns with white spaces in names.

v1.14.4
================
* updated to latest version of dropdown

v1.14.2
================
* fixed codepen

v1.14.1
================
* Update dependencies

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
