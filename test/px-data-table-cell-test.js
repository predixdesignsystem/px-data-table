/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener("WebComponentsReady", function() {

  runTests();
});

function runTests() {
  suite('Data Table Cell', function() {

    var cell = null;

    setup(function(done) {
      cell = Polymer.dom(document).querySelector('px-data-table-cell');
      this.timeout(10*1000); // adding table data may take a while
      flush(function () { done(); });
    });

    teardown(function (done) {
      flush(function () { done(); });
    });

    test('Check cell element exists', function() {
      assert.isTrue(cell !== null);
      assert.isTrue(true);
    });

    test('Check edit updates model data', function(done){

      var editCell = Polymer.dom(cell.root).querySelector('px-edit-cell');
      var inputEl = Polymer.dom(editCell).querySelector('input');

      cell.addEventListener('save', assertFunction );

      cell.click();
      var e = {'target':{value:'xxxx'}};
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
}
