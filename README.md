# react-hooks-crash-course

Work-thru of the [Beginner's Guide to React w/ Hooks](https://www.youtube.com/watch?v=9U3IhLAnSxM)

# 09.07.2020

Starting this repo to workthru the above tutorial as a project to learn React.js. This README is going to act as a personal log to jot down steps, notes, and thoughts about the process.

I've got Node.js and npm installed, so a quick use of `npx create-react-app` created a new React application in my project folder, 'react-hooks-crash-course.' After that did a quick `git init` in the terminal to setup my local git repo, connected my local repo to the remote repo, made my first commit, and pushed it up to the master branch. Then another quick commit to update the README, and we're off.

After that, I created a quick example component following the tutorial called 'Navbar', and imported it into App.js after modifying the default boilerplate of the application.

Next I created another component called 'Greeter' to experiment with props and with events. Greeter is a component that accepts a few different props - "name", "age", and "excitment" - and uses them to render dynamic content to the the DOM. I also created a quick button with an arrow function through onClick that alerts a quick hello.
