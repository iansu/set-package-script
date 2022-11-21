const fs = require('fs');
const findUp = require('find-up');

const packageJsonPath = findUp.sync('package.json');
const packageJsonContents = fs.readFileSync(packageJsonPath, 'utf8');
const [key, value] = process.argv.slice(2);

if (!key) {
  console.log('Usage: set-script <name> [command]');
  process.exit(1);
}

try {
  const packageJson = JSON.parse(packageJsonContents);

  if (packageJson.scripts && packageJson.scripts[key] !== undefined) {
    if (value === undefined) {
      delete packageJson.scripts[key];
    } else {
      packageJson.scripts[key] = value;
    }
  } else if (value !== undefined) {
    packageJson.scripts = {
      ...packageJson.scripts,
      [key]: value,
    };
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
} catch (error) {
  console.error('Error parsing package.json', error);
  process.exit(1);
}
