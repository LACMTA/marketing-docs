---
tags:
  - DRAFT
---

# Pull Request Methodology

## Authors

1. Always make changes on a new branch and commit changes there
2. When ready open a pull request to merge that `branch` into `dev`
3. Tag a peer reviewer that is active on the project
4. Get some coffee
5. Reviewer will pull changes to local and decide on one of the following:
    - `approve` - No edits needed, but minor changes might have been made by the reviewer.
    - `request changes` - Feedback needs to be addressed before the pull request can be merged.
6. If changes or comments are needed will get a mention in your email or bell notification on GitHub if you are watching the repository.
7. Reviewer will merge and close the pull request.

!!! note
    This process can be bypassed when working collaboratively! (DO IT!)

## Reviewers

1. When tagged on a Pull Request, you should pull the changes to local.
2. Look for typos, layout/formatting errors, and general content/behavior issues.
3. Depending on the number and complexity of changes that need to be made choose one of the following:
    - `approve` - Approve and merge the pull request as is or with minor edits of your own.
    - `request changes` - Provide feedback on changes that the author needs to make, these can include content edits or major changes.
4. Be sure to tag the user with a mention (@username) in your pull request if they need to make changes or provide comments.
5. Merge and close the pull request
6. Delete branch if it is a one-time branch.

## Branching Policy

There are two type branching approaches one-time and persistant.

### One-time branches

Branches that are created for specific uses or issues should be removed after closing.

### One-time branch examples

- issue-based (tied to an issue)
- feature-based (tied to a feature)

### Persistent branches

Re-usable or multi-purpose branches should not be removed.

### Persistent branch examples

- main (deploying to production)
- dev (for deploying to staging)
- testing/sandbox (for testing, not for merging into dev/main)
