var getStyle = function (el, style){
  return window.getComputedStyle( el, null ).getPropertyValue( style );
};

var additionalData = [
  {
  "index": 26,
  "name": "Cooley Macdonald Two",
  "first": "Aida",
  "last": "Hurley",
  "image": "https://s3.amazonaws.com/uifaces/faces/twitter/markwienands/73.jpg",
  "boolean": false,
  "guid": "466a665b-b7b6-4eae-b404-e9b5a8d1641d",
  "integer": 20,
  "date": "Sun Jan 05 2014 15:48:57 GMT-0800 (PST)",
  "address": "4 Hall Street",
  "city": "Stouchsburg",
  "state": "District Of Columbia",
  "zip": 32399,
  "country": "Chile",
  "email": "aidahurley@scentric.com",
  "phone": "(975) 451-3272",
  "color": "rgb(119,239,85)"
  },
  {
    "index": 27,
    "name": "Snow Blankenship Two",
    "first": "Mccormick",
    "last": "Jensen",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/menghe/73.jpg",
    "boolean": false,
    "guid": "961f5da2-2479-4f45-9132-9e89a8bc32e4",
    "integer": 70,
    "date": "Tue Jan 22 1974 01:18:15 GMT-0700 (PDT)",
    "address": "3 Lewis Place",
    "city": "Elizaville",
    "state": "Virgin Islands",
    "zip": 32784,
    "country": "Norfolk Island",
    "email": "mccormickjensen@scentric.com",
    "phone": "(961) 443-3343",
    "color": "rgb(204,198,130)"
  },
  {
    "index": 28,
    "name": "Gabriela Brock Two",
    "first": "Ramona",
    "last": "Meyers",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/heyanata/73.jpg",
    "boolean": false,
    "guid": "07133f92-9308-420e-ae7b-e5ecd657aa85",
    "integer": 76,
    "date": "Sat Sep 15 1984 07:22:38 GMT-0700 (PDT)",
    "address": "3 Rodney Street",
    "city": "Orin",
    "state": "Puerto Rico",
    "zip": 60446,
    "country": "Japan",
    "email": "ramonameyers@scentric.com",
    "phone": "(839) 591-3993",
    "color": "rgb(236,222,59)"
  },
  {
    "index": 29,
    "name": "Graciela Orr Two",
    "first": "Sharp",
    "last": "Lindsay",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thibaut_re/73.jpg",
    "boolean": true,
    "guid": "0ea67b0a-5ea7-4e07-8d06-48b6e2a00c6e",
    "integer": 39,
    "date": "Mon May 25 1970 21:04:46 GMT-0700 (PDT)",
    "address": "2 Tech Place",
    "city": "Kraemer",
    "state": "Maryland",
    "zip": 24019,
    "country": "Saudi Arabia",
    "email": "sharplindsay@scentric.com",
    "phone": "(852) 538-3232",
    "color": "rgb(218,74,95)"
  }
];

var minidata = [
  {
    "first": "Valentine",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "valentinemeyer@scentric.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Blue Bottle cardigan</button>"
  },
  {
    "first": "Silva",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "silvaalexander@gmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Freegan tilde</button>"
  },
  {
    "first": "Hopkins",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "hopkinswong@hotmail.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>bespoke gastropub</button>"
  },
  {
    "first": "Harriet",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "harrietsherman@scentric.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>dreamcatcher fingerstache</button>"
  },
  {
    "first": "Stacie",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "staciebartlett@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>Etsy beard</button>"
  },
  {
    "first": "Lindsay",
    "last": "Meyer",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iboldurev/73.jpg",
    "boolean": true,
    "guid": "8c3bd9ad-e8d6-4ea4-85e6-d145295f3f91",
    "integer": 99,
    "date": "Sat Feb 17 1973 03:45:57 GMT-0800 (PST)",
    "address": "4 Whitty Lane",
    "city": "Nicholson",
    "state": "South Carolina",
    "zip": 41343,
    "country": "Germany",
    "email": "lindsay@gmail.com",
    "phone": "(956) 428-2996",
    "color": "<button class='btn' style='color:rgb(201,142,97);'>Austin meggings</button>"
  },
  {
    "first": "Shelley",
    "last": "Alexander",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/smalonso/73.jpg",
    "boolean": true,
    "guid": "37224065-ac71-4716-be9a-108ecddfee47",
    "integer": 16,
    "date": "Wed Aug 02 1995 07:03:12 GMT-0700 (PDT)",
    "address": "2 Berkeley Place",
    "city": "Manila",
    "state": "Michigan",
    "zip": 22009,
    "country": "Thailand",
    "email": "shelley@hotmail.com",
    "phone": "(823) 415-2224",
    "color": "<button class='btn' style='color:rgb(113,105,251);'>Kitsch banjo</button>"
  },
  {
    "first": "Rita",
    "last": "Wong",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/taherrapee/73.jpg",
    "boolean": false,
    "guid": "1ea0922e-179d-4057-abeb-d8fe63e55da8",
    "integer": 94,
    "date": "Wed Sep 21 2011 04:03:55 GMT-0700 (PDT)",
    "address": "4 Tompkins Avenue",
    "city": "Movico",
    "state": "Maine",
    "zip": 89440,
    "country": "Seychelles",
    "email": "rita@yahoo.com",
    "phone": "(814) 488-2063",
    "color": "<button class='btn' style='color:rgb(133,126,66);'>Brooklyn authentic</button>"
  },
  {
    "first": "Joe",
    "last": "Sherman",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/ismailmayat/73.jpg",
    "boolean": true,
    "guid": "46a4a1bc-97af-46e0-aedd-c3cc42e6b8f5",
    "integer": 27,
    "date": "Wed Jul 07 2010 05:48:57 GMT-0700 (PDT)",
    "address": "3 Stratford Road",
    "city": "Makena",
    "state": "Kansas",
    "zip": 21389,
    "country": "Chad",
    "email": "joejoe@yahoo.com",
    "phone": "(887) 497-3612",
    "color": "<button class='btn' style='color:rgb(195,89,110);'>Pickled cray scenester</button>"
  },
  {
    "first": "Jane",
    "last": "Bartlett",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/73.jpg",
    "boolean": false,
    "guid": "17aac57d-4644-44d8-8a6b-b2eedd3d42dc",
    "integer": 49,
    "date": "Sun Mar 14 1999 23:13:33 GMT-0800 (PST)",
    "address": "4 Luquer Street",
    "city": "Newcastle",
    "state": "Iowa",
    "zip": 72190,
    "country": "Uruguay",
    "email": "jane@scentric.com",
    "phone": "(957) 412-3261",
    "color": "<button class='btn' style='color:rgb(164,84,221);'>8-bit migas</button>"
  }
];

document.addEventListener("WebComponentsReady", function() {

  runTests();
});

function runTests() {

  suite('Remote Data Paradigm', function () {

    var currentTableFixture;

    setup(function () {
      currentTableFixture = null;
    });

    teardown(function (done) {
      flush(function () { done(); });
    });

    test('Polymer exists', function() {
      assert.isTrue(Polymer !== null);
    });


    // ------------------------------------------
    // Table 1 Tests
    // ------------------------------------------
    suite('Page 1 - remoteData1', function () {

      setup(function (done) {
        currentTableFixture = document.getElementById('remoteData1');
        currentTableFixture.tableData = minidata;
        this.timeout(20*1000); // adding table data may take a while
        flush(function () { done(); });
      });

      teardown(function () { });

      test('fixture is created', function(done) {
        flush(function () {
          assert.isTrue(currentTableFixture !== null);
          done();
        });
      });

      test('Default pagination size is 10', function(){
        assert.equal(currentTableFixture.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = currentTableFixture.querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 1-10 of 100', function(){
        var paginationSpan = currentTableFixture.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should be selected', function(){
        var paginationPager = currentTableFixture.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '1',
          '"1" is the selected page in the pagination component');
      });

      test('Page 2 should NOT be selected', function(){
        var paginationPager = currentTableFixture.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelectorAll('.px-pagination .btn--icon.btn--pagination--number').length, 1,
          'No other page number is selected');
      });

      test('Clicking Next Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = currentTableFixture;
        var pageChangeButton = dataTable.querySelector('.px-pagination .btn--pagination.next');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 2, 'Requesting page 2');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 2', function() {
        var page = 2;
        var dataTable = currentTableFixture;

        dataTable.firstItemIndex = 11;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '2',
          'Page 2 is selected');
      });

    });

    // ------------------------------------------
    // Page 2 Tests
    // ------------------------------------------
    suite('Page 2 - remoteData2', function () {-

      setup(function (done) {
        currentTableFixture = document.getElementById('remoteData2');
        currentTableFixture.tableData = minidata;
        this.timeout(20*1000); // adding table data may take a while
        flush(function () { done(); });
      });

      teardown(function () { });

      test('fixture is created', function(done) {
        flush(function () {
          assert.isTrue(currentTableFixture !== null);
          done();
        });
      });

      test('Default pagination size is 10', function(){
        assert.equal(currentTableFixture.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = currentTableFixture.querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 11-20 of 100', function(){
        var paginationSpan = currentTableFixture.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 100', 'Shows correct pagination counts.');
      });

      test('Page 2 should be selected', function(){
        var paginationPager = currentTableFixture.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '2',
          '"1" is the selected page in the pagination component');
      });

      test('Page 1 should NOT be selected', function(){
        var paginationPager = currentTableFixture.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelectorAll('.px-pagination .btn--icon.btn--pagination--number').length, 1,
          'No other page number is selected');
      });

      test('Clicking Previous Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = currentTableFixture;
        var pageChangeButton = dataTable.querySelector('.px-pagination .btn--pagination.previous');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 1, 'Requesting page 1');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 1', function() {
        var page = 1;
        var dataTable = currentTableFixture;

        dataTable.firstItemIndex = 1;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert.equal(currentTableFixture.querySelector('.px-pagination .btn--icon.btn--pagination--number').textContent, '1',
          'Page 1 is selected');
      });

    });

    // ------------------------------------------
    // Rows per Page Dropdown Tests
    // ------------------------------------------
    suite('Rows per Page Dropdown - remoteData3', function () {

      setup(function (done) {
        currentTableFixture = document.getElementById('remoteData3');
        currentTableFixture.tableData = minidata;
        this.timeout(20*1000); // adding table data may take a while
        flush(function () { done(); });
      });

      teardown(function () { });

      test('fixture is created', function(done) {
        flush(function () {
          assert.isTrue(currentTableFixture !== null);
          done();
        });
      });

      test('On change, it fires a `px-page-size-change-intent` event', function(done) {
        var dataTable = currentTableFixture;
        var paginationElement = dataTable.querySelector('.pagination px-pagination#pagination');
        // var pageSizeSelectDropdown = dataTable.querySelector('.pagination px-pagination#pagination px-dropdown');

        dataTable.addEventListener('px-page-size-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          var val = _typeofComparison(evt.detail, "string") ? parseInt(evt.detail,10) : evt.detail;
          assert.equal(val, 10, 'Requesting page size of 10');
          done();
        });

        // TODO: figure out how to trigger this on the pageSizeSelectDropdown
        // can't currently trigger a bubbling event (in IE11 only) on the dropdown that bubbles to px-pagination
        //   because simulated events are strictly {bubbles:false} with readonly on that property
        // simulateEvent(pageSizeSelectDropdown, 'selected-changed');

        // ATTEMPTS
        // pageSizeSelectDropdown.fire('selected-changed', 'dummyParam', {cancelable: true});
        // var selectedChangedEvt = new Event('selected-changed');
        // pageSizeSelectDropdown.dispatchEvent(selectedChangedEvt);

        // because this a px-* component, you can't mutate the selected item with js
        // so we have to expect the value to be what is currently selected
        // this could be improved by changing the dropdown value with clicks
        paginationElement.value = 10;
        // simulateEvent(paginationElement, 'selected-changed', {target:{value:10}});
        paginationElement.dispatchEvent(new Event('selected-changed'), {target:{value:10}});

      });


      test('Updates value accordingly when value is passed in', function() {
        var dataTable = currentTableFixture;
        var pageSizeSelectDropdown = dataTable.querySelector('.pagination px-pagination#pagination px-dropdown');

        dataTable.pageSize = 20;
        dataTable.totalEntries = 100;

        assert.equal(pageSizeSelectDropdown.selected, 20);

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-20 of 100', 'Shows correct pagination counts.');
      });

    });

    // ------------------------------------------
    // Filtering Tests
    // ------------------------------------------
    suite('Filtering - remoteDataFiltering1', function () {

      var currentTableFixture2;

      setup(function (done) {
        currentTableFixture = document.getElementById('remoteDataFiltering1');
        currentTableFixture.tableData = minidata;

        currentTableFixture2 = document.getElementById('remoteDataFiltering2');
        currentTableFixture2.tableData = minidata;


        this.timeout(20*1000); // adding table data may take a while
        flush(function () { done(); });
      });

      teardown(function () { });

      test('fixture is created', function(done) {
        flush(function () {
          assert.isTrue(currentTableFixture !== null);
          assert.isTrue(currentTableFixture2 !== null);
          done();
        });
      });

      test('Send event with combined filter string for one column', function (done) {

          var dataTable = currentTableFixture;
          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","userEntry":"ab"}]', 'Requesting filter change');
            done();
          });

          lastNameFilter.value = 'ab';
          lastNameFilter.dispatchEvent(new Event('input'));
      });

      test('Send event with combined filter string for all columns', function (done) {

          var filters = [{name:'first', userEntry:'ab'}, {name:'last', userEntry:'cd'}];

          var dataTable = currentTableFixture2;
          var ahaTable = dataTable.querySelector('#dataTable');

          var firstNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(1) > input';
          var firstNameFilter = dataTable.querySelector(firstNameFilterSelector);

          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          var imageFilterSelector = 'div > div.tr.tr--filter > :nth-child(3) > input';
          var imageFilter = dataTable.querySelector(imageFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, JSON.stringify(filters), 'Requesting filter change on multiple columns');
            done();
          });

          ahaTable.filteredColumns = filters;
          imageFilter.dispatchEvent(new Event('input'));

      });
    });

    // ------------------------------------------
    // Sorting Tests
    // ------------------------------------------
    suite('Sorting - remoteDataSorting1', function () {

      var currentTableFixture2;

      setup(function (done) {
        currentTableFixture = document.getElementById('remoteDataSorting1');
        currentTableFixture.tableData = minidata;

        currentTableFixture2 = document.getElementById('remoteDataSorting2');
        currentTableFixture2.tableData = minidata;


        this.timeout(20*1000); // adding table data may take a while
        flush(function () { done(); });
      });

      teardown(function () { });

      test('fixture is created', function(done) {
        flush(function () {
          assert.isTrue(currentTableFixture !== null);
          assert.isTrue(currentTableFixture2 !== null);
          done();
        });
      });

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = currentTableFixture;
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"ascending"}]', 'Requesting sort change');
            done();
          });

          sortHeading.dispatchEvent(new Event('click'));
      });

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = currentTableFixture2;
          var sortHeadingSelector = 'div > div.tr .th:nth-of-type(2) .column-head.sorted-text-hover';
          var sortHeading = dataTable.querySelector(sortHeadingSelector);

          sortHeading.dispatchEvent(new Event('click'));

          dataTable.addEventListener('px-sort-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","direction":"descending"}]', 'Requesting sort change');
            done();
          });

          // second click
          sortHeading.dispatchEvent(new Event('click'));
      });

    });

  });

}


// // HELPER FUNCTIONS
// function simulateEvent(el, eventNameString, detail) {
//   let customEvent = null;
//   try {
//     customEvent = new Event(eventNameString, { "bubbles": true });
//   } catch (error) {
//     customEvent = document.createEvent("Event");
//     let bubbles = true;
//     let cancelable = false;
//     customEvent.initEvent(eventNameString, bubbles, cancelable);
//   }

//   el.dispatchEvent(customEvent, detail);
// }

/**
 * required for IE11
 * https://support.microsoft.com/en-us/help/3041186/internet-explorer-11-may-return-incorrect-javascript-typeof-result-for
 */
function _typeofComparison (val, comparator) {
  return (typeof val === comparator || false);
}
