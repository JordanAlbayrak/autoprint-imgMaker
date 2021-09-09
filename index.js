const Jimp = require('jimp');
const express = require('express');

const app = express();
app.use(express.json())

app.post("*", (req, res) => {

    res.json({

        headers: req.headers,
    })
    return
    //createImage(req.body)
    res.send('OK')
});

const LINE_BREAK = 16;

async function createImage(CUSTOMER_DATA) {

    new Jimp(256, 256, "white", async (err, image) => {
    
        const [font, fontSmall, logo, bar] = await Promise.all([
            Jimp.loadFont(Jimp.FONT_SANS_16_BLACK),
            Jimp.loadFont(Jimp.FONT_SANS_12_BLACK),
            Jimp.read("logo.jpg"),
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
        image.write("test.png");
    });
    
}
function getCustomer({ shipping_address: { first_name: firstName, last_name: lastName, address1: address, city, zip, province, country } }) {
    return `${firstName} ${lastName}\n${address}\n${city} ${zip}\n${province}\n${country}`;
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

app.listen(8080);
