# px-data-table [![Build Status](https://travis-ci.org/PredixDev/px-data-table.svg?branch=master)](https://travis-ci.org/PredixDev/px-data-table)

## Overview

`Px-data-table` is a Predix UI component which defines a data table, optionally using a sub-element for advanced column settings.

## Usage

### Prerequisites

1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install https://github.com/PredixDev/px-data-table.git --save
```

Second, import the component to your application with the following tag in your head.

```html
<link rel="import" href="bower_components/px-data-table/px-data-table.html"/>
```

Finally, use the component in your application:

```html
Minimum - Client-Side Sort/Filter/Pagination:

    <px-data-table
      table-data="{{data}}"
      >
    </px-data-table>

Minimum - Server-Side Sort/Filter/Pagination:

    <px-data-table
      total-entries="100"
      first-item-index="11"
      table-data="{{dataSubset}}"
      remote-data="true"
      >
    </px-data-table>

```

### Client-Side VS Server-Side Data Paradigms

There are two main paradigms for the source of data in a table.

In a *Client-Side* model, the browser makes one request for the _complete set_ of data.
This means that sorting, filtering, and pagination all happen in memory on the client.
While this produces snappy tables with reasonably sized data sets, it can lead to a sluggish UI
for larger data sets. This works great with data sets that don't change frequently,
since the full payload would have to be resent for every update.

In a *Server-Side* model, the browser makes a request for a _subset_ of data for a particular page.
Sorting, filtering, and pagination requests will have to be made to a service for a new _subset_ of data
that matches the user's intended criteria. This prevents the browser from being overwhelmed with excessively
large data sets by only exposing one page's worth of data at a time. This is ideal for larger data sets or
where it is preferable to make multiple small requests instead of fewer larger requests. Due to the increased
frequency of requests, the UI is more likely to display data in sync with the server.


### Client Side Sort/Filter/Pagination

For more details and complex examples: [Client-Side Data Reference](docs/client-side-data.md)


### Server Side Sort/Filter/Pagination

For more details and complex examples: [Server-Side Data Reference](docs/server-side-data.md)


### Integrating with other frameworks (ex: Angular):

You may not be able to use 2-way binding with the objects/arrays in other frameworks such as Angular.

We suggest instead to use events and selectors, for example:

```
document.getElementById("myDataTable").addEventListener("px-row-click", function(e) {
    ...
});

document.getElementById("myDataTable").addEventListener("px-select-all-click", function(e) {
    ...
});

$scope.doSomethingWithSelectedRows = function() {
    $scope.allSelectedRows = document.getElementById("myDataTable").selectedRows;
};
```

You may also want to prevent your data from auto-synching with your model. If so, we've written up a [little explanation] to help you with that.


## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-data-table).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

The root of that server (e.g. http://localhost:8080/) will automatically open in your default browser with the API documentation page and interactive working examples.

`gulp serve` also runs `gulp watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on in LiveReload.

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-data-table/issues) to submit any bugs you might find.
