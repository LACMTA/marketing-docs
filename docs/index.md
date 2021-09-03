# Welcome to LA Metro Digital Services Team Docs

[Troubleshooting](troubleshooting.md)

This repository is an internal resource for the Digital Services Team at Metro.

Documentation either does not exist, is outdated, exists on old platforms, or exists across multiple platforms used by different people.  There is a need to centralize and keep documentation up-to-date for the entire team to use and reference.

!!! warning
	Do not put any account credentials or private keys here.

!!! note
	You should note that the title will be automatically capitalized.
## Documentation Organization

The documentation is loosely tied on the following structure:

### Categories

#### Projects
  - GTFS Static
  - GTFS RT
  - MyBus

#### [Tools/Services  (through P-Card or ITS)](./tools_services/)
#### Processes
  - Shakeup updates

## Contributing

Contributions to documentation is mainly provided from LA Metro staff and follows this workflow:

![MetroDocumentationWorkFlow.png](MetroDocumentationWorkFlow.png)

1. Create documentation in either `*.docx` or `*.md` formats.
   - If using `*.docx` convert to the `*.md` format using [online converter](https://word2md.com/).
2. Upload the change to the repository in the corresponding categories folder
3. Check and review conversion
4. Publish to development site

!!! caution
    To get started with contributing, you will need to have a GitHub.com account.

**Note:** Authoring documentation from other formats still requires knowledge of the Markdown format for review. Here are some resources for learning about Markdown formatting:

- https://guides.github.com/features/mastering-markdown/

### There are two options for authoring content:
#### For Editors: Edit on GitHub.com directly

#### For Developers and Editors: Edit on your local PC and upload to GitHub

!!! note
	Editing on your PC and uploading is the preferred way to contribute to the documentation and to get used to GitHub.


Vist the [contributing](contributing.md) guide for more details or follow the Quick Start below to get started right away.

## Quick Start - For Developers

- Make sure you have Git SVN installed
- Make sure you have VS Code installed
- Make sure you have Python installed
- Make sure you have a GitHub.com account

### Clone the repository
>Terminal
```bash
git clone https://github.com/albertkun/digital-design-system-docs.git
```

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

#### Adding Documentation
- All documentation changes should be in `./docs` folder

You can read more about documentation [here](https://www.mkdocs.org/user-guide/writing-your-docs/#writing-with-markdown)

#### Customizing Styles and CSS

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

## Questions
Feel free to reach out if you have any questions!