# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Docker Setup

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Using Docker Compose (Recommended)

1. **Build and start the container:**
   ```bash
   docker compose up --build -d
   ```
2. **Access the web app:**
   Open [http://localhost:8081](http://localhost:8081) in your browser.

3. **Stop the container:**
   ```bash
   docker compose down
   ```

### Using Docker CLI

1. **Build the Docker image:**
   ```bash
   docker build -t ersalonwala-customer-web .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8081:80 --name ersalonwala_customer_web ersalonwala-customer-web
   ```

3. **Stop & remove the container:**
   ```bash
   docker stop ersalonwala_customer_web
   docker rm ersalonwala_customer_web
   ```

