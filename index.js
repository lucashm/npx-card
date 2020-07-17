#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const options = {
  padding: 1,
  margin: 2,
  borderStyle: "classic",
  borderColor: "#2C2CFF",
};

const data = {
  logo: chalk.white(`   ___  _____       _              
  |_  |/  ___|     | |             
    | |\\ \`--.    __| |  ___ __   __
    | | \`--. \\  / _\` | / _ \\\\ \\ / /
/\\__/ //\\__/ / | (_| ||  __/ \\ V / 
\\____/ \\____/   \\__,_| \\___|  \\_/  
                                   
                                   `),
  name: chalk.white(" Lucas Malta /"),
  mail: chalk.hex("#2C2CFF")("lhqmalta@gmail.com"),
  work: chalk.white("JS Developer @ Devsquad"),
  twitter: chalk.hex("#2C2CFF")("https://twitter.com/granwithlasers"),
  github: chalk.hex("#2C2CFF")("https://github.com/lucashm"),
  web: chalk.hex("#2C2CFF")("//todo"),
  card: chalk.white("npx lucashm"),
};

const label = {
  work: chalk.white.bold("      Work:"),
  twitter: chalk.white.bold("   Twitter:"),
  github: chalk.white.bold("    GitHub:"),
  web: chalk.white.bold("       Web:"),
  card: chalk.white.bold("      Card:"),
};

const output = `${data.logo}
${data.name} ${data.mail}
${label.work}  ${data.work}
${label.twitter}  ${data.twitter}
${label.github}  ${data.github}
${label.card}  ${data.card}`;

console.clear();
console.log(chalk.magenta(boxen(output, options)));