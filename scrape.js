// Thanks to stefan baumgartner for the script
// https://fettblog.eu/scraping-with-puppeteer/
const puppeteer = require("puppeteer");
const { URL } = require("url");
const fse = require("fs-extra");
const path = require("path");

async function start(urlToFetch) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	page.on("response", async response => {
		const url = new URL(response.url());
		let filePath = path.resolve(`./output${url.pathname}`);
		if (path.extname(url.pathname).trim() === "") {
			filePath = `${filePath}/index.html`;
		}
		await fse.outputFile(filePath, await response.buffer());
	});

	await page.goto(urlToFetch, {
		waitUntil: "networkidle2"
	});

	setTimeout(async () => {
		await browser.close();
	}, 60000);
}

start("https://www.gulfcoast.edu");
