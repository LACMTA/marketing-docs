# MyBus

> This tool is meant to communicate upcoming service changes to LA Metro riders in a way that answers the question "How is my bus changing?" This tool was created to pull together data from different LA Metro departments in order to communicate bus rider service changes to riders.

- Live site: [https://mybus.metro.net/](https://mybus.metro.net/)

!!! info
    This application is in development and subject to change.

## Technologies Used

### Front-end

These dependences are used for generating the front-end website.

- Bootstrap - 5.0.0
- jQuery - 3.6.0
- Google Translate API - v2

### Back-end

These dependencies are used for aggregating the data from other Metro departments.

- Jupyter Notebooks
- pandas
- numpy
- docx.api

## Features

List the ready features here:

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
### Frontend
Since the project generates a static website, the only dependences for running the site locally is a web browser and downloading the files. 

### Backend
There are a few Jupyter Notebooks that process data in order to generate the bus lines, bus stops, and schedule data. The separate Jupyter Notebooks require different depencies, but all require a Jupyter Notebook environment such as Anaconda or VS Code's native Jupyter Notebooks.

## Project Status
Project is: _in progress_


## Room for Improvement
### Future development
- Connect to an API that provides the bus line, bus stops, and schedule data.
- Generate templates for the pages rather than individual pages for each of the lines.

### To do

- Implement a strategy to systematically generate pages. 
- Refactor to make it possible to use an API data source

## Acknowledgements
This project was created for LA Metro.

## Contact
Created by [@matikin9](https://www.github.com/matikin9) for questions or feedback.