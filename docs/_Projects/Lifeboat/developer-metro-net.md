# Developer.Metro.net

This site contains information and connections to public-facing Metro data and APIs for software developers.

## Metro Schedule and Real Time API
Metro schedule and real time information data is available for use by software developers. Metro does not guarantee the accuracy of the data nor does it warrant or endorse any application that uses this data. Static schedule data is [updated nightly], check back here for the latest upload. Real time information is updated every [30 seconds].

## Migrating from Nextbus to the Swiftly API
!!! warning
    Starting in Decemember 2021, the [Swiftly API](https://swiftly.zendesk.com/hc/en-us/articles/360049238811-API-Guide-Basics) will replace the Nexbus API at Metro.

Information on performing the migration can be found below and on [https://developer.metro.net/migrating](https://developer.metro.net/migrating).

Metro schedule data is available in the GTFS format. GTFS data was separated into mode-specific filesets instead of one large GTFS for all scheduled service. Metro also publishes GTFS feeds from other transit agencies in Los Angeles county.

- Bus - [download]()
- Rail - [download]()
- Other Los Angeles Counties- [download]()


!!! info
    For information on the GTFS-RT specification visit [here](https://gtfs.mobilitydata.org/best-practices/gtfs-realtime).

GTFS datasets for LACMTA's core service- bus and rail- include data using the GTFS-Fares v2 specification. The proposed Fares v2 specification allows for a formal structure to fare product and policy data and how those products can be used to ride the system. Doing this gives GTFS consumers wishing to implement Fares v2 in their applications a set way to do so no matter what a transit agency's fare structure may be. We are excited to help in this endeavor.

GTFS-RT data for local bus service and Commuter Bus service is available through Swiftly API's. Please use the link below to request access keys.

- [API Key Request](https://forms.gle/hXGY6kRGAChDqWwz5)
