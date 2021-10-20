---
tags:
  - Internal
  - Metro.net
---
# Legacy Rewrites to Metro.net

Old versions of the website are hosted on [legacyweb.metro.net](https://legacyweb.metro.net).

## Problem

Ocasionally kegacy content needs to be referenced, so a WordPress plugin called "redirects" is currently being used to manage redirects. Most redirects use Regular Expressions (RegEx) to handle wildcards and many different websites, as opposed to a simple one-to-one redirect.

## Solution: adding new redirects

In order to add new redirects the following steps need to be followed:

1. Log into the Metro.net WordPress website
2. Navigate to the redirect plugin
3. Add a simple redirect (one-to-one) or an advanced RegEx based redirect (can handle multiple)
4. Test the redirect

## Redirect Use Case

**Both the board and service councils have old documents that have metro.net hardcoded into the link.**

### Board and Service Council pdf problem example

Seen in this pdf:

- [http://media.metro.net/board/Agendas/2011/02_february/2011_02_calendar.pdf](http://media.metro.net/board/Agendas/2011/02_february/2011_02_calendar.pdf ) 
- Click on a link in the pdf and you will see a urls hardcoded: 
- [https://www.metro.net/board/Agendas/2011/02_february/20110201OtherSectorAAllCouncils_PH.pdf](https://www.metro.net/board/Agendas/2011/02_february/20110201OtherSectorAAllCouncils_PH.pdf)

### Spreadsheet for testing rewrites

For this particular problem the following spreadsheet was used to keep track of and test rewrites:

[https://docs.google.com/spreadsheets/d/1Hwb5g-i2sYG9t9508DdXVHACJdbF4kb8GzS4NNJyeNQ/edit#gid=0](https://docs.google.com/spreadsheets/d/1Hwb5g-i2sYG9t9508DdXVHACJdbF4kb8GzS4NNJyeNQ/edit#gid=0)
