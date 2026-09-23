# Dev Insights : Mini Blog

DevInsights is a blog platform for Dev Insights employees to share web development tips, insights, and updates.

## Live Demo

View the deployed project: https://react-mini-blog.vercel.app/

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** as the build tool and dev server
- **CSS Modules** for component-scoped styling
- Inline styles for one conditionally-computed style


## Project Structure

```
react-mini-blog/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Post.tsx
│   │   ├── PostList.tsx
│   │   └── withLogger.tsx
│   ├── styles/
│   │   ├── About.module.css
│   │   ├── Footer.module.css
│   │   ├── Header.module.css
│   │   ├── Post.module.css
│   │   └── PostList.module.css
│   ├── types/
│   │   └── Post.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

This project was built with **Vite**, so setup and running it locally is fast.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ateteN/react-mini-blog.git
   cd react-mini-blog/react-mini-blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the app

Start the Vite dev server:

```bash
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### Building for production

```bash
npm run build
```

This outputs a production-ready bundle to the `dist/` folder.

### Linting

```bash
npm run lint
```

## Component Design Decisions

### functional components

Post is implemented as a functional component. I used a functional component for `post` because it mainly focuses on displaying data passed into it through props. Using a class Component would make the code much more complicated. And functional components are also more common approach in modern React. 

Another reason is that it can easily be wrapped with `react.memo` later if I want to improve performance. With class components, i would have to use something like `PureComponent` instead which would add another unnecessary approach for something so simple.

### `Header`, `About`, `PostList`, `Footer`, `App`

All of these are functional components. `PostList` contains the sample posts which are currently hardcoded and use a shared `post` interface from the src/types/Post.ts file. This also helps keep track of the filters the user has selected and uses that to filter the posts that are displayed. 

The selected posts are then passed to the `post` component through props. `header`, `About`, `Footer` are mainly used to organize and give the blog page a complete look.

## Styling Approach

Two styling methods were used in the project. 

1. **External CSS (CSS Modules)**: Each component has its own `.module.css` file (such as `Header.module.css`, `About.module.css`, `PostList.module.css`, `Post.module.css`, `Footer.module.css`) i used these files for things like layout, colors, spacing, and cards. CSS modules also helps keep the styles specific to each component, which will also reduce the chance of conflicting class names. 

2. **Inline styles**: i used inline styling in `Post,tsx` for the author highlight feature, so the styling changes depending on whetherthe posts's author matches the featured author. Since this is something that is applied while a component is running i used inline styling instead of using separate css class.


### Conditional styling implemented

- **Author highlight:** posts  made by a featured author have a different background color. this style is applied based on who the author of the post is. 

- **"New!" badge:** If a post is released with 24 hours it has a new badge, this is done by checking the post's date and displaying the badge only when the condition is true. 

- **Active filter state:** The topic filter that is selected looks different from other buttons. a CSS class is added to the selected button so that the user can easilysee which filter is active.

## Additional Features

Beyond the requirements the app also has these features:

- **About section** : a short intro area above the post list.
- **Footer** : has site name and year.
- **6 sample posts** 
- **Topic filtering** : Implemented to show the "Featured" posts and how they differ from the rest of the card components.

## Optimization & HOC

- **React.memo:** I used React.memo with the `Post` component to avoid unnecessary re-renders. This means that if the `PostList` component re-renders, the individual posts do not have to re-render unless their own data has changed. 

- **Stable key prop:** Each post uses `post.id` as its key instead of using the array index. Since each post now has its own unique ID, React can use it to identify each post properly, even if the order of the posts changes.

- **`withLogger` HOC:** I created a Higher Order Component (`withLogger`) in `src/components/withLogger.tsx`, it wraps another component and logs a message to the console when that component is mounted or unmounted. It is used with the `Header` component currently to add extra behaviour to a component but without actually changing the original component itself. 

## Challenges Faced

One challenge i faced was getting the filtering functionality to work correctly. I had to make sure that the selected topic was stsore in state and the posts were filtered based on that value, meaning i also had to make it so that selecting a different topic updated the displayed posts without changing the original post array. 

Using React.memo was also another challenge because I needed to understand what actually causes a component to re-render. I had to make sure that the `Post` received stable props and that the memorization was actually useful when `PostList` re-rendered after a filter change. 

And Finally, because several features were connected, changing one part of the code could affect another part. Like changing the way posts were filtered could affect which posts rendered and therefore it affected memorization and conditional styling. To avoid this i had to test the different features together rather than checking them individually which was a real struggle. 

## External Libraries / Packages

- No additional runtime libraries beyond React and ReactDOM were added.
- Dev dependencies: TypeScript, Vite, ESLint, and their associated React plugins (all scaffolded by `npm create vite@latest -- --template react-ts`).
- Images are sourced from Unsplash 

## Author
Norette Atete