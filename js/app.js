//created by Corey Baker
//with ok coding practices and lots of heart

//user configurations - beta 
var webmapID = "ec334b4036f64ba8bb4155f517d4eb66";
//1a40fa5cc1ab4569b79f45444d728067
//ec334b4036f64ba8bb4155f517d4eb66

//end global configurations 


require([
"esri/map",
"esri/arcgis/utils",
"esri/arcgis/Portal", 
"dojo/ready", 
"dojo/parser"

],


function(Map, Utils, Portal, Ready, Parser){


Utils.createMap(webmapID, "map").then(function(response){
	Map = response.map;
});


}); //end requires 