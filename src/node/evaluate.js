export default function(value) {
  var data = this.data;
  return this.eachAfter(function(node) {
    var sum = +value(node.data, node.index, data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
};
