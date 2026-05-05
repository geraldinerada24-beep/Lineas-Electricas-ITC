ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-6416019.176930, -3402701.127220, -6414274.546268, -3401785.196123]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lineas_1 = new ol.format.GeoJSON();
var features_Lineas_1 = format_Lineas_1.readFeatures(json_Lineas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lineas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lineas_1.addFeatures(features_Lineas_1);
var lyr_Lineas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lineas_1, 
                style: style_Lineas_1,
                popuplayertitle: 'Lineas',
                interactive: true,
    title: 'Lineas<br />\
    <img src="styles/legend/Lineas_1_0.png" /> Apendice Brazo A<br />\
    <img src="styles/legend/Lineas_1_1.png" /> Apendice Brazo B<br />\
    <img src="styles/legend/Lineas_1_2.png" /> Brazo A<br />\
    <img src="styles/legend/Lineas_1_3.png" /> Brazo B<br />' });
var format_ApendiceBrazoA_2 = new ol.format.GeoJSON();
var features_ApendiceBrazoA_2 = format_ApendiceBrazoA_2.readFeatures(json_ApendiceBrazoA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ApendiceBrazoA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApendiceBrazoA_2.addFeatures(features_ApendiceBrazoA_2);
cluster_ApendiceBrazoA_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ApendiceBrazoA_2
});
var lyr_ApendiceBrazoA_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ApendiceBrazoA_2, 
                style: style_ApendiceBrazoA_2,
                popuplayertitle: 'Apendice Brazo A',
                interactive: true,
                title: '<img src="styles/legend/ApendiceBrazoA_2.png" /> Apendice Brazo A'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lineas_1.setVisible(true);lyr_ApendiceBrazoA_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lineas_1,lyr_ApendiceBrazoA_2];
lyr_Lineas_1.set('fieldAliases', {'FID': 'FID', 'Linea': 'Linea', });
lyr_ApendiceBrazoA_2.set('fieldAliases', {'id': 'ID', 'Campo': 'Campo', 'Linea': 'Linea', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Lineas_1.set('fieldImages', {'FID': '', 'Linea': '', });
lyr_ApendiceBrazoA_2.set('fieldImages', {'id': 'TextEdit', 'Campo': 'Hidden', 'Linea': 'TextEdit', 'Lat': '', 'Long': '', });
lyr_Lineas_1.set('fieldLabels', {'FID': 'no label', 'Linea': 'no label', });
lyr_ApendiceBrazoA_2.set('fieldLabels', {'id': 'inline label - always visible', 'Linea': 'inline label - always visible', 'Lat': 'no label', 'Long': 'no label', });
lyr_ApendiceBrazoA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});