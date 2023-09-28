# HRNet website

- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Bun](#bun)
  - [Node](#node)

## Introduction

This website is used to create and employee into a fictional database.

This project is built
using [React](https://react.dev), [Tailwind](https://tailwindcss.com/), [Typescript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
and finally the brand-new [Bun](https://bun.sh/) js runtime (no worries, it's still compatible with the Node.js runtime).

## Getting started

### Bun

I consider you already have [Bun](https://bun.sh/) installed on your machine. If not, please follow
the [installation guide](https://bun.sh/docs/installation).

Install the dependencies:

```bash
bun install
```

Then run the development server:

```bash
bun run dev
```

### Node

If you don't want to use [Bun](https://bun.sh/), you can still use the classic Node.js way.

Install the dependencies:

```bash
npm install
```

This project was built using Bun, so you need first to change the `dev` script in the `package.json` file:

```json
"scripts": {
"dev": "vite",
}
```

Then run the development server:

```bash
npm run dev
```
