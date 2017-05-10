#! /usr/bin/env node
console.log(process.argv);
let unirest = require('unirest');

console.log("consume the api now");

/*unirest.post('http://httpbin.org/post')
.headers({ 'Accept': 'application/json' })
.send({ "parameter": 23, "foo": "bar" })
.end(function (response) {
  console.log(response.body);
});


*/



 unirest.get("http://apilayer.net/api/live?access_key=4218e4d1804ec8c00759a1f9558ead3e")
  
  .headers("Accept", "application/json")
  
  .end(function (result) {
  
console.log(result.body);


  //  res.render('name-of-the-page-according-to-your-engine', {
    //  layout: 'some-layout-if-you-want',
      //markup:  result.body.any-property,
    })

  ;

