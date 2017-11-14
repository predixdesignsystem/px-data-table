suite('Data Table Cell', function() {
  let cell;
  setup(function(done) {
    cell = fixture('px-data-table-cell-fixture');
    flush(()=>{
       done();
    });
  });

  test('Check cell element exists', function() {
    assert.isTrue(cell !== null);
  });

  test('Check edit updates model data', function(done){

    let editCell = Polymer.dom(cell.root).querySelector('px-edit-cell');
    let inputEl = Polymer.dom(editCell).querySelector('input');

    cell.addEventListener('save', assertFunction );

    cell.click();
    let e = {'target':{value:'xxxx'}};
    inputEl.value = 'xxxx';

    flush(function(){
      cell.saveCell(e);
    });

    // function hoisting means this is defined before the test is executed
    function assertFunction(evt){

      assert.equal(evt.detail.newValue, 'xxxx');

      // prevent multiple "done" calls
      cell.removeEventListener('save', assertFunction);
      done();
    }
  });
});
