---
tags:
  - external
  
---

# MyBus

This tool is meant to communicate upcoming service changes to LA Metro riders in a way that answers the question "How is my bus changing?" This tool was created to pull together data from different LA Metro departments in order to communicate NextGen bus service changes to riders. NextGen service changes were rolled out in the Dec '20, Jun '21, Sep '21, and Dec '21 shakeups. There is discussion on how this tool can be used to communicate service changes in the future during "normal" shakeups.

__Live Site__ - [https://mybus.metro.net/](https://mybus.metro.net/)

__Code Repository__ - https://github.com/lacmta/mybus/

__Project Management__ - https://github.com/LACMTA/mybus/issues

!!! info
    This application is in development and subject to change.

## Technologies Used

### Frontend

The website uses these libraries on the front end:

- Bootstrap - 5.0.0
- jQuery - 3.6.0 (only used for loading and processing JSON data, could likely be refactored out)
- Google Translate API - v2 (legacy tool, not sure if there are any good alternatives)

### Backend

These tools are required for generating the data on the backend.

- Python
- Jupyter Notebooks
- pandas
- numpy
- docx.api

## Features

- Dropdown selection of Bus Lines 
- All changes listed as a summary page
- Translated pages into:
  - Español (Spanish)
  - 中文 (Chinese Traditional)
  - 한국어 (Korean)
  - Tiếng Việt (Vietnamese)
  - 日本語 (Japanese)
  - русский (Russian)
  - Армянский (Armenian)

## Screenshot

![Example screenshot](./media/screenshot.png)

## Setup

Recommended development environment is [VS Code](https://code.visualstudio.com/).

### Frontend

Since the website is made of strictly HTML, CSS, and JS files, there are no dependencies for running the site locally.

### Backend

* Jupyter Notebooks - Required to generate the data files that populate the lines, stops, line changes, and stop changes data files that populate the site content. VS Code comes with Jupyter Notebooks support.
* Python - Required to run Jupyter Notebooks.

## Project Status

Project is: _in progress_

## Team

Phase 1: John, Ebby, Eileen, Nina

Phase 2: John, Ebby, Monica, Nina

Phase 2b: John, Ebby, Nina, Albert

Phase 3: John, Ebby, Nina, Albert

Contact Nina ([@matikin9](https://www.github.com/matikin9)) for questions or feedback.
