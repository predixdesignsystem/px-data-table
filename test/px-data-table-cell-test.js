document.addEventListener("WebComponentsReady", function() {
  suite('Unit Tests for Data Table Cell', function() {
    var cell = null,
        editCell = null,
        inputEl = null;

    setup(function() {
      cell = Polymer.dom(document).querySelector('px-data-table-cell');
      editCell = Polymer.dom(cell.root).querySelector('px-edit-cell');
      inputEl = Polymer.dom(editCell).querySelector('input');
    });

    teardown(function() {
    });

    test('Check cell element exists', function() {
      assert.isTrue(cell !== null);
    });

    test('Check edit updates model data', function(done){

      cell.addEventListener('save', assertFunction );

      cell.click();
      var e = {'target':{value:'xxxx'}};
      inputEl.value = 'xxxx';

      setTimeout(function(){
        cell.saveCell(e);
      },100);

      // function hoisting means this is defined before the test is executed
      function assertFunction(evt){

        assert.equal(evt.detail.newValue, 'xxxx');

        // prevent multiple "done" calls
        cell.removeEventListener('save', assertFunction);
        done();
      }
    });
  });
});
