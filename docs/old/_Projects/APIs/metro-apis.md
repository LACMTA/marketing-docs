---
tags:
  - DRAFT
---

# Metro APIs Overview

## api.metro.net

### API v2

Albert and Nina worked on a v2 API, built from scratch using FastAPI.  It is developed as part of a container image hosted on DockerHub.  The source code is in GitHub and has GitHub Actions set up to automatically deploy the latest container images on DockerHub to our AWS Lightsail container service.  Within AWS Lightsail we have two container services set up - one for Development and one for Production.

Metro ITS has updated the DNS record for the api.metro.net CNAME record to point to the Lightsail container service domain.  The API is currently using an SSL certificate provisioned through AWS Lightsail.

You will need to register for an API key in order to access the real time data endpoints.

#### Resources

| Name | Link |
| ---- | ---- |
| DockerHub | https://hub.docker.com/repository/docker/lacmta/metro-api-v2/ |
| GitHub | https://github.com/LACMTA/metro_api_v2 |
| AWS Lightsail | metro-api-v2.ofhq3vd1r7une.us-west-2.cs.amazonlightsail.com  |

### API v1

This API was formerly used by our digital signage vendor, Intersection, as a passthrough to display arrival times on screens at various stations.  With the Swiftly switchover in December 2021, Intersection switched to directly using Swiftly's GTFS-rt feed.

This API is hosted on 2 EC2 instances behind a load balancer on our old AWS account.  It uses Python Flask.

AWS Load Balancer: metro-us-west-2-vpc-lb-3-129013154.us-west-2.elb.amazonaws.com

## metro.net/api

This API endpoint existed through the legacy metro.net website's Django CMS.  We ran into an issue when transitioning to the new Lifeboat site and added in a URL redirect to keep access to the endpoint.

As of February 2022, we disabled the URL redirect and have not seen any negative effects.  As a result, we will not bother trying to re-implement this API.

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
