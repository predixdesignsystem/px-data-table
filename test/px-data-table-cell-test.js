suite('Data Table Cell', (done)=>{
  let cell;
  setup((done)=> {
    cell = fixture('px-data-table-cell-fixture');
    flush(()=>{
       done();
    });
  });

  test('Check cell element exists', ()=>{
    assert.isTrue(cell !== null);
  });

  test('Check edit updates model data', (done)=>{

    let editCell = Polymer.dom(cell.root).querySelector('px-edit-cell');
    let inputEl = Polymer.dom(editCell).querySelector('input');

    // function hoisting means this is defined before the test is executed
    let assertFunction = (evt)=>{

      assert.equal(evt.detail.newValue, 'xxxx');

      // prevent multiple "done" calls
      cell.removeEventListener('save', assertFunction);
      done();
    }

    cell.addEventListener('save', assertFunction );

    cell.click();
    let e = {'target':{value:'xxxx'}};
    inputEl.value = 'xxxx';

    flush(()=>{
      cell.saveCell(e);
    });
  });
});
