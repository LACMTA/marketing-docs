# Github Development Basics

## Setup

### Checklist

- [Install Git](https://www.git-scm.com/0)
- [Install VS Code](https://code.visualstudio.com/)
- [Install Python](https://www.python.org/)
- [Create a GitHub account](https://github.com/)

### Serve the Site Locally

Open your editor and run these commands in the terminal.

Clone the repository.

```bash
git clone https://github.com/LACMTA/digital-services-team-docs.git
```

Install the Python dependencies.

```bash
pip install -r requirements.txt
```

Run mkdocs locally to serve the website.

```bash
mkdocs serve
```

## Making changes

Make a new branch before making your changes in order to keep everything organized.

```bash
git branch -b a-name-that-you-want-for-your-branch
```

## Adding Documentation

- All documentation changes should be in `./docs` folder

You can read more about documentation [here](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown)

## Customizing Styles and CSS

All changes to styling should take place in the `./docs/stylesheets` folder

You can read more about customization [here](https://squidfunk.github.io/mkdocs-material/customization/#overriding-blocks-recommended).

## Push Changes

```bash
git add .
git commit -am 'message about your changes'
git push
```

Since you are making a new branch, you will be prompted to create a branch on the remote repository on github.com!

## Make a Pull Request

After successfully pushing your changes you can make a pull request to add your content into the main repository! Someone will review your changes for quality control.

## Repeat

You can continue contributing changes on your branch or start over with a new branch.

# Troubleshooting

Please see [this document](troubleshooting.md) for addressing more problems.