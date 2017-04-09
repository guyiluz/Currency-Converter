
///the defalt values
var data=""

 var geoesx=""
 var GoeOne =""

 var GeoTwo =""


///API request for dropdown manu
 function getSymbol(symbol){
request('GET', "http://api.fixer.io/latest").done(function (res) {
data =  JSON.parse(res.getBody());
getGes(data,symbol)

});
}
///API request for dropdown manu
request('GET', "https://openexchangerates.org/api/currencies.json").done(function (res) {
symbol =  JSON.parse(res.getBody());
getSymbol(symbol);

});
///chage the Base
function getBase (GoeOne,GeoTwo){
  if(!formVlad (GoeOne,GeoTwo)){
  return false

  }
  var GoeOne = GoeOne
    var GeoTwo = GeoTwo
    var dataBase=""
  request('GET', "http://api.fixer.io/latest?base="+GoeOne).done(function (res) {
  dataBase =  JSON.parse(res.getBody());
  var data= dataBase
getResult(GoeOne,GeoTwo,data)
  });

}

/// get the results

function getResult(GoeOne,GeoTwo,data) {
  console.log(GoeOne,GeoTwo,data);
  var input = document.getElementById('inputOne').value
  var result = (input * data.rates[GeoTwo]).toFixed(2)
  console.log(input)
  renderResults(result,GoeOne,GeoTwo,input)
}


//renderResults
function renderResults(result,GoeOne,GeoTwo,input){
var renderDiv =document.getElementById('res');

renderDiv.innerHTML+='<div class=res>'+'<h3> '+input+' '+GoeOne+'  Worth  '+result+' '+GeoTwo+'</h3>'


}
///getting the geos for the APi
function getGes (data,symbol){
  var base= data.base
var symbol=symbol
var str= JSON.stringify(data.rates)
var geo= str.replace(/[^a-z]|\s+|\r?\n|\r/gmi, " ").trim().replace( /(?!\s+$)\s+/g, " " ).replace(/[“”‘’]/g,'').split(" ");;
console.log(geo);
geoesx=geo
rednerHTML(geo,base,symbol)
}

/// redring the gep option tags
function rednerHTML(geo,base,symbol) {

console.log("typeof symbol",typeof symbol);
console.log(symbol[base]);
var base= base
if(base){
  var selectOne = document.getElementById("selectOne");
  var selectTwo = document.getElementById("selectTwo");
  selectOne.innerHTML+= '<option value="">'+base+'('+symbol[base]+')</option>'
  selectTwo.innerHTML+= '<option value="">'+base+'('+symbol[base]+')</option>'

}
var selectOne = document.getElementById("selectOne");
var selectTwo = document.getElementById("selectTwo");

for(i=0;i<geo.length;i++){

var render =symbol[geo[i]]


selectOne.innerHTML+= '<option class="optionsSlectOne" value=" ">'+ geo[i]+'<span style="color:blue">'+ '('+render+')'+' </span>'+'</option>'

selectTwo.innerHTML+= '<option value='+render+'>'+ geo[i]+'<p> ('+render+') </p>'+'</option>'
}
}

///getting that selecetd value
function getSelected() {

var e = document.getElementById("selectOne");
var SelectedGeoOne = e.options[e.selectedIndex].text.match(/^\b\w{3}\b/);
console.log(SelectedGeoOne[0])
var eTwo = document.getElementById("selectTwo");
var SelectedGeoTwo = eTwo.options[eTwo.selectedIndex].text.match(/^\b\w{3}\b/);
GoeOne= SelectedGeoOne[0]
 GeoTwo= SelectedGeoTwo[0]

}



//formvaldiotn
function formVlad (GoeOne,GeoTwo) {

var result=document.getElementById('inputOne').value
  var renderDiv =document.getElementById('res');
if (GoeOne.length==0 || GeoTwo.length==0){

  renderDiv.innerHTML=""
  renderDiv.innerHTML+='<div class=waring>'+'<h3>Please select Currency</h3>'
  return false

  }
  if(result==0){
    var renderDiv =document.getElementById('res');
  renderDiv.innerHTML=""
    renderDiv.innerHTML+='<div class=waring>'+'<h3>Please add amount </h3>'

    return false

    }
      var renderDiv =document.getElementById('res');
    renderDiv.innerHTML=""
return true
  }
