var wms_layers = [];
var format_map_polylines_street3_0 = new ol.format.GeoJSON();
var features_map_polylines_street3_0 = format_map_polylines_street3_0.readFeatures(json_map_polylines_street3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_polylines_street3_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_map_polylines_street3_0.addFeatures(features_map_polylines_street3_0);var lyr_map_polylines_street3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map_polylines_street3_0, 
                style: style_map_polylines_street3_0,
                title: 'map_polylines_street3'
            });var format_howlandstreettrees_1 = new ol.format.GeoJSON();
var features_howlandstreettrees_1 = format_howlandstreettrees_1.readFeatures(json_howlandstreettrees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_howlandstreettrees_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_howlandstreettrees_1.addFeatures(features_howlandstreettrees_1);var lyr_howlandstreettrees_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_howlandstreettrees_1, 
                style: style_howlandstreettrees_1,
                title: '<img src="styles/legend/howlandstreettrees_1.png" /> howland street trees'
            });var format_map_polygons_2 = new ol.format.GeoJSON();
var features_map_polygons_2 = format_map_polygons_2.readFeatures(json_map_polygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_polygons_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_map_polygons_2.addFeatures(features_map_polygons_2);var lyr_map_polygons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map_polygons_2, 
                style: style_map_polygons_2,
                title: '<img src="styles/legend/map_polygons_2.png" /> map_polygons'
            });

lyr_map_polylines_street3_0.setVisible(true);lyr_howlandstreettrees_1.setVisible(true);lyr_map_polygons_2.setVisible(true);
var layersList = [lyr_map_polylines_street3_0,lyr_howlandstreettrees_1,lyr_map_polygons_2];
lyr_map_polylines_street3_0.set('fieldAliases', {'id': 'id', 'highway': 'highway', 'name': 'name', 'h11': 'h11', 'h7': 'h7', 'h9': 'h9', });
lyr_howlandstreettrees_1.set('fieldAliases', {'id': 'id', 'lat': 'lat', 'long': 'long', 'Address': 'Address', 'Tree Type': 'Tree Type', 'DBH in CM': 'DBH in CM', 'Height in M': 'Height in M', });
lyr_map_polygons_2.set('fieldAliases', {'id': 'id', 'source': 'source', 'highway': 'highway', 'building': 'building', 'addr:interpolation': 'addr:interpolation', 'name': 'name', 'surface': 'surface', 'lanes': 'lanes', 'access': 'access', 'addr:housenumber': 'addr:housenumber', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'footway': 'footway', 'oneway': 'oneway', 'building:levels': 'building:levels', 'parking': 'parking', 'landuse': 'landuse', 'sidewalk': 'sidewalk', 'railway': 'railway', 'cycleway': 'cycleway', 'addr:postcode': 'addr:postcode', 'wikipedia': 'wikipedia', 'college': 'college', 'created_by': 'created_by', 'area': 'area', 'website': 'website', 'lanes:forward': 'lanes:forward', 'lanes:backward': 'lanes:backward', 'addr:state': 'addr:state', 'description': 'description', 'attribution': 'attribution', 'bicycle': 'bicycle', 'wikidata': 'wikidata', });
lyr_map_polylines_street3_0.set('fieldImages', {'id': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'h11': 'TextEdit', 'h7': 'TextEdit', 'h9': 'TextEdit', });
lyr_howlandstreettrees_1.set('fieldImages', {'id': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'Address': 'TextEdit', 'Tree Type': 'TextEdit', 'DBH in CM': 'TextEdit', 'Height in M': 'TextEdit', });
lyr_map_polygons_2.set('fieldImages', {'id': 'TextEdit', 'source': 'TextEdit', 'highway': 'TextEdit', 'building': 'TextEdit', 'addr:interpolation': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'lanes': 'TextEdit', 'access': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'footway': 'TextEdit', 'oneway': 'TextEdit', 'building:levels': 'TextEdit', 'parking': 'TextEdit', 'landuse': 'TextEdit', 'sidewalk': 'TextEdit', 'railway': 'TextEdit', 'cycleway': 'TextEdit', 'addr:postcode': 'TextEdit', 'wikipedia': 'TextEdit', 'college': 'TextEdit', 'created_by': 'TextEdit', 'area': 'TextEdit', 'website': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes:backward': 'TextEdit', 'addr:state': 'TextEdit', 'description': 'TextEdit', 'attribution': 'TextEdit', 'bicycle': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_map_polylines_street3_0.set('fieldLabels', {'id': 'no label', 'highway': 'no label', 'name': 'no label', 'h11': 'no label', 'h7': 'no label', 'h9': 'no label', });
lyr_howlandstreettrees_1.set('fieldLabels', {'id': 'no label', 'lat': 'no label', 'long': 'no label', 'Address': 'no label', 'Tree Type': 'no label', 'DBH in CM': 'no label', 'Height in M': 'no label', });
lyr_map_polygons_2.set('fieldLabels', {'id': 'no label', 'source': 'no label', 'highway': 'no label', 'building': 'no label', 'addr:interpolation': 'no label', 'name': 'no label', 'surface': 'no label', 'lanes': 'no label', 'access': 'no label', 'addr:housenumber': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'footway': 'no label', 'oneway': 'no label', 'building:levels': 'no label', 'parking': 'no label', 'landuse': 'no label', 'sidewalk': 'no label', 'railway': 'no label', 'cycleway': 'no label', 'addr:postcode': 'no label', 'wikipedia': 'no label', 'college': 'no label', 'created_by': 'no label', 'area': 'no label', 'website': 'no label', 'lanes:forward': 'no label', 'lanes:backward': 'no label', 'addr:state': 'no label', 'description': 'no label', 'attribution': 'no label', 'bicycle': 'no label', 'wikidata': 'no label', });
lyr_map_polygons_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});