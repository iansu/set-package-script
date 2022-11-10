# set-script

A replacement for the deprecated npm set-script command

## Usage

```sh
npx set-script <script-name> [command]
```

## Examples

### Add a build script

```sh
npx set-script build "tsc -p tsconfig.json"
```

### Delete a prepare script

```sh
npx set-script prepare
```

If you don't provide a command and there's an existing script defined it will be removed
