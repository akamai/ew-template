# EW Template
EdgeWorkers template with Jest and Rollup.

## Setup
### 1. Install Akamai CLI and EdgeWorker command
1. Install Akamai CLI
    * https://github.com/akamai/cli?tab=readme-ov-file#install-akamai-cli
2. Install EdgeWorkers command
    * https://github.com/akamai/cli-edgeworkers?tab=readme-ov-file#install-or-update-the-edgeworkers

### 2. Modify package.json
Modify following fields.

| field name | description | example |
|---|---|---|
| ewid | EdgeWorker ID. Replace with newly created one. | 79619 |
| section | Section name of credentials in .edgerc | "default" |
| propertyhostname | Property Hostname which executes EdgeWorkers. Use this to generate debug token. | "www.example.com" |

### 3. Install yarn
If you have not installed `yarn`, install first.

```bash
npm install --global yarn
```

### 4. Install dev-dependencies
Install all JavaScript dependencies listed in the package.json.
```bash
yarn install
```

## Workflows with yarn commands
### Running unit test
```bash
yarn test
```

### Build code budle
Creates `dist/bundle.tgz`.  
`bundle.json` is created/updated automatically using `version` and `description` fields in `package.json`.
```bash
yarn build
```

### Upload code bundle
Uploads `dist/bundle.tgz` to Akamai.
```bash
yarn upload
```

### Activate code bundle to staging network
Note: You need to activate the code bundle to production network **manually**.  
This is to prevent operational mistakes.
```bash
yarn push-staging
```

### Generate token for the Enhanced Debug Header
Please make sure that the `propertyhostname` field in `package.json` is updated appropriately.
```bash
yarn token
```

## List of yarn commands
You don't have to type exact parameters manually each time :)

| command | description |
| --- | --- |
| `yarn deploy` | Run build, upload, push-staging and push-progress sequentially. |
| `yarn test` | Run unit test and show test coverage |
| `yarn ew-versions` | show uploaded code bundle versions |
| `yarn set-version` | show current version and set new version number |
| `yarn build` | Create code bundle in dist directory |
| `yarn upload` | Upload code bundle in dist directory |
| `yarn push-staging` | Activate code bundle to staging network |
| `yarn push-progress` | Open ACC which displays activation progress |
