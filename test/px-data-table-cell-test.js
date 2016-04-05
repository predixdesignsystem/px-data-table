document.addEventListener("WebComponentsReady", function() {
  suite('Unit Tests for Data Table Cell', function() {
    var cell = Polymer.dom(document).querySelector('px-data-table-cell'),
        editCell = Polymer.dom(cell.root).querySelector('px-edit-cell'),
        inputEl = Polymer.dom(editCell).querySelector('input');

    test('Check cell element exists', function() {
      assert.isTrue(cell !== null);
    });

    test('Check edit updates model data', function(done){
      cell.addEventListener('save', function(evt){
        assert.equal(evt.detail.newValue, 'xxxx');
        done();
      });

      cell.click();
      var e = {'target':{value:'xxxx'}};
      inputEl.value = 'xxxx';
      flush(function(){
        cell.saveCell(e);
      });
    });
  });
});
