# GTFS Static
## Overview

LA Metro's GTFS data feeds are separated into *Bus* and *Rail*. They
were separated in 2016 to allow for more regular file updates.

Both sets of files are publicly accessible on the LACMTA GitLab account.
They were moved from GitHub to GitLab in 2016 because of the 100MB file
size limit in GitHub.

Service schedules go through a "shakeup" roughly twice a year in June
and December. Schedules are adjusted to accommodate ridership demands
and improve connections between Metro Bus, Metro Rail, and other transit
services in the region.

The files hosted on GitLab are used by the Metro Trip Planner as well as
many third parties that rely on the data to power their transit trip
planning sites and apps.

### Graph Update

OpenTripPlanner builds a Graph.obj using a list of GTFS files defined in
a Chef cookbook. That cookbook is scheduled to run daily and it will
pull the GTFS files from Metro's GitLab repository.

The cron job schedule for the graph build is:
`9 11 \* \* \*`

Timezone is UTC/ETC.

#### Manual Update

If we need OTP to pick up and process the new GTFS files immediately,
this is what we do.

Access the EC2 grapher server instance via SSH (if you don't have access
you'll have to use knife to connect to the chef server):

`metro-us-west-2-otp-grapher-prod-1`

Manually run the cookbook to regenerate the graph file using the new
GTFS files:

```bash
sudo chef-client -o recipe\[otp-server::update_graph\]
```

## Bus

Bus data is updated every 1-2 months.

There are a few common issues that show up in validation, but none of
them are showstoppers.

### Update Procedures

Clone the GitLab project (repository) to your local workspace:
[https://gitlab.com/LACMTA/gtfs_bus](https://gitlab.com/LACMTA/gtfs_bus)

Operations should have included a validation check with the new GTFS
files. Confirm there are no errors.

Replace the local files with the new GTFS files.

Check the file line endings using this command:

```bash
file "FILENAME"
```

If the output states the file has CRLF line terminators, the file will
need to be converted from Windows format to UNIX format. Instead of
ending in both Carriage Return (CR) and Line Feed (LF), UNIX files end
only in LF.

Run the dos2unix command to convert the files:

```bash
dos2unix agency.txt calendar.txt calendar_dates.txt feed_info.txt
```
routes.txt shapes.txt stop_times.txt stops.txt trips.txt

Check the endings again to confirm the line endings are now UNIX format.
If so, the output will not say anything about the line endings.

```bash
file "FILENAME"
```

Run the following commands in order to re-generate the zip file with the
new GTFS files.

```bash
rm \*zip
zip -R gtfs_bus \*.txt
```

Output a list of the files in the zip file:

```bash
unzip -l gtfs_bus.zip
```

Update the README and include a copy of the output of the unzip command.

When complete save all files and use git to push to commit the changes.
Finally push the new commit back to the GitLab repository:

```bash linenums="1"
git add .
git commit -m "MESSAGE"
git push origin master
```

## Rail

Rail data files are updated nightly through an automated process.
Operations generates the files and they are uploaded to GitLab. The
process is undocumented, but this is what is known so far. Operations
uses FTP to upload the file to a folder location:

![](media\image1.png)

The location of the destination, "nextbus/prod/" is currently unknown.

The rail update does not usually fail, but when it does, follow the
normal procedure to manually update GitLab.

Operations will provide the GTFS_Rail_Nextrain.zip file. Clone the
gtfs_rail git repository, add the zip file to the directory, then unzip
the contents and overwrite existing files:

```bash
unzip -o GTFS_Rail_Nextrain.zip
```

Run the dos2unix command to convert the file endings:

```bash
dos2unix agency.txt calendar.txt calendar_dates.txt feed_info.txt
```
routes.txt shapes.txt stop_times.txt stops.txt trips.txt

Check the endings to confirm they're now UNIX format.

```bash
file "FILENAME"
```

Re-generate the zip file with the new GTFS files:

```bash
rm \*zip
```

```bash
zip -R gtfs_rail agency.txt calendar.txt calendar_dates.txt
```
feed_info.txt routes.txt shapes.txt stop_times.txt stops.txt trips.txt

Output a list of the files in the zip file and update this in the
README:

```bash
unzip -l gtfs_bus.zip
```

Commit all the files with a message:

```bash
git add .
git commit -m "MESSAGE"
```

Output a list of the file changed and update this in the README:

```bash
git show \--summary \--stat
```

Save the README and commit again. Then push the changes to GitLab.

## Other Agencies (Bus)

There is a repo on our GitLab called gtfs_lax that contains GTFS files
from agencies across the LA region:
[[https://gitlab.com/LACMTA/gtfs_lax]{.ul}](https://gitlab.com/LACMTA/gtfs_lax)

While it looks like at some point this repo was maintained using a
script that pulled files from
[[MetroCloudAlliance]{.ul}](http://www.metrocloudalliance.com/), it has
not been updated since April 2017. Without a paid membership we won't be
able to maintain the files in this way.

Our Metro Trip Planner does not reference the files at this repo.
Instead, the OTP Graph Builder will pull some data directly from their
source agencies:

-   LADOT

-   Glendale

-   Long Beach Transit

-   Palos Verdes

-   Pasadena

The rest are pulled cached on the media.metro.net S3 bucket. Comparing
the two, it seems the gtfs_lax repo contains a lot more agencies than
we're actually loading into the Trip Planner. The following are missing
from the graph builder configuration:

-   Alhambra

-   Amtrak

-   Antelope Valley

-   Bellflower Bus

-   Bolt Bus

-   Calabasas Trolley

-   Camarillo Area

-   Carson Circuit

-   Catalina Express

-   Cerritos Wheels

-   City of Commerce

-   LADOT Commuter Express

-   Compton Renaissance

-   LADOT DASH

-   Downey Link
-   \...

## GTFS files for prod (from the configuration settings)
Data Source | Link |
----------------|----
gtfs_bus | https://gitlab.com/LACMTA/gtfs_bus/raw/master/gtfs_bus.zip|
gtfs_rail | https://gitlab.com/LACMTA/gtfs_rail/raw/master/gtfs_rail.zip
gtfs_foothill | http://media.metro.net/GTFS/mirrors/gtfs_foothill.zip
gtfs_metrolink | http://media.metro.net/transit/GTFS_ML.zip
gtfs_lacitydot|http://lacitydot.com/gtfs/administrator/gtfszip/ladotgtfs.zip
gtfs_glendale | http://www.glendaleca.gov/Home/ShowDocument?id=29549
gtfs_lbtransit|https://transitfeeds.com/p/long-beach-transit/704/latest/download
gtfs_lawa | https://media.metro.net/doug/gtfs_lawa.zip
gtfs_palosverdes|http://data.trilliumtransit.com/gtfs/pvpta-ca-us/pvpta-ca-us.zip
gtfs_pasadena|http://rt.pasadenatransit.net/rtt/public/utility/gtfs.aspx
gtfs_beach_cities | https://media.metro.net/GTFS/beach_cities.zip
gtfs_baldwin_park | https://media.metro.net/GTFS/baldwin_park.zip
gtfs_burbank_bus.zip | https://media.metro.net/GTFS/burbank_bus.zip
gtfs_corona_cruiser | https://media.metro.net/GTFS/corona_cruiser.zip
gtfs_cudahy_cart | https://media.metro.net/GTFS/cudahy_cart.zip
gtfs_culver_city | https://media.metro.net/GTFS/culver_city.zip
gtfs_gardena_municipal|https://media.metro.net/GTFS/gardena_municipal.zip
gtfs_huntington_park | https://media.metro.net/GTFS/huntington_park.zip
gtfs_montebello_bus | https://media.metro.net/GTFS/montebello_bus.zip
gtfs_monterey_park | https://media.metro.net/GTFS/monterey_park.zip
gtfs_norwalk_transit | https://media.metro.net/GTFS/norwalk_transit.zip
gtfs_santa_clarita | https://media.metro.net/GTFS/santa_clarita.zip
gtfs_lax_flyaway|https://media.metro.net/GTFS/flyaway_google_transit.zip
gtfs_big_blue_bus | http://media.metro.net/GTFS/mirrors/gtfs_bbb.zip
gtfs_torrance | http://media.metro.net/GTFS/mirrors/gtfs_torrance.zip