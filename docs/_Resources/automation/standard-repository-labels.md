# Standard Repository Labeling
To ensure consistancy across GitHub repositories, we currently use the following labels:

|Label|Color
|----|-----|
|Theme: UX/UI |#FBCA0
|Theme: Data|#FBCA04
|Theme: Infrastructure|#FBCA04
|Theme: Content|#FBCA04
|Auto: Automation|#005200
|0-Priority: Critical|#ff2222
|0-Priority: High|#FF7922
|0-Priority: Low|#c2e0c6
|0-Priority: Medium|#fbca04
|1-Status: Not Accepted|#FC8264
|1-Status: Complete|#36d636
|1-Status: Accepted|#FC8264
|1-Status: Info Needed|#FC8264
|1-Status: In Progress|#FC8264
|1-Status: On Hold|#FC8264
|1-Status: QA|#FC8264
|Project: Trip Planner|#964dc7
|Project: Schedules|#964dc7
|Project: Alerts|#964dc7
|Type: Bug|#1d76db
|Type: Documentation|#1d76db
|Type: Enhancement|#1d76db
|Type: Feature|#1d76db
|Type: Help Needed|#1d76db
|Type: Suggestion|#1d76db
|Type: Task|#1d76db
|Type: Question|#1d76db"}


## How to use
1. First navigate to a GitHub repository you have read/write access to and go to the `Issues` page.
2. Click on `Labels`
3. Click on `New Label`
4. Click on `Edit`
5. Open your web browser's `Web Console`, usually by pressing `F12`
6. Copy and paste the following script into the `web console`:

```
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