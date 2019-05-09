function secondTask(arr) {
  var str = '<' + arr[0] + '>';
  
  arr.slice(1).forEach(function(v) {
	  
    if (Array.isArray(v))
      str += secondTask(v);
    else
      str += v.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  })
  return str + '</' + arr[0] + '>';
}

[['div'],['h1', 'Text'],['span', 'More', 'Text'],['a', ['b', 'More'], ' Text'],['p', '<b>Text</b>']].forEach(function(d) {
  console.log(JSON.stringify(d) + ' => ' + secondTask(d));
})