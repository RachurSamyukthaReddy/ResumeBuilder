// function loadJSON(file,callback){
// var rawfile=new XMLHttpRequest();
// rawfile.overrideMimeType("application/json");
// rawfile.open("GET",file,true);
// rawfile.onreadystatechange=function() {
//   if(rawfile.readystate===4 && rawfile.status=="200"){
//     callback(rawfile.responseText);
//   }
// }
// rawfile.send();
// }
// loadJSON("resources/resume.json",function(text){
// var data=JSON.parse(text);
// console.log("praneeth");
//
// });



function loadJSON(file,callback) {
  var rawFile =new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function () {
    if (rawFile.readyState===4 && rawFile.status=="200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send();
}

loadJSON("resources/resume.json",function(text){
var data=JSON.parse(text);
  console.log(data);
});
