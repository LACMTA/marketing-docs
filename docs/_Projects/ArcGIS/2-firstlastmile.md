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

!!! warning
    In order to use the Metro basemap you must use QGIS 3.16 or later, due to the lack of support for vector tiles in previous versions.

The Metro basemap is a map package that has two components that works as a bundle in ArcPro and ArcGIS Online, but needs to be added individually in QGIS as the following:

- Hybrid Raster Map Service
- Hybrid Vector tile Map

There are two ways to utilize the Metro basemap in QGIS:

## Method 1 - Using the qgz file

Download the following QGZ file and open it in QGIS:

[Custom_Basemap_for_Consultants.qgz](./Custom_Basemap_for_Consultants.qgz)

## Method 2 - Add the basemap layers individually

This method has three steps:

1) [Adding the Hybrid Raster Map Service](#step-1---add-the-map-server)
2) [Adding the Vector Tile Service](#step-2---add-the-vector-tile)
3) [Adding the font styles](#step-3---add-the-font-styles)
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

#### Font Styles to import for Vector tile Map

[Custom_Basemap_Font_Styles.qml](./Custom_Basemap_Font_Styles.qml)

The instructions go through the process step-by-step.

### Step 1 - Add the map server

!!! important
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

### Step 2 - Add the vector tile

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

### Step 3 - Adding the font styles

!!! warning
    You will need the Dinn, Dinn Pro, Dinn Bold, and Dinn Condensed fonts installed in order to follow this part of the guide.

Download the Metro QGIS font style definition here:

[Custom_Basemap_Font_Styles.qml](./Custom_Basemap_Font_Styles.qml)

Right click on the Vector Tile layer `Metro Vector Tile Map` 

<img src="../media/fonts-1.png" width="600">

Go to `Properties`:

<img src="../media/fonts-2.png" width="600">

Click on `Labels`:

<img src="../media/fonts-3.png" width="600">

Click on `Style`:

<img src="../media/fonts-4.png" width="600">

Click on `Load Style...`:

<img src="../media/fonts-5.png" width="600">

Click on the `...` button to find the downloaded QGIS Styles that were provided at the start.

<img src="../media/fonts-6.png" width="300">

Select it:

<img src="../media/fonts-7.png" width="300">

Click `Load Style`:

<img src="../media/fonts-8.png" width="300">

Click `OK`:

<img src="../media/fonts-9.png" width="400">

Your basemap should now look like the following:

<img src="../media/fonts-10.png" width="600">

### Additional Help

For more help, please check this [link](https://gis.stackexchange.com/questions/202615/adding-arcgis-online-services-to-qgis).
