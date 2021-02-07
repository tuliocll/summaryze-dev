// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cheerio from "cheerio";
import fetch from "node-fetch";

export default async (req, res) => {
  const {
    query: { url },
  } = req;

  if (!url) {
    return res.status(400).json({ error: "No url provided" });
  }

  var regex = new RegExp(
    "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
  );

  if (!regex.test(url)) {
    return res.status(400).json({ error: "This is not a valid url" });
  }

  const whiteList = [
    "http://dev.to",
    "https://dev.to",
    "http://www.dev.to",
    "https://www.dev.to",
  ];

  const response = await fetch(url);

  const body = await response.text();

  const domain = new URL(url);
  if (!whiteList.includes(domain.origin)) {
    return res.status(400).json({ error: `${url} is not a dev.to url` });
  }

  const $ = cheerio.load(body);

  const titleList = [];
  const linksList = [];

  const anchors = $(".anchor");

  if (anchors.length === 0) {
    return res.status(400).json({
      error:
        "No anchors found! did you used a achored links? https://dev.to/p/editor_guide#markdown-links",
    });
  }

  anchors.each((i, element) => {
    linksList.push($(element).prop("href"));
    const teste = $(element).parent().text();
    titleList.push(teste.replace(/ \n |\n |\n/g, ""));
  });

  const finalResult = titleList.map((title, index) => {
    return `* [${title}](${linksList[index]}) `;
  });

  return res.status(200).json({ sumary: finalResult });
};
