// This code was created to warn developers about the package confusion vulnerability and to prevent myself of the same mistake
// To read more, how important it is please follow the link: https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610

const message =
  "\x1b[31m Probably, you installed this package because of the typo. Try to install puppeteer instead";

throw new Error(message);
