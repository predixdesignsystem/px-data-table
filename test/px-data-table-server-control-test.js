var remoteDataFixture1, remoteDataFixture2, remoteDataFixture3, remoteDataFilteringFixture1, remoteDataFilteringFixture2, remoteDataSortingFixture1, remoteDataSortingFixture2;

  var minidata =
  [
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

  remoteDataFixture1 = document.getElementById('remoteData1');
  remoteDataFixture1.tableData = minidata;

  remoteDataFixture2 = document.getElementById('remoteData2');
  remoteDataFixture2.tableData = minidata;

  remoteDataFixture3 = document.getElementById('remoteData3');
  remoteDataFixture3.tableData = minidata;

  remoteDataFilteringFixture1 = document.getElementById('remoteDataFiltering1');
  remoteDataFilteringFixture1.tableData = minidata;

  remoteDataFilteringFixture2 = document.getElementById('remoteDataFiltering2');
  remoteDataFilteringFixture2.tableData = minidata;

  remoteDataSortingFixture1 = document.getElementById('remoteDataSorting1');
  remoteDataSortingFixture1.tableData = minidata;

  remoteDataSortingFixture2 = document.getElementById('remoteDataSorting2');
  remoteDataSortingFixture2.tableData = minidata;

  runTests();
});



function runTests() {

  suite('Unit Tests for data remote property being `true`', function () {

    suite('Page 1', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture1.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture1.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 1-10 of 100', function(){
        var paginationSpan = document.getElementById('remoteData1').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert(page1IconClassList.indexOf('btn--icon') > -1 && page1IconClassList.indexOf('btn--pagination--number') > -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert.equal(page1IconClassList.indexOf('btn--bare'), -1, 'Does not have btn-bare class.');
      });

      test('Page 2 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData1').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert(page2IconClassList.indexOf('btn--icon') === -1 && page2IconClassList.indexOf('btn--pagination--number') === -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert(page2IconClassList.indexOf('btn--bare') > -1, 'Does not have btn-bare class.');
      });

      test('Clicking Next Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData1');
        var pageChangeButton = dataTable.querySelector('.paging.px-pagination .btn--pagination.next');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 2, 'Requesting page 2');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 2', function() {
        var page = 2;
        var dataTable = document.getElementById('remoteData1');

        dataTable.firstItemIndex = 11;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert(pageNIconClass.indexOf('btn--icon') > -1 && pageNIconClass.indexOf('btn--pagination--number') > -1,
          'Page '+page+' is selected.');
      });

    });

    suite('Page 2', function () {

      test('Default pagination size is 10', function(){
        assert.equal(remoteDataFixture2.pageSize, 10, 'Default page size should be 10 rows.');
      });

      test('Default rows displayed size is 10', function(){
        var tb = Polymer.dom(remoteDataFixture2.root).querySelector('aha-table'),
            rowCount = Polymer.dom(tb.root).querySelectorAll('.rows').length;
        assert.equal(rowCount, 10, 'Default rows displayed should be 10 rows.');
      });

      test('Pagination shows 11-20 of 100', function(){
        var paginationSpan = document.getElementById('remoteData2').querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '11-20 of 100', 'Shows correct pagination counts.');
      });

      test('Page 1 should NOT be selected', function(){
        var paginationPager = document.getElementById('remoteData2').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page1IconClassList = paginationPager.children[0].classList.toString().split(' ');
        assert(page1IconClassList.indexOf('btn--icon') === -1 && page1IconClassList.indexOf('btn--pagination--number') === -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert(page1IconClassList.indexOf('btn--bare') > -1, 'Does not have btn-bare class.');
      });

      test('Page 2 should be selected', function() {
        var paginationPager = document.getElementById('remoteData2').querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var page2IconClassList = paginationPager.children[1].classList.toString().split(' ');
        assert(page2IconClassList.indexOf('btn--icon') > -1 && page2IconClassList.indexOf('btn--pagination--number') > -1,
          'Has btn-icon and btn--pagination--number classes.');
        assert.equal(page2IconClassList.indexOf('btn--bare'), -1, 'Does not have btn-bare class.');
      });

      test('Clicking Previous Page button fires a `px-page-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData2');
        var pageChangeButton = dataTable.querySelector('.paging.px-pagination .btn--pagination.previous');

        dataTable.addEventListener('px-page-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 1, 'Requesting page 1');
          done();
        });

        pageChangeButton.click();
      });

      test('Updating properties triggers appearance of Page 1', function() {
        var page = 1;
        var dataTable = document.getElementById('remoteData2');

        dataTable.firstItemIndex = 1;
        dataTable.totalEntries = 50;

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-10 of 50', 'Shows correct pagination counts.');

        var paginationPager = dataTable.querySelector('.pager.px-pagination');
        // note: classList does not have prototype Array methods
        var pageNIconClass = paginationPager.children[page - 1].classList.toString().split(' ');
        assert(pageNIconClass.indexOf('btn--icon') > -1 && pageNIconClass.indexOf('btn--pagination--number') > -1,
          'Page '+page+' is selected.');
      });

    });

    suite('Rows per Page Dropdown', function () {

      test('On change, it fires a `px-page-size-change-intent` event', function(done) {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('#pageSizeSelect');


        dataTable.addEventListener('px-page-size-change-intent', (evt) => {
          assert(true, 'Event is triggered');
          assert.equal(parseInt(evt.detail,10), 50, 'Requesting page size of 50');
          done();
        });

        pageSizeSelectDropdown.selectedIndex = 2;
        // trigger "change" even that would happen naturally in a browser
        simulateChangeEvent(pageSizeSelectDropdown);
      });


      test('Updates value accordingly when value is passed in', function() {
        var dataTable = document.getElementById('remoteData3');
        var pageSizeSelectDropdown = dataTable.querySelector('#pageSizeSelect');

        dataTable.pageSize = 20;
        dataTable.totalEntries = 100;

        assert.equal(pageSizeSelectDropdown.selectedIndex, 1);

        var paginationSpan = dataTable.querySelector('.summary.px-pagination');
        var paginationTextString = paginationSpan.textContent.replace(/\s\s*/g,' ').trim();
        assert.equal(paginationTextString, '1-20 of 100', 'Shows correct pagination counts.');
      });

    });

    suite('Filtering', function () {

      test('Send event with combined filter string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataFiltering1');
          var lastNameFilterSelector = 'div > div.tr.tr--filter > :nth-child(2) > input';
          var lastNameFilter = dataTable.querySelector(lastNameFilterSelector);

          dataTable.addEventListener('px-filter-change-intent', (evt) => {
            assert(true, 'Event is triggered');
            assert.equal(evt.detail, '[{"name":"last","userEntry":"ab"}]', 'Requesting filter change');
            done();
          });

          lastNameFilter.value = 'ab';
          lastNameFilter.dispatchEvent(new Event('keyup'));
      });

      test('Send event with combined filter string for all columns', function (done) {

          var filters = [{name:'first', userEntry:'ab'}, {name:'last', userEntry:'cd'}];

          var dataTable = document.querySelector('#remoteDataFiltering2');
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
          imageFilter.dispatchEvent(new Event('keyup'));

      });
    });

    suite('Sorting', function () {

      test('Send event with combined sort string for one column', function (done) {

          var dataTable = document.querySelector('#remoteDataSorting1');
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

          var dataTable = document.querySelector('#remoteDataSorting2');
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


// HELPER FUNCTIONS

function simulateChangeEvent(el)
{
    if (document.all)
    {
        el.change();
    }
    else
    {
        var evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('change', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null );
        el.dispatchEvent(evObj);
    }
}
