const Jimp = require('jimp');

const MOCK_DATA = {"id":4081486823578,"admin_graphql_api_id":"gid:\/\/shopify\/Order\/4081486823578","app_id":580111,"browser_ip":"72.143.199.1","buyer_accepts_marketing":false,"cancel_reason":null,"cancelled_at":null,"cart_token":"a800025482e7daab39636b1a1f9d02d8","checkout_id":21177872613530,"checkout_token":"182268dcc33c04fcbd5849944af33c1e","client_details":{"accept_language":"en-CA,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6","browser_height":null,"browser_ip":"72.143.199.1","browser_width":null,"session_hash":null,"user_agent":"Mozilla\/5.0 (Linux; Android 11; SM-G781W) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/92.0.4515.166 Mobile Safari\/537.36"},"closed_at":null,"confirmed":true,"contact_email":"julia.luts.21@gmail.com","created_at":"2021-09-07T14:23:47-04:00","currency":"CAD","current_subtotal_price":"21.99","current_subtotal_price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"current_total_discounts":"0.00","current_total_discounts_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"current_total_duties_set":null,"current_total_price":"21.99","current_total_price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"current_total_tax":"0.00","current_total_tax_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"customer_locale":"en","device_id":null,"discount_codes":[],"email":"julia.luts.21@gmail.com","estimated_taxes":false,"financial_status":"paid","fulfillment_status":null,"gateway":"shopify_payments","landing_site":"\/","landing_site_ref":null,"location_id":null,"name":"#1729","note":null,"note_attributes":[],"number":729,"order_number":1729,"order_status_url":"https:\/\/www.sugarclaws.com\/50887622810\/orders\/d941c3160c4939f5f183beabef3d805b\/authenticate?key=a62b477e8bdfffef7c963d476c1210a9","original_total_duties_set":null,"payment_gateway_names":["shopify_payments"],"phone":null,"presentment_currency":"CAD","processed_at":"2021-09-07T14:23:46-04:00","processing_method":"direct","reference":null,"referring_site":"https:\/\/www.google.com\/","source_identifier":null,"source_name":"web","source_url":null,"subtotal_price":"21.99","subtotal_price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"tags":"","tax_lines":[],"taxes_included":false,"test":false,"token":"d941c3160c4939f5f183beabef3d805b","total_discounts":"0.00","total_discounts_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"total_line_items_price":"21.99","total_line_items_price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"total_outstanding":"0.00","total_price":"21.99","total_price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"total_price_usd":"17.55","total_shipping_price_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"total_tax":"0.00","total_tax_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"total_tip_received":"0.00","total_weight":100,"updated_at":"2021-09-07T14:23:52-04:00","user_id":null,"billing_address":{"first_name":"Julia","address1":"16 Elgin Street","phone":"6479362103","city":"Markham","zip":"L3T 4T4","province":"Ontario","country":"Canada","last_name":"Lutsenko","address2":"143","company":"","latitude":43.8125931,"longitude":-79.4220507,"name":"Julia Lutsenko","country_code":"CA","province_code":"ON"},"customer":{"id":4578978365594,"email":"julia.luts.21@gmail.com","accepts_marketing":false,"created_at":"2021-02-11T15:28:22-05:00","updated_at":"2021-09-07T14:23:48-04:00","first_name":"Julia","last_name":"Lutsenko","orders_count":4,"state":"disabled","total_spent":"95.77","last_order_id":4081486823578,"note":null,"verified_email":true,"multipass_identifier":null,"tax_exempt":false,"phone":null,"tags":"","last_order_name":"#1729","currency":"CAD","accepts_marketing_updated_at":"2021-02-11T15:28:22-05:00","marketing_opt_in_level":null,"admin_graphql_api_id":"gid:\/\/shopify\/Customer\/4578978365594","default_address":{"id":6775060168858,"customer_id":4578978365594,"first_name":"Julia","last_name":"Lutsenko","company":"","address1":"16 Elgin Street","address2":"143","city":"Markham","province":"Ontario","country":"Canada","zip":"L3T 4T4","phone":"+16479362103","name":"Julia Lutsenko","province_code":"ON","country_code":"CA","country_name":"Canada","default":true}},"discount_applications":[],"fulfillments":[],"line_items":[{"id":10393696436378,"admin_graphql_api_id":"gid:\/\/shopify\/LineItem\/10393696436378","fulfillable_quantity":1,"fulfillment_service":"manual","fulfillment_status":null,"gift_card":false,"grams":100,"name":"Powder - Classic Matte White","origin_location":{"id":2598821593242,"country_code":"CA","province_code":"QC","name":"SugarClaws","address1":"2705 Rue Marquise","address2":"","city":"Brossard","zip":"J4Y 1P1"},"price":"21.99","price_set":{"shop_money":{"amount":"21.99","currency_code":"CAD"},"presentment_money":{"amount":"21.99","currency_code":"CAD"}},"product_exists":true,"product_id":6039627661466,"properties":[],"quantity":1,"requires_shipping":true,"sku":"","taxable":false,"title":"Powder - Classic Matte White","total_discount":"0.00","total_discount_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"variant_id":37453802668186,"variant_inventory_management":"shopify","variant_title":"","vendor":"SugarClaws","tax_lines":[],"duties":[],"discount_allocations":[]}],"payment_details":{"credit_card_bin":"451015","avs_result_code":"Y","cvv_result_code":null,"credit_card_number":"•••• •••• •••• 3376","credit_card_company":"Visa"},"refunds":[],"shipping_address":{"first_name":"Julia","address1":"16 Elgin Street","phone":"+16479362103","city":"Markham","zip":"L3T 4T4","province":"Ontario","country":"Canada","last_name":"Lutsenko","address2":"143","company":"","latitude":43.8125931,"longitude":-79.4220507,"name":"Julia Lutsenko","country_code":"CA","province_code":"ON"},"shipping_lines":[{"id":3426947924122,"carrier_identifier":null,"code":"Standard","delivery_category":null,"discounted_price":"0.00","discounted_price_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"phone":null,"price":"0.00","price_set":{"shop_money":{"amount":"0.00","currency_code":"CAD"},"presentment_money":{"amount":"0.00","currency_code":"CAD"}},"requested_fulfillment_service_id":null,"source":"shopify","title":"Standard","tax_lines":[],"discount_allocations":[]}]}
const LINE_BREAK = 16;

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

    const lines = getCustomer(MOCK_DATA).split`\n`;
    let start = 200 - lines.length * LINE_BREAK;

    // Write customer info on label
    writeCoolText(
        image,
        font,
        getCustomer(MOCK_DATA),
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
