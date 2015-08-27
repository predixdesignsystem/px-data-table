pxDataTableBehaviors = {
  sort: function(a, b) {
    return this.descending
    ? (a.value < b.value ? 1 : -1)
    : (a.value > b.value ? 1 : -1);
  }
};
