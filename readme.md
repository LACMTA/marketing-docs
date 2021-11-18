# Metro Digital Services Documentation

[![Deploy Documentation](https://github.com/LACMTA/marketing-docs/actions/workflows/main.yml/badge.svg)](https://github.com/LACMTA/marketing-docs/actions/workflows/main.yml)

## How to get started

### Install the Python dependencies
>Terminal
```bash
pip install -r requirements.txt
```

### Run mkdocs locally
>Terminal
```bash
mkdocs serve
```
### Make a new branch
To keep the documentation organized, you should create your own branch for changes:
>Terminal
```bash
git branch -b a-name-that-you-want-for-your-branch
```
### Make changes

## Adding Documentation
- All documentation changes should be in `./docs` folder

You can read more about documentation [here](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown)

### Customizing Styles and CSS

All changes to styling should take place in the `./docs/stylesheets` folder

You can read more about customization [here](https://squidfunk.github.io/mkdocs-material/customization/#overriding-blocks-recommended).

### Push Changes
```bash
git add .
git commit -am 'message about your changes'
git push
```
Since you are making a new branch, you will be prompted to create a branch on the remote repository on github.com!

### Make a Pull Request
After successfully pushing your changes you can make a pull request to add your content into the main repository! Someone will review your changes for quality control.

### Repeat!
You can continue contributing changes on your branch or start over with a new branch.

## Troubleshooting
Please see [this document](troubleshooting.md) for addressing more problems.
