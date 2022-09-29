[![Continuous Integration](https://github.com/kaiosilveira/tdd-money-example/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/tdd-money-example/actions/workflows/ci.yml)

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

| Chapter                     | Pull request                                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| #1: Multi-currency money    | [Add initial Dollar class with the capability of being multiplied by scalars](https://github.com/kaiosilveira/tdd-money-example/pull/1) |
| #2: Degenerate objects      | [Fix dollar side effects](https://github.com/kaiosilveira/tdd-money-example/pull/2)                                                     |
| #3: Equality for all        | [Add equality logic for Dollar](https://github.com/kaiosilveira/tdd-money-example/pull/3)                                               |
| #4: Privacy                 | [Make dollar.amount private](https://github.com/kaiosilveira/tdd-money-example/pull/4)                                                  |
| #5: Franc-ly speaking       | [Introduce Franc (CHF) class](https://github.com/kaiosilveira/tdd-money-example/pull/5)                                                 |
| #6: Equality for All, Redux | [Remove duplication between Dollar and Franc](https://github.com/kaiosilveira/tdd-money-example/pull/6)                                 |
| #7: Apples and Oranges      | [Fix Franc-Dollar comparison](https://github.com/kaiosilveira/tdd-money-example/pull/7)                                                 |
| #8: Makin' Objects          | [Introduce factory methods Money.franc and Money.dollar](https://github.com/kaiosilveira/tdd-money-example/pull/8)                      |
| #9: Times We're Living in   | [Introduce the concept of currency](https://github.com/kaiosilveira/tdd-money-example/pull/9)                                           |
| #10: Interesting Times      | [Pull up times method to Money](https://github.com/kaiosilveira/tdd-money-example/pull/10)                                              |
