---
tags:
  - DRAFT
  - First-Last Mile
---

# First-Last Mile Map Styling

This project is used to help provide input for first last mile options.

## Resources


| Document Title | Link |
|----|----|
|**Metro First/Last Mile Projects – Graphic Guidelines**|https://paper.dropbox.com/doc/Metro-FirstLast-Mile-Projects-Graphic-Guidelines--BXv5EkSskolKgNieB0qnkQS0AQ-VbAlDq6BFyTdg2amOkXQr
|**Metro First/Last Mile Projects – Map Design Elements Additional Guidance**|https://paper.dropbox.com/doc/Metro-FirstLast-Mile-Projects-Map-Design-Elements-Additional-Guidance--BXstUUQbrAeY8pDgfHqlT1VNAQ-eLU9UJgFntZTXcPUpGhen|
|**First/Last Mile SVG Icons**|https://paper.dropbox.com/doc/FLM-SVG-Icon-Links-Draft--BWhn6cOIYyOaK9eahK6q~CTWAQ-p6MZrfH555vuDKJQVWqB9|

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

The instructions below show how to add them in QGIS.

### Add the map server

!!! warning
    The map tiles will not show up when zoomed in beyond `1:4513` due to limitations on tiling.

Go to `Layer` then `Add Layer` and click on `Add ArcGIS Map Service Layer`.

<img src="../media/flm_basemap.png" width="600">

Click on `New`

<img src="../media/map_server_connect_1.png" width="600">

Add the following URL to the URL section:

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Raster_tile_Map/MapServer
```

Click OK.

<img src="../media/map_server_connect_2.png" width="400">

Click `Add`.

<img src="../media/map_server_connect_3.png" width="600">

Now you should have the lines added:

<img src="../media/map_server_connect_4.png" width="600">

### Add the vector tile

Go to `Layer` then `Add Layer` and click on `Add Vector Tile Layer`.

<img src="../media/vector_tile_connect_0.png" width="600">

Click on `New` then `New ArcGIS Vector Tile Service Connection...`

<img src="../media/vector_tile_connect.png" width="300">

Under `Service URL` add the following URL:

```
https://tiles.arcgis.com/tiles/TNoJFjk1LsD45Juj/arcgis/rest/services/Hybrid_Vector_tile_Map/VectorTileServer
```

FIll in the `Name` then click `OK`

<img src="../media/vector_tile_connect_2.png" width="600">

Click `Add`.

<img src="../media/vector_tile_connect_3.png" width="600">

Congrats, you are now ready to work with the basemap!

<img src="../media/vector_tile_connect_4.png" width="600">

### Additional Help

For more help, please check this [link](https://gis.stackexchange.com/questions/202615/adding-arcgis-online-services-to-qgis).
