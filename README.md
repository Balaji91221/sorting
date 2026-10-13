# Sorting Algorithms · React Visualizer

**Explore sorting routines through animated array bars.**

React · JavaScript · React Router

## Purpose

This learning project separates sorting routines from their visual presentation. Algorithms emit animation events, and the interface uses those events to highlight comparisons and update bar heights.

## Included interface

- Merge Sort, Quick Sort, Heap Sort, and Bubble Sort controls.
- Random array generation.
- Controls for the number of bars and animation timing.
- Home, sorting, and contact routes.

## Run locally

Open the source directory with Node.js/npm installed:

```bash
npm install
npm start
```

Open [localhost:3000](http://localhost:3000), then navigate to `/sorting`. `npm run build` creates the frontend bundle.

## How to explore

Generate a small array, select a sort, and watch the bar colors and heights. Generate a new array before comparing another algorithm. The timing control changes the delay used by the animation scheduler; it is not an algorithm-throughput benchmark.

## Architecture

```text
React Router → SortingVisualizer
                    ├── array and control state
                    ├── sortingAlgorithms → animation events
                    └── timed DOM updates → colored array bars
```

## Source guide

- [`src/App.js`](src/App.js): page routing and shared navigation.
- [`SortingVisualizer.jsx`](src/components/Sorting/SortingVisualizer.jsx): controls and rendering.
- [`sortingAlgorithms.js`](src/components/sortingAlgorithms/sortingAlgorithms.js): algorithm and event generation.
- [`SortingVisualizer.css`](src/components/Sorting/SortingVisualizer.css): visual presentation.

## Current boundaries

This is an animation prototype. The renderer assumes groups of three events, while some algorithm functions emit different sequences; some visualizations can therefore misrepresent updates. Pending animation timers are not cancelled when another operation starts. These behaviors need refinement before treating the display as a correctness demonstration.

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
