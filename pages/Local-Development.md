### Lint

Typescript Style Check

```bash
yarn lint
```

with autofix

```bash
yarn lint:fix
```

Sass Style Check

```bash
yarn lint:sass
```

Sass Style Autofix

```bash
yarn lint:sass:fix
```

Styled-Components Check

```bash
yarn lint:css
```

### Code Quality Analysis

```bash
yarn codequality
```

It will then generate `.codeclimate/codeclimate.html`
(Note: This takes time)

### Adding Dependencies

For Details Check [Here](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)

https://goo.gl/kGAWSS

![Dependency Mind Map](https://drive.google.com/uc?id=1vg0quZCNcOvm7vz10rIK6WFqmIH_VHy3)

#### Add `devDependencies`

    ```bash
    yarn add -D some-library
    ```

#### Add `dependencies`

    ```bash
    yarn add -E some-library
    ```

#### Add `peerDependencies`

1. Add `devDependencies`

    ```bash
    yarn add -D some-library
    ```

2. Update `package.json` to add `peerDependencies`

    ```json
    {
      "devDependencies": {
        "some-library": "^1.0.0"
      },
      "peerDependencies": {
        "some-library": "^1.0.0"
      }
    }
    ```

3. Update `README.md` the [Get Started](#get-started-integrate-to-your-project) session
to include your library in the install command

4. Update your consumer to include your `peerDependencies`

    ```bash
    npm i --save-dev some-library
    # or
    yarn add -D some-library
    ```
