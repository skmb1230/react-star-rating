# React Star Rating ⭐️

A customizable and lightweight star rating component for React. Perfect for implementing rating systems in your applications with ease.

---

## Features 🚀

- **Customizable**: Modify the number of stars, colors, size, and more.
- **Lightweight**: Built with performance and simplicity in mind.
- **Interactive**: Supports click events for user interaction.
- **TypeScript Support**: Fully typed for seamless integration.

---

## Installation 📦

To install the package, run the following command:

```tsx
npm install react-star-rating-test
```

## Usage 💡

Here's a basic example:

```ts
import React from "react";
import StarRating from "react-star-rating-test";

function App() {
  return <StarRating maxStars={5} currentScore={3} size={30} onClick={(rating) => console.log(`Rated: ${rating}`)} />;
}

export default App;
```

## Props 🛠️

| Name                 | Type                            | Default     | Description                                         |
| -------------------- | ------------------------------- | ----------- | --------------------------------------------------- |
| **`maxStars`**       | `number`                        | `5`         | Maximum number of stars.                            |
| **`currentScore`**   | `number`                        | `0`         | Initial rating value (can be updated dynamically).  |
| **`size`**           | `number`                        | `24`        | Size of each star in pixels.                        |
| **`starEmptyColor`** | `string`                        | `"#D2D2D2"` | Color of the empty stars.                           |
| **`starFillColor`**  | `string`                        | `"#FF501B"` | Color of the filled stars.                          |
| **`onClick`**        | `(currentStar: number) => void` | `undefined` | Callback function triggered when a star is clicked. |
| **`isClickable`**    | `boolean`                       | `true`      | Determines if the stars are clickable.              |
| **`containerStyle`** | `CSSProperties`                 | `{}`        | Custom styles for the container wrapping the stars. |
| **`starStyle`**      | `CSSProperties`                 | `{}`        | Custom styles for each star.                        |
