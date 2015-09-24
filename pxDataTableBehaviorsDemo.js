var pxDataTableBehaviors = {
  sortColumn: function(a, b) {
    return this.descending
    ? (a.value < b.value ? 1 : -1)
    : (a.value > b.value ? 1 : -1);
  },
  filterMarkupVal: function(searchString, cellValue){
    var lhs = cellValue.slice(cellValue.indexOf('>') + 1);
    var content = lhs.substr(0 ,lhs.indexOf('<'));

    return (content.toString().toLowerCase().indexOf(searchString.toString().toLowerCase()) > -1);
  },
  filterWholeWord: function(searchString, cellValue){
    return (searchString.toString().toLowerCase() === cellValue.toString().toLowerCase());
  }
};
