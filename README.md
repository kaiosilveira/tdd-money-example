# TDD by example - Part I - The Money Example

This repository contains a working implementation of "The money example" (chapters 1 to 17) of the "Test-Driven Development by Example" book, by Kent Beck.

## How to navigate this repo

The code path presented in the book was implemented here using pull requests. Each pull requests contains the code for a full chapter, with multiple commits. Each chapter can be seen as an implementation checkpoint until we reach the main goal. There will be a link to the merged pull request for each chapter.

When viewing a pull request, go to the "Commits" tab to see the step-by-step code until the checkpoint is reached. Each commit will have the following pattern:

- The commit title
- The checklist for the implementation, containing all items we need to change/fix before considering ourselves done

The uppermost commit is the first commit made against the pull request, and the last commit in the list is the last part of the code implemented. So, to keep the chronology of changes, I'd suggest going from top to bottom when looking at the commits. There is also two buttons, "< Prev | Next >", in the Commits tab to navigate between commits.

Here's an example:

```console
implement general case to satisfy multiplication

Task list:
- $5 + 10CHF = $10 if rate is 2:1 🎯
- $5 * 2 = $10 ✅
- Make "amount" private
- Dollar side-effects?
- Money rounding?
```

Some emojis were used to hint on what's being currently done in terms of code for that specific commit. The rules for using emojis are described below:

| Emoji | Usage                                             |
| ----- | ------------------------------------------------- |
| 🎯    | identifies the list item containing the main goal |
| 👈🏼    | The list item we're currently working on          |
| ✅    | Items already finished                            |

## Goal

The goal of this project is to make a system able to perform the following operation:

```
$5 + 10CHF = $10 if rate is 2:1
```

### Implementation

| Chapter | Pull request                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1       | [Add Dollar class with the capability of being multiplied by scalars](https://github.com/kaiosilveira/tdd-money-example/pull/2) |
