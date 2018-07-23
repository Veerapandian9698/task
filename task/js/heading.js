function boldHTTP() {
  this.https = new XMLHttpRequest();
}

// Make an HTTP GET Request
boldHTTP.prototype.get = function(url, callback) {
  this.https.open('GET', url, true);

  let self = this;
  this.https.onload = function() {
    if(self.https.status === 200) {
      callback(null, self.https.responseText);
    } else {
      callback('Error: ' + self.https.status);
    }
  }

  this.https.send();
}




const https = new boldHTTP;

https.get('/json/heading.json', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    var obj1 = JSON.parse(posts);
    console.log(obj1);
    if(obj1!=null){
      
      var result1 = "";
      var template='<p class="text">{text}</p>';
       result1=template.replace("{text}",obj1.title);
       console.log(result1);
          document.getElementById('demo').innerHTML = result1;
        }
      }
    });