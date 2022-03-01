---
tags:
  - DRAFT
---

# Metro APIs Overview

## api.metro.net

### API v2

Albert and Nina worked on a v2 API, built from scratch using FastAPI.  It is developed as part of a container image hosted on DockerHub.  The source code is in GitHub and has GitHub Actions set up to automatically deploy the latest container images on DockerHub to our AWS Lightsail container service.  Within AWS Lightsail we have two container services set up - one for Development and one for Production.

Metro ITS has updated the DNS record for the api.metro.net CNAME record to point to the Lightsail container service domain.  The API is currently using an SSL certificate provisioned through AWS Lightsail.

### API v1

This API was formerly used by our digital signage vendor, Intersection, as a passthrough to display arrival times on screens at various stations.  With the Swiftly switchover in December 2021, Intersection switched to directly using Swiftly's GTFS-rt feed.

This API is hosted on 2 EC2 instances behind a load balancer on our old AWS account.  It uses Python Flask.

## metro.net/api

Who is using it and for what?

Determine how it’s used, and by who?

api.metro.net is on our old AWS account, should it be upgraded and moved? It will need to be updated once we switch from NextBus to Swiftly.

## Timetables API

- Port over to GitHub.
- Include documentation and deployment workflow.
- Potentially re-use for standardized + centralized route representation data.
- Line number, sister lines, description renaming
- Service Planners can directly update?  Or we connect to HASTUS?
- Integrate schedule PDFs?
- Handle future service changes?

<!-- Nexidyne's MetroCloudAlliance APIs -->
<!-- https://lacmta.metrocloudalliance.com/data/ -->
