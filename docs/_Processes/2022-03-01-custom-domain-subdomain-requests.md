---
title: Custom Domain/Subdomain Requests
author: "{{field.author}}"
draft: true
date: 2022-02-28 16:32
audience:
  - Digital
  - Marketing
purpose: How to request a custom domain/subdomain
---
Open two tickets in the Metro IT [Service Request Website](https://metroheat.saasit.com/).  Use the "New Issue" button.

One ticket will be for the internal DNS update so that internal users behind Metro's firewall can access the domain.  The other ticket will be for the external DNS update so that anyone on the Internet can access the domain.

After saving the tickets, make note of the Incident ID number for each ticket.  Include those ticket numbers in an email to ITS, notifying them that the tickets have been created.

Emails should be sent to:

| Name | Email | DNS |
| ---- | ----- | --- |
| Vath Nguon | nguonv@metro.net | internal |
| Ammar Jilani | jilania@metro.net | external |

Most likely, you will need to request that a CNAME record be created/updated with the Name being the subdomain/domain and the Value being your hosting service.