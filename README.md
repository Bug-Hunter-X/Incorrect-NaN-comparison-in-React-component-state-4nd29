# Incorrect NaN Comparison in React Component State

This repository demonstrates a common error in React when handling `NaN` (Not a Number) values in component state.  The issue arises from the way `NaN` is compared using the strict inequality operator (`!==`).

## Bug Description

The `MyComponent` function uses `useState` to manage a `count` variable.  An `useEffect` hook attempts to log a message if the count is not `NaN`. However, the comparison `count !== NaN` always evaluates to `true`, even when `count` is actually `NaN`.  This incorrect comparison leads to unexpected behavior or silent failures.

## Solution

The correct way to check for `NaN` is using the `isNaN()` function provided by JavaScript.  The updated code uses `isNaN(count)` to accurately detect whether the `count` variable holds a `NaN` value.

## How to reproduce the bug
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server.
5. Observe the behavior in the browser by clicking the button. The console will incorrectly log 'Count is not NaN', even after setting `count` to `NaN`.