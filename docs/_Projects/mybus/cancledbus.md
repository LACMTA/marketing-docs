---
tags:
  - internal
  - pilot
  
---

# My Canceled Bus

After meeting with operations a pilot project to show canceled busses was initiated in Novemeber, 2021. The inspiration from the operations was the [Sacramento Bus Trip Cancellations tool](https://sacrt.com/alerts/tcalerts.aspx). The tool is also being used to pilot the use of the Digital Design System.

__Live Site__ - [https://lacmta.github.io/my_canceled_bus/](https://lacmta.github.io/my_canceled_bus/)

__Code Repository__ - https://github.com/LACMTA/my_canceled_bus

!!! info
    This application is in development and subject to change.

## Technologies Used

### Frontend

The website uses these libraries on the front end:

- Metro Digital Design System

### Backend

The data is parsed using vanilla JavaScript.

#### Data Source

Currently being received through static files, but this will change once it goes into production.

## Features

- List of Bus Lines that have canceled trips for the day

## Screenshot

![Example screenshot](./media/mycanceledbus.png)

## Setup

The website is statically generated, so you can clone the repository anywhere and the site will run.

## Future Development

### Website Usability

- Canceled bus trips reported every 15 minutes
- Automatic geolocation of users
- Map of bus stops

### GTFS development of canceled stops

An overarching goal is to adopt the data to GTFS format for display in real time environments. Doing so requires looking at [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/pythontutorial).
