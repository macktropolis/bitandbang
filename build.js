"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");
const reduce = require("bluebird/js/release/reduce");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("   Mack Richardson"),
  handle: chalk.white("macktropolis"),
  shorthandle: chalk.white("mor"),
  work: chalk.white("Web Developer at Qube Consulting"),
  facebook: chalk.gray("https://facebook.com/") + chalk.cyan("macktropolis"),
  // npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray("https://github.com/") + chalk.green("macktropolis"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("macktropolis"),
  web: chalk.cyan("https://mackrichardson.com"),
  codepen:
    chalk.cyan("https://codepen.io") + " " + chalk.white("mackorichardson"),
  npx: chalk.red("npx") + " " + chalk.gray("macktropolis"),
  labelWork: chalk.white.bold("     Work:"),
  labelFacebook: chalk.white.bold(" Facebook:"),
  labelCodepen: chalk.white.bold("  CodePen:"),
  labelGitHub: chalk.white.bold("   GitHub:"),
  labelLinkedIn: chalk.white.bold(" LinkedIn:"),
  labelWeb: chalk.white.bold("      Web:"),
  labelCard: chalk.white.bold("     Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const facebooking = `${data.labelFacebook}  ${data.facebook}`;
const penning = `${data.labelCodepen}  ${data.codepen}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  facebooking +
  newline + // data.labelFacebook + data.facebook
  penning +
  newline + // data.labelCodepen + data.codepen
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
