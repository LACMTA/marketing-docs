# Standard Repository Labeling

Each of our labels have two parts: a category and a value.

The high level categories should stay the same.  Some categories' values should be adjusted depending on the project.

## Categories

* __0-Priority__ - Use this category for issue priority.  If an issue is on hold, this can be used to indicate the issue's priority once that issue is in progress again.
* __1-Status__ - Use this category to indicate the status or progress of the issue.  This category has the most variation since needs will depend on workflows.
* __Assignee__ - Use this category when a repo has assignees who cannot be added as a collaborator because they don't have an account or because they are not part of the organization and it's a private repo.  We are using this to track assignees with issues ported from Jira using the Zapier automation.
* __Auto__ - Use this category if there is an automation tied to this issue.
* __Project__ - Some repositories/projects include self-contained subcomponents.  Use this category to tie together issues related to that subcomponent.
* __Theme__ - Use this category to track themes, or areas of work within this project/repository.  For example - content updates, infrastructure issues, UX/UI design work, development, etc.
* __Type__ - This category indicates whether an issue is a bug, a task, a question, etc.

## Use Cases

### metro-dot-net

[metro-dot-net repository](https://github.com/LACMTA/metro-dot-net/)

This repository uses labels heavily and is our initial test case to work out labeling needs.  It's used to capture and display information from the contractor's (The Glue's) Jira board.

More information about the life boat website can be found on [this page](../_Projects/Lifeboat).

## How to use
1. First navigate to a GitHub repository you have read/write access to and go to the `Issues` page.
2. Click on `Labels`
3. Click on `New Label`
4. Click on `Edit`
5. Open your web browser's `Web Console`, usually by pressing `F12`
6. Copy and paste the following script into the `web console`:

``` js
const OUR_LABELS = 
  [
      {"name": "Theme: UX/UI ","color": "#FBCA04"},
      {"name": "Theme: Data","color": "#FBCA04"},
      {"name": "Theme: Infrastructure","color": "#FBCA04"},
      {"name": "Theme: Content","color": "#FBCA04"},
      {"name": "Auto: Automation","color": "#005200"},
      {"name": "0-Priority: Critical","color": "#ff2222"},
      {"name": "0-Priority: High","color": "#FF7922"},
      {"name": "0-Priority: Low","color": "#c2e0c6"},
      {"name": "0-Priority: Medium","color": "#fbca04"},
      {"name": "1-Status: Not Accepted","color": "#FC8264"},
      {"name": "1-Status: Complete","color": "#36d636"},
      {"name": "1-Status: Accepted","color": "#FC8264"},
      {"name": "1-Status: Info Needed","color": "#FC8264"},
      {"name": "1-Status: In Progress","color": "#FC8264"},
      {"name": "1-Status: On Hold","color": "#FC8264"},
      {"name": "1-Status: QA","color": "#FC8264"},
      {"name": "Project: Trip Planner","color": "#964dc7"},
      {"name": "Project: Schedules","color": "#964dc7"},
      {"name": "Project: Alerts","color": "#964dc7"},
      {"name": "Type: Bug","color": "#1d76db"},
      {"name": "Type: Documentation","color": "#1d76db"},
      {"name": "Type: Enhancement","color": "#1d76db"},
      {"name": "Type: Feature","color": "#1d76db"},
      {"name": "Type: Help Needed","color": "#1d76db"},
      {"name": "Type: Suggestion","color": "#1d76db"},
      {"name": "Type: Task","color": "#1d76db"},
      {"name": "Type: Question","color": "#1d76db"}
  ]

async function populateLabels(){
  document.querySelectorAll('.js-details-target-new-label').forEach(thisButton=>thisButton.click());
  await sleep(2000);
  console.log('sleeping zzZZz');
  OUR_LABELS.forEach(function(label) {
    addLabel(label);
  });
}

function updateLabel (label) {
  var flag = false;
  [].slice.call(document.querySelectorAll(".labels-list-item"))
  .forEach(function(element) {
    if (element.querySelector('.label-link').textContent.trim() === label.name) {
      flag = true;
      element.querySelector('.js-edit-label').click();
      element.querySelector('.js-new-label-name-input').value = label.name;
      element.querySelector('.js-new-label-description-input').value = label.description;
      element.querySelector('.js-new-label-color-input').value = label.color;
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click();
    }
  })
  return flag;
}

function addNewLabel (label) {
  document.querySelector('.js-new-label-name-input').value = label.name;
  document.querySelector('.js-new-label-description-input').value = label.description;
  document.querySelector('.js-new-label-color-input').value = label.color;
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false;
  document.querySelector('.js-details-target ~ .btn-primary').click();
}

function addLabel (label) {
  if (!updateLabel(label)) {
    addNewLabel(label);
  }
}

function deleteAllLabels() {
  document.querySelectorAll('.js-delete-label button').forEach(deleteButton => deleteButton.removeAttribute("data-confirm"));
  document.querySelectorAll('.js-delete-label button').forEach(element => element.click());
  populateLabels();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function main(){
  deleteAllLabels();
}

main();
```
7. Press `Enter` to run the script!
8. Complete! Your repository will now have the standard labels as above.