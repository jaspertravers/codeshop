
args = ['a','b']
body = "return a + b"

//(new Function (...args, body))(1,2)
out = (function(){
  exports.name = "hi"
});

console.log (out)
