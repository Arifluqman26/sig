var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.format.GeoJSON();
var features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = format_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.readFeatures(json_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.addFeatures(features_LapakGIScomBatas_Kecamatan_BIG_PPBW_0);var lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomBatas_Kecamatan_BIG_PPBW_0, 
                style: style_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,
                title: '<img src="styles/legend/LapakGIScomBatas_Kecamatan_BIG_PPBW_0.png" /> [LapakGIS.com] Batas_Kecamatan_BIG_PPBW'
            });var format_dataproduksiikan2021_1 = new ol.format.GeoJSON();
var features_dataproduksiikan2021_1 = format_dataproduksiikan2021_1.readFeatures(json_dataproduksiikan2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dataproduksiikan2021_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_dataproduksiikan2021_1.addFeatures(features_dataproduksiikan2021_1);var lyr_dataproduksiikan2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dataproduksiikan2021_1, 
                style: style_dataproduksiikan2021_1,
                title: '<img src="styles/legend/dataproduksiikan2021_1.png" /> data produksi ikan 2021'
            });

lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.setVisible(true);lyr_dataproduksiikan2021_1.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0,lyr_dataproduksiikan2021_1];
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_dataproduksiikan2021_1.set('fieldAliases', {'prd ikan': 'prd ikan', 'volume': 'volume', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_dataproduksiikan2021_1.set('fieldImages', {'prd ikan': 'TextEdit', 'volume': 'TextEdit', });
lyr_LapakGIScomBatas_Kecamatan_BIG_PPBW_0.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', });
lyr_dataproduksiikan2021_1.set('fieldLabels', {'prd ikan': 'inline label', 'volume': 'inline label', });
lyr_dataproduksiikan2021_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});