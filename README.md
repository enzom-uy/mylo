# This project is now dead due to Snap Inc letting Gfycat die without warning.
I'm currently evaluating another alternatives to Gfycat, but it will take some time.

---
<div align="center">
  <img src="https://i.imgur.com/aWnWy4n.png" alt="logo" width="700" />
  <h1>Mylo</h1>
  <p>
    Website for me and my friends to upload useful CS:GO utilities.
  </p>
<!-- Badges -->
<p>
  <a href="https://github.com/enzom-uy/mylo/commits">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/enzom-uy/mylo">
  </a>
  <a href="https://github.com/enzom-uy/mylo/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enzom-uy/mylo" /> 
  </a>
</p>
<h4>
    <a href="https://mylo.vercel.app/">Website</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the project](#star2-about-the-project)
    - [:camera: Screenshots](#camera-screenshots)
  - [:space_invader: Technologies](#space_invader-technologies)
  - [Starting the project](#starting-the-project)
    - [Prerequirements](#prerequirements)
    - [:running: Running the project locally](#running-running-the-project-locally)
<!-- About the Project -->

## :star2: About the project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://i.imgur.com/aWnWy4n.png" alt="Demo screenshot" width="800" />
</div>

<!-- TechStack -->

## :space_invader: Technologies

* [Typescript](https://www.typescriptlang.org/)
  * Javascript superset that makes it actually safe (and kinda fun 😁) to use.
* [Nextjs](https://nextjs.org/)
  * Next is the Javascript/React framework that I chose for this project, since it's currently the one that interests me the most and fits my needs.
* [tRPC](https://trpc.io/)
  * I used tRPC instead of something like Express or GraphQL, mainly because I really like the [t3 stack](https://github.com/t3-oss/create-t3-app).
* [Chakra UI](https://chakra-ui.com/).
  * I chose to use a Component Library like Chakra UI because it allowed me to be more focused on my code, instead of styling. It increased my development time, and it's the one that I find more easy to customize if I need to.
  * Chakra needs [Framer-motion](https://www.framer.com/motion/) to work 
* [Prisma](https://www.prisma.io/) and [MySQL with Planetscale](https://planetscale.com/)
  * I really wanted to try something differente than MongoDB or Firebase, basically I wanted to give relational databases a try. Also, giving the nature of my project (having users, letting users upload stuff, etc), a document-based approach in my database would've been a nightmare to work with.
* [Next-Auth](https://next-auth.js.org/)
  * Authentication has never been easier than with Next-auth.

<!-- Getting Started -->

## Starting the project.

<!-- Prerequisites -->

### Prerequirements

This project uses either yarn or npm as dependency/package manager. You should have npm installed if you already have Node. If you choose to use yarn, run the next command to install it:

```bash
 npm i -g yarn
```

<!-- Run Locally -->

### :running: Running the project locally

Clone the project:

```bash
  git clone git@github.com:enzom-uy/mylo.git
```

Go to the project directory:

```bash
  cd mylo
```

Install dependencies:

```bash
# with yarn:
  yarn
# with npm:
  npm install
```

Start the development server:

```bash
# with yarn:
  yarn start
# with npm:
  npm start
```

You'll need to declare some env variables if you actually want it to work.
