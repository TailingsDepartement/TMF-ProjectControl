
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Joinedlayer_1": {
            "type": "geojson",
            "data": json_Joinedlayer_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_Joinedlayer_1_0",
            "type": "fill",
            "source": "Joinedlayer_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Project'], 'ATF 1A'], 1.0, ['==', ['get', 'Project'], 'Pit Bassalt'], 1.0, ['==', ['get', 'Project'], 'Road'], 1.0, ['==', ['get', 'Project'], 'Southdump'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Project'], 'ATF 1A'], '#eb51b5', ['==', ['get', 'Project'], 'Pit Bassalt'], '#e89e3e', ['==', ['get', 'Project'], 'Road'], '#89ea6b', ['==', ['get', 'Project'], 'Southdump'], '#32cbc6', '#ffffff']}
        }
,
        {
            "id": "lyr_Joinedlayer_1_4",
            "type": "symbol",
            "source": "Joinedlayer_1",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'Project'], 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#ffffff'}
        }
],
}