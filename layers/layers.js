var wms_layers = [];

var format_sawah_0 = new ol.format.GeoJSON();
var features_sawah_0 = format_sawah_0.readFeatures(json_sawah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_0.addFeatures(features_sawah_0);
var lyr_sawah_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_0, 
                style: style_sawah_0,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_0.png" /> sawah'
            });
var format_hutan_1 = new ol.format.GeoJSON();
var features_hutan_1 = format_hutan_1.readFeatures(json_hutan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_1.addFeatures(features_hutan_1);
var lyr_hutan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_1, 
                style: style_hutan_1,
                popuplayertitle: "hutan",
                interactive: true,
                title: '<img src="styles/legend/hutan_1.png" /> hutan'
            });
var format_rt_2 = new ol.format.GeoJSON();
var features_rt_2 = format_rt_2.readFeatures(json_rt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_2.addFeatures(features_rt_2);
var lyr_rt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_2, 
                style: style_rt_2,
                popuplayertitle: "rt",
                interactive: true,
    title: 'rt<br />\
    <img src="styles/legend/rt_2_0.png" /> Rt 001 Rw 1<br />\
    <img src="styles/legend/rt_2_1.png" /> Rt 002 Rw 1<br />\
    <img src="styles/legend/rt_2_2.png" /> Rt 003 Rw 1<br />\
    <img src="styles/legend/rt_2_3.png" /> Rt 004 Rw 1<br />\
    <img src="styles/legend/rt_2_4.png" /> Rt 005 Rw 2<br />\
    <img src="styles/legend/rt_2_5.png" /> Rt 006 Rw 2<br />\
    <img src="styles/legend/rt_2_6.png" /> Rt 007 Rw 2<br />\
    <img src="styles/legend/rt_2_7.png" /> Rt 008 Rw 3<br />\
    <img src="styles/legend/rt_2_8.png" /> Rt 009 Rw 3<br />\
    <img src="styles/legend/rt_2_9.png" /> Rt 010 Rw 3<br />\
    <img src="styles/legend/rt_2_10.png" /> Rt 011 Rw 4<br />\
    <img src="styles/legend/rt_2_11.png" /> Rt 012 Rw 4<br />\
    <img src="styles/legend/rt_2_12.png" /> Rt 013 Rw 4<br />\
    <img src="styles/legend/rt_2_13.png" /> Rt 014 Rw 4<br />\
    <img src="styles/legend/rt_2_14.png" /> Rt 015 Rw 4<br />'
        });
var format_batasdesa_3 = new ol.format.GeoJSON();
var features_batasdesa_3 = format_batasdesa_3.readFeatures(json_batasdesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_3.addFeatures(features_batasdesa_3);
var lyr_batasdesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_3, 
                style: style_batasdesa_3,
                popuplayertitle: "batas desa",
                interactive: true,
    title: 'batas desa<br />\
    <img src="styles/legend/batasdesa_3_0.png" /> Dusun Sidamulya<br />\
    <img src="styles/legend/batasdesa_3_1.png" /> Dusun Sidodadi<br />\
    <img src="styles/legend/batasdesa_3_2.png" /> <br />'
        });
var format_jalanpathtambakreja_line_4 = new ol.format.GeoJSON();
var features_jalanpathtambakreja_line_4 = format_jalanpathtambakreja_line_4.readFeatures(json_jalanpathtambakreja_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanpathtambakreja_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanpathtambakreja_line_4.addFeatures(features_jalanpathtambakreja_line_4);
var lyr_jalanpathtambakreja_line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanpathtambakreja_line_4, 
                style: style_jalanpathtambakreja_line_4,
                popuplayertitle: "jalan path — tambakreja_line",
                interactive: false,
                title: '<img src="styles/legend/jalanpathtambakreja_line_4.png" /> jalan path — tambakreja_line'
            });
var format_Tambakreja_poly_5 = new ol.format.GeoJSON();
var features_Tambakreja_poly_5 = format_Tambakreja_poly_5.readFeatures(json_Tambakreja_poly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_poly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_poly_5.addFeatures(features_Tambakreja_poly_5);
var lyr_Tambakreja_poly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_poly_5, 
                style: style_Tambakreja_poly_5,
                popuplayertitle: "Tambakreja_poly",
                interactive: true,
                title: '<img src="styles/legend/Tambakreja_poly_5.png" /> Tambakreja_poly'
            });
var format_sungaitambakreja_line_6 = new ol.format.GeoJSON();
var features_sungaitambakreja_line_6 = format_sungaitambakreja_line_6.readFeatures(json_sungaitambakreja_line_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaitambakreja_line_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaitambakreja_line_6.addFeatures(features_sungaitambakreja_line_6);
var lyr_sungaitambakreja_line_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaitambakreja_line_6, 
                style: style_sungaitambakreja_line_6,
                popuplayertitle: "sungai — tambakreja_line",
                interactive: true,
                title: '<img src="styles/legend/sungaitambakreja_line_6.png" /> sungai — tambakreja_line'
            });
var format_jalanresidentialtambakreja_linecopy_7 = new ol.format.GeoJSON();
var features_jalanresidentialtambakreja_linecopy_7 = format_jalanresidentialtambakreja_linecopy_7.readFeatures(json_jalanresidentialtambakreja_linecopy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanresidentialtambakreja_linecopy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanresidentialtambakreja_linecopy_7.addFeatures(features_jalanresidentialtambakreja_linecopy_7);
var lyr_jalanresidentialtambakreja_linecopy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanresidentialtambakreja_linecopy_7, 
                style: style_jalanresidentialtambakreja_linecopy_7,
                popuplayertitle: "jalan residential — tambakreja_line copy",
                interactive: true,
                title: '<img src="styles/legend/jalanresidentialtambakreja_linecopy_7.png" /> jalan residential — tambakreja_line copy'
            });
var format_jala_raya_cisengkol_8 = new ol.format.GeoJSON();
var features_jala_raya_cisengkol_8 = format_jala_raya_cisengkol_8.readFeatures(json_jala_raya_cisengkol_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jala_raya_cisengkol_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jala_raya_cisengkol_8.addFeatures(features_jala_raya_cisengkol_8);
var lyr_jala_raya_cisengkol_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jala_raya_cisengkol_8, 
                style: style_jala_raya_cisengkol_8,
                popuplayertitle: "jala_raya_cisengkol",
                interactive: true,
                title: '<img src="styles/legend/jala_raya_cisengkol_8.png" /> jala_raya_cisengkol'
            });
var format_tambakrejapoint_9 = new ol.format.GeoJSON();
var features_tambakrejapoint_9 = format_tambakrejapoint_9.readFeatures(json_tambakrejapoint_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakrejapoint_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakrejapoint_9.addFeatures(features_tambakrejapoint_9);
var lyr_tambakrejapoint_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambakrejapoint_9, 
                style: style_tambakrejapoint_9,
                popuplayertitle: "tambakreja point",
                interactive: true,
                title: '<img src="styles/legend/tambakrejapoint_9.png" /> tambakreja point'
            });
var format_Tambakreja_point_10 = new ol.format.GeoJSON();
var features_Tambakreja_point_10 = format_Tambakreja_point_10.readFeatures(json_Tambakreja_point_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tambakreja_point_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tambakreja_point_10.addFeatures(features_Tambakreja_point_10);
var lyr_Tambakreja_point_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tambakreja_point_10, 
                style: style_Tambakreja_point_10,
                popuplayertitle: "Tambakreja_point",
                interactive: true,
                title: '<img src="styles/legend/Tambakreja_point_10.png" /> Tambakreja_point'
            });

lyr_sawah_0.setVisible(true);lyr_hutan_1.setVisible(true);lyr_rt_2.setVisible(true);lyr_batasdesa_3.setVisible(true);lyr_jalanpathtambakreja_line_4.setVisible(true);lyr_Tambakreja_poly_5.setVisible(true);lyr_sungaitambakreja_line_6.setVisible(true);lyr_jalanresidentialtambakreja_linecopy_7.setVisible(true);lyr_jala_raya_cisengkol_8.setVisible(true);lyr_tambakrejapoint_9.setVisible(true);lyr_Tambakreja_point_10.setVisible(true);
var layersList = [lyr_sawah_0,lyr_hutan_1,lyr_rt_2,lyr_batasdesa_3,lyr_jalanpathtambakreja_line_4,lyr_Tambakreja_poly_5,lyr_sungaitambakreja_line_6,lyr_jalanresidentialtambakreja_linecopy_7,lyr_jala_raya_cisengkol_8,lyr_tambakrejapoint_9,lyr_Tambakreja_point_10];
lyr_sawah_0.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_hutan_1.set('fieldAliases', {'id': 'id', 'lokasi': 'lokasi', 'nama': 'nama', });
lyr_rt_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'dusun': 'dusun', 'rw': 'rw', });
lyr_batasdesa_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_jalanpathtambakreja_line_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Tambakreja_poly_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_sungaitambakreja_line_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalanresidentialtambakreja_linecopy_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jala_raya_cisengkol_8.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', 'lebar': 'lebar', });
lyr_tambakrejapoint_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_Tambakreja_point_10.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'isced_leve': 'isced_leve', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'addr_house': 'addr_house', });
lyr_sawah_0.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_hutan_1.set('fieldImages', {'id': 'TextEdit', 'lokasi': 'TextEdit', 'nama': 'TextEdit', });
lyr_rt_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'dusun': 'TextEdit', 'rw': 'TextEdit', });
lyr_batasdesa_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_jalanpathtambakreja_line_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Tambakreja_poly_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_sungaitambakreja_line_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jalanresidentialtambakreja_linecopy_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jala_raya_cisengkol_8.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', 'lebar': 'TextEdit', });
lyr_tambakrejapoint_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_Tambakreja_point_10.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'isced_leve': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_sawah_0.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', });
lyr_hutan_1.set('fieldLabels', {'id': 'hidden field', 'lokasi': 'hidden field', 'nama': 'no label', });
lyr_rt_2.set('fieldLabels', {'id': 'hidden field', 'nama': 'no label', 'dusun': 'inline label - always visible', 'rw': 'inline label - always visible', });
lyr_batasdesa_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'jenis': 'hidden field', });
lyr_jalanpathtambakreja_line_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Tambakreja_poly_5.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - always visible', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'isced_leve': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'layer': 'hidden field', 'addr_house': 'hidden field', });
lyr_sungaitambakreja_line_6.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'no label', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'hidden field', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'hidden field', 'pump': 'no label', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_jalanresidentialtambakreja_linecopy_7.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'no label', 'width': 'inline label - always visible', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_jala_raya_cisengkol_8.set('fieldLabels', {'id': 'hidden field', 'nama_jln': 'inline label - always visible', 'lebar': 'no label', });
lyr_tambakrejapoint_9.set('fieldLabels', {'id': 'hidden field', 'nama': 'header label - always visible', 'jenis': 'inline label - always visible', });
lyr_Tambakreja_point_10.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - always visible', 'width': 'hidden field', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'isced_leve': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'layer': 'hidden field', 'addr_house': 'hidden field', });
lyr_Tambakreja_point_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});