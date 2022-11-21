# set-package-script

A replacement for the deprecated npm set-script command

## Usage

```sh
npx set-package-script <script-name> [command]
```

## Examples

### Add a build script

```sh
npx set-package-script build "tsc -p tsconfig.json"
```

### Delete a prepare script

```sh
npx set-package-script prepare
```

If you don't provide a command and there's an existing script defined it will be removed
