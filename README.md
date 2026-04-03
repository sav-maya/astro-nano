# sav-db.com

Personal portfolio and blog built with [Astro](https://astro.build/), Tailwind CSS, and TypeScript.

## Node version

Use **Node 22 LTS** (this repo has a `.nvmrc` with `22`). **Node 25** often causes `npm install` to sit forever with no output.

```bash
nvm install 22
nvm use
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run build`   | Build to `./dist/`                          |
| `npm run preview` | Preview the production build locally        |

## If `npm install` never finishes

1. Switch to Node **22** (see above), delete `node_modules`, try again.
2. Or use Docker (installs deps inside Linux, no local npm):

```bash
docker build -t sav-site .
docker run --rm -p 4321:4321 sav-site
```

Open [http://localhost:4321](http://localhost:4321).

## License

MIT — see [LICENSE](./LICENSE).
