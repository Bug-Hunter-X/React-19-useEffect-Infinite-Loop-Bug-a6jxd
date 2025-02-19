# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 involving an infinite loop caused by incorrectly updating state within a useEffect hook's dependency array.

## Bug Description
The `useEffect` hook is used to perform side effects after the component renders.  However, if the state update function (`setCount`) is called inside the useEffect, and if the count is included in the dependency array, it creates an infinite loop because every state update triggers a re-render, and the useEffect runs again.

## Solution
The problem can be solved by removing the state variable from the dependency array or by using the functional update approach with `setCount(prevCount => prevCount + 1)`.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the error in your browser's console (or the infinite count).