require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Legend, LayerList, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"ccd7bbfd631942d6a718069cff5da2ba" 
        }
      });
      
      var camera = new Camera({
        position: [
          30.5, // lon
          48.350, // lat
          2000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera
    });
  
    view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(0);

        var legend = new Legend({
          view: view,
          style: "cards",
          layerInfos: [{
            layer: featureLayer,
            title: "Civilian Engagements"
          }]
         }); 
       
   view.ui.add(legend, "bottom-left");
      
      var layerList = new LayerList({
  view: view
});
      view.ui.add(layerList, "bottom-right");
      
   });
   
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-right");
    
    [v1, v2, v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    v1.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 30.25, //lon
          y: 48, //lat
          z: 200000
        },
        tilt: 50,
        heading: 0
      });
    });
      
     v2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 37.75,
          y: 46.5,
          z: 200000
        },
        tilt: 40,
        heading: 0
      });
    });
   

    
     v3.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        position: {
          x: 36,
          y: 48.25,
          z: 200000
        },
        tilt: 40,
        heading: 0
      });
    });
  
//set up timeslider
  

     });
