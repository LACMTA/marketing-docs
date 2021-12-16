# Developer.Metro.net

This site contains information and connections to public-facing Metro data and APIs for software developers.

## External Links

|Content|Details|
|-------|-----|
|[Swiftly's API Key Request Form](https://forms.gle/hXGY6kRGAChDqWwz5)|Sign-up for a Swiftly API key|
|[Metro Swiftly migration](https://developer.metro.net/api)|Find out information on the migration|
|[Swiftly Docs](https://realtime-docs.goswift.ly/)| Official documentation for the Swiftly API.
|[Swiftly Metro API Sandbox](https://dashboard.goswift.ly/lametro/api-guide/reference)*|Metro specific API sandbox for Swiftly

*Requires a Swiftly API key to access.


## Real Time API

!!! warning
    Starting December 19, 2021, Swiftly replaces NextBus as Metro's real time data provider. The NextBus API will still be available through January 2022. The Metro team will take that time to update api.metro.net to switch the backend to Swiftly and we will post updates here.

Metro real time information data is available for use by software developers.  The API gives you access to the positions of Metro vehicles in real time as they travel their routes.  As of December 19, 2021, Metro will be publishing real time data through Swiftly's APIs. Endpoints are available for GTFS-rt standard format for Trip Updates and Vehicle Positions.

GTFS-static data can be accessed here:

- [Bus](https://gitlab.com/LACMTA/gtfs_bus)
- [Rail](https://gitlab.com/LACMTA/gtfs_rail)
- [Other Los Angeles regional agencies](https://github.com/LACMTA/los-angeles-regional-gtfs)

!!! info
    For information on the GTFS-static and GTFS-rt specifications, visit the [Mobility Data GTFS Resource Center](https://gtfs.mobilitydata.org/home).

### Migrating from Nextbus to the Swiftly API

To access the Swiftly API, you will need to sign-up for an API Key through [Swiftly's API Key Request Form](https://forms.gle/hXGY6kRGAChDqWwz5).

For more information on how to use the API, please reference the [Swiftly API Documentation](https://realtime-docs.goswift.ly/).

LA Metro's `agencyKey`s are:

- Bus - `lametro`
- Rail - `lametro-rail`

### Data Sources

Bus location data is gathered by our Advanced Transportation Management System (ATMS) and processed through Swiftly's prediction engine.

### Disclaimer

Metro does not guarantee the accuracy of the data.

Metro's official app partner is [Transit App](https://www.metro.net/riding/transitapp/), and Metro does not endorse any other application that uses this data.
