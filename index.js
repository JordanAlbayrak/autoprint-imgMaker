const Jimp = require('jimp');
const express = require('express');
const crypto = require('crypto');
const { Client, TextChannel, MessageAttachment } = require('discord.js');
const nano = require("nanoid");
const { unlinkSync } = require("fs");

const 
    SEEN = [],
    MAX = process.env.MAX ?? 10;
let index = 0;


const nanoid = nano.customAlphabet('1234567890abcdef', 10);

const client = new Client({
    intents: ['DIRECT_MESSAGES']
});



async function sendImage(path) {

    /**
     * @type {TextChannel}
     */
    const channel = await client.channels.fetch(process.env.CHANNEL_ID);
    if(!channel.isText()) {
        console.log("Non text channel")
        return null;
    }

    await channel.send({
        data: "Test",
        files: [path],
    })
    
}

const app = express();

const json = express.json({
    verify: (req, res, buf, encoding) => {
        
    const signature = crypto
        .createHmac("sha256", process.env.SHOPIFY_KEY)
        .update(buf)
        .digest("base64");

        req.headers['x-generated-signature'] = signature;
    }
});

app.use(json);
app.use((req, res, next) => {
    
    if(req.headers['x-generated-signature'] != req.headers['x-shopify-hmac-sha256']) {
        res.status(403).send("Forbidden.");
    }
    next();
})


app.post("*", async (req, res) => {

    const hash = crypto
        .createHash('md5')
        .update(getCustomer(req.body))
        .digest("hex");

    if(SEEN.includes(hash)) {
        console.log("Already seen. Ignoring");
        return res.sendStatus(202);
    }

    SEEN[index++] = hash;

    if(SEEN.length === MAX) {
        index = 0; // You could modulo but this is overflow immune
    }

    const img = await createImage(req.body);

    const fileName = nanoid() + ".png";
    img
        .writeAsync(fileName)
        .then(() => sendImage(fileName))
        .then(() => unlinkSync(fileName))
        .then(() => console.log(`Sent and deleted file ${fileName}`))
    

    res.send('OK')
});

const LINE_BREAK = 16;

async function createImage(CUSTOMER_DATA) {

    const image = new Jimp(256, 256, "white");
    const [font, fontSmall, logo, bar] = await Promise.all([
        Jimp.loadFont(Jimp.FONT_SANS_16_BLACK),
        Jimp.loadFont(Jimp.FONT_SANS_12_BLACK),
        Jimp.read("logo.png"),
        new Jimp(236, 5, "black"),
    ]);

    image.composite(logo.resize(64, 64), 256-64, 0);

    // Composite black line on label
    image.composite(bar, 10, 90);

    // Write FROM on label
    writeCoolText(
        image,
        fontSmall,
        "FROM: 2705 CROIS Marquise\nBrossard, J4Y 1P1\nQuebec, Canada",
        10,
        32,
        256,
        256,
        12,
    );

    const lines = getCustomer(CUSTOMER_DATA).split`\n`;
    let start = 200 - lines.length * LINE_BREAK;

    // Write customer info on label
    writeCoolText(
        image,
        font,
        getCustomer(CUSTOMER_DATA),
        0,
        start,
        256,
        256,
        16,
        {
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_CENTER,
        },
    );
    
    return image;
    
}
function getCustomer({ shipping_address: { first_name: firstName, last_name: lastName, address1: address, city, zip, province, country } }) {

    const softAdd = n => n ? `\n${n}`:'';

    return `${firstName} ${lastName}\n${address}\n${city} ${zip}${softAdd(province)}\n${country}`;
}

function writeCoolText(image, font, text, x, y, endX, endY, size, textOptions={}) {

    for(const line of text.split`\n`) {

        image.print(font, x, y, {
            ...textOptions,
            text: line
        }, endX, endY);
        y += size;
    }

    return image;
}

client.login(process.env.BOT).then(() => console.log("LMG MOUNTED N LOADED"));
app.listen(process.env.PORT || 8080);
