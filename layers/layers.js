ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([429865.614897, 6762643.879258, 437207.531731, 6767282.715072]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
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
var format_ApendiceBrazoB_2 = new ol.format.GeoJSON();
var features_ApendiceBrazoB_2 = format_ApendiceBrazoB_2.readFeatures(json_ApendiceBrazoB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ApendiceBrazoB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApendiceBrazoB_2.addFeatures(features_ApendiceBrazoB_2);
var lyr_ApendiceBrazoB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApendiceBrazoB_2, 
                style: style_ApendiceBrazoB_2,
                popuplayertitle: 'Apendice Brazo B',
                interactive: true,
                title: '<img src="styles/legend/ApendiceBrazoB_2.png" /> Apendice Brazo B'
            });
var format_BrazoB_3 = new ol.format.GeoJSON();
var features_BrazoB_3 = format_BrazoB_3.readFeatures(json_BrazoB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BrazoB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrazoB_3.addFeatures(features_BrazoB_3);
var lyr_BrazoB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrazoB_3, 
                style: style_BrazoB_3,
                popuplayertitle: 'Brazo B',
                interactive: true,
                title: '<img src="styles/legend/BrazoB_3.png" /> Brazo B'
            });
var format_ApendiceBrazoA_4 = new ol.format.GeoJSON();
var features_ApendiceBrazoA_4 = format_ApendiceBrazoA_4.readFeatures(json_ApendiceBrazoA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ApendiceBrazoA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ApendiceBrazoA_4.addFeatures(features_ApendiceBrazoA_4);
var lyr_ApendiceBrazoA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ApendiceBrazoA_4, 
                style: style_ApendiceBrazoA_4,
                popuplayertitle: 'Apendice Brazo A',
                interactive: true,
                title: '<img src="styles/legend/ApendiceBrazoA_4.png" /> Apendice Brazo A'
            });
var format_BrazoA_5 = new ol.format.GeoJSON();
var features_BrazoA_5 = format_BrazoA_5.readFeatures(json_BrazoA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BrazoA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrazoA_5.addFeatures(features_BrazoA_5);
var lyr_BrazoA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrazoA_5, 
                style: style_BrazoA_5,
                popuplayertitle: 'Brazo A',
                interactive: true,
                title: '<img src="styles/legend/BrazoA_5.png" /> Brazo A'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lineas_1.setVisible(true);lyr_ApendiceBrazoB_2.setVisible(true);lyr_BrazoB_3.setVisible(true);lyr_ApendiceBrazoA_4.setVisible(true);lyr_BrazoA_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lineas_1,lyr_ApendiceBrazoB_2,lyr_BrazoB_3,lyr_ApendiceBrazoA_4,lyr_BrazoA_5];
lyr_Lineas_1.set('fieldAliases', {'FID': 'FID', 'Linea': 'Linea', });
lyr_ApendiceBrazoB_2.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Linea': 'Linea', });
lyr_BrazoB_3.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Linea': 'Linea', });
lyr_ApendiceBrazoA_4.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Linea': 'Linea', 'Fotos': 'Fotos', });
lyr_BrazoA_5.set('fieldAliases', {'id': 'id', 'Campo': 'Campo', 'Linea': 'Linea', });
lyr_Lineas_1.set('fieldImages', {'FID': '', 'Linea': '', });
lyr_ApendiceBrazoB_2.set('fieldImages', {'id': '', 'Campo': '', 'Linea': '', });
lyr_BrazoB_3.set('fieldImages', {'id': '', 'Campo': '', 'Linea': '', });
lyr_ApendiceBrazoA_4.set('fieldImages', {'id': '', 'Campo': '', 'Linea': '', 'Fotos': '', });
lyr_BrazoA_5.set('fieldImages', {'id': '', 'Campo': '', 'Linea': '', });
lyr_Lineas_1.set('fieldLabels', {'FID': 'no label', 'Linea': 'inline label - always visible', });
lyr_ApendiceBrazoB_2.set('fieldLabels', {'id': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Linea': 'inline label - always visible', });
lyr_BrazoB_3.set('fieldLabels', {'id': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Linea': 'inline label - always visible', });
lyr_ApendiceBrazoA_4.set('fieldLabels', {'id': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Linea': 'inline label - always visible', 'Fotos': 'inline label - always visible', });
lyr_BrazoA_5.set('fieldLabels', {'id': 'inline label - always visible', 'Campo': 'inline label - always visible', 'Linea': 'inline label - always visible', });
lyr_BrazoA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});