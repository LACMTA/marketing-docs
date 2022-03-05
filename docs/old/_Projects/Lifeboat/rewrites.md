---
tags:
  - Internal
  - Metro.net
---
# Legacy Rewrites

The legacy website is hosted at [legacyweb.metro.net](https://legacyweb.metro.net).

## Problem

Much of the content on the legacy website was not transferred to the lifeboat and occasionally that content needs to be referenced until a permanent solution can be put in place. A WordPress plugin called [Redirection](https://wordpress.org/plugins/redirection/) is currently being used to manage redirects. Most of the redirects that have been created are one-to-one, but a few use Regular Expressions (RegEx).

## Solution: Adding New Redirects

In order to add new redirects the following steps need to be followed:

1. Log into the Metro.net WordPress website.
2. Navigate to the redirect plugin (Tools -> Redirection).
3. Add a redirect, organizing it into an appropriate Group from the dropdown.
    1. A simple redirect (one-to-one) is the default.
    2. Add an advanced RegEx-based redirect by selecting `Regex` from the Source URL dropdown.
4. Test the redirect.

!!! note
    The source URL is relative.  Do not include the domain.

    The default HTTP code is `301 - Moved Permanently`. Adjust if needed.

## Regex Use Cases

### Board and Service Council PDFs

Board and Service Council meeting and agenda PDFs are stored on the media server (media.metro.net). The legacy website had URL redirects in place so that the files could be linked to as:

* `www.metro.net/board/Issues/.../filename.pdf`
* `www.metro.net/media/board/Agendas/.../filename.pdf`

The redirect would switch the subdomain from `www` to `media` to point to the media server.  The rest of the URL from `/board/...` onwards would be appended.

* `media.metro.net/board/Issues/.../filename.pdf`
* `media.metro.net/board/Agendas/.../filename.pdf`

Examples:

Inside [this PDF](http://media.metro.net/board/Agendas/2011/02_february/2011_02_calendar.pdf) are hardcoded URLs like this one:

[https://www.metro.net/board/Agendas/2011/02_february/20110201OtherSectorAAllCouncils_PH.pdf](https://www.metro.net/board/Agendas/2011/02_february/20110201OtherSectorAAllCouncils_PH.pdf)

For this particular problem the following spreadsheet was used to keep track of and test rewrites:

[https://docs.google.com/spreadsheets/d/1Hwb5g-i2sYG9t9508DdXVHACJdbF4kb8GzS4NNJyeNQ/edit#gid=0](https://docs.google.com/spreadsheets/d/1Hwb5g-i2sYG9t9508DdXVHACJdbF4kb8GzS4NNJyeNQ/edit#gid=0)

### Legacy `www.metro.net/api`

The legacy website hosted an [API](https://legacyweb.metro.net/api/) via the Django framework. That API was not re-implemented on the new lifeboat WordPress site. A redirect was put in place so that it would still be accessible while the legacy website exists. What we do about this API is still TBD.

### Metro Art

The pages on the legacy website that belonged to Metro Art were transferred to their own [dedicated WordPress site](https://art.metro.net). Any URLs referencing those pages on metro.net were redirected to the new Metro Art website.

## Other Use Cases

### Transit School Interactive

The legacy website linked to an interactive [Transit School](https://legacyweb.metro.net/interactives/transitcourt/story_html5.html) presentation that is used by Metro's Transit Court. It is not hosted through the legacy site's Django CMS, instead it sits on its own AWS server used for other one-off interactive pages. A redirect was set up to access this page until a time when we can determine a better permanent solution.

## Need a redirect for Metro.net?

Submit an issue [here](https://github.com/LACMTA/digital-services-team-docs/issues) or contact [Nina][nina-kin]!