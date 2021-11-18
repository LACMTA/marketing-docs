---
tags:
  - DRAFT
  - First-Last Mile
---

# First-Last Mile Map Styling

This project is used to help provide input for first last mile options.

## Resources


| Document Title | Link| Description|
|----|----|-----|
|**First/Last Mile On-Call Notes**|https://lacmta.sharepoint.com/:w:/s/FirstLastMile/EcnGhBJNfQ9MluHXf_ch1qcBG9W-uUIuFT8fadeuN-Y7ag?e=j9h6GL|Notes about the FLM for the consultants.
|**Notes on GIS Task**|https://paper.dropbox.com/doc/5.-Notes-on-GIS-Task--BV9rs~SVodjuXizmz6AjjnQyAg-CPQQzNE2AcE3VeM7NOi4r|


## Using the Metro basemap with QGIS

The Metro basemap is a map package that has two components that works as a bundle in ArcPro and ArcGIS Online, but needs to be added individually in QGIS as the following:
- Hybrid Raster Map Service
- Hybrid Vector tile Map

### URLs
The following are the direct URLs for the Metro basemap:

#### Hybrid Raster Map Service

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Raster_tile_Map/MapServer
```

#### Hybrid Vector tile Map

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Vector_tile_Map/VectorTileServer
```

Follow the instructions below to get started with using it in QGIS.

### Add the map server

!!! warning
    The map tiles will not show up when zoomed in beyond 1:4513 due to limitations on tiling.


1. Go to `Layer` then `Add Layer` and click on `Add ArcGIS Map Service Layer`.

<img src="../media/flm_basemap.png" width="600">

2. Click on `New`

<img src="../media/map_server_connect_1.png" width="600">

3. Add the following URL to the URL section:

<img src="../media/map_server_connect_2.png" width="600">

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Raster_tile_Map/MapServer
```

4. Click OK.
<img src="../media/map_server_connect_2.png" width="600">

5. Click `Add`.

<img src="../media/map_server_connect_3.png" width="600">

6. Now you should have the lines added:

<img src="../media/map_server_connect_4.png" width="600">

For more help, please check this [link](https://gis.stackexchange.com/questions/202615/adding-arcgis-online-services-to-qgis).

### Add the vector tile

1. Go to `Layer` then `Add Layer` and click on `Add Vector Tile Layer`.

<img src="../media/map_server_connect_0.png" width="600">

2. Click on `New` then `New ArcGIS Vector Tile Service Connection...`

<img src="../media/map_server_connect.png" width="600">

3. Under `Service URL` add the following URL:

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Vector_tile_Map/VectorTileServer
```

4. FIll in the `Name` then click `OK`
<img src="../media/map_server_connect_2.png" width="600">

5. Click `Add`.
<img src="../media/map_server_connect_3.png" width="600">

6. Now you should have the basemap added:
