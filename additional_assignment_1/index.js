const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.morele.net/komputery/podzespoly-komputerowe/dyski-hdd-4/';
// const url = 'https://www.morele.net/komputery/dyski-i-nosniki-danych/dyski-zewnetrzne-207/';
const baseUrl = 'https://www.morele.net'


class Product {
    constructor(name, price, capacity) {
        this.name = name;
        this.price = price;
        this.capacity = capacity;
    }

    priceUnit(){
        return this.price/this.capacity;
    }
}
function compare(a,b) {
    if(a.priceUnit() > b.priceUnit()) return 1;
    if(a.priceUnit() < b.priceUnit()) return -1;


}
class Scrapper {
    constructor(url, baseUrl) {
        this.startUrl = url;
        this.baseUrl = baseUrl;
        this.paginationLinks = [];
        this.products = [];
    }


    scrapPagLinks(html) {
        const temp = [];
        const baseUrl = this.baseUrl;
        $('a.pagination-btn', html).each(function (i, e) {
            let link = $(e).attr('href');
            link = baseUrl + link;
            if (!temp.includes(link)) {
                temp.push(link)
            }
        });
        this.paginationLinks = temp;
        // console.log(this.paginationLinks.length);
    }

    scrapProducts(html) {

        const temp = [];
        $('div.cat-product', html).each(function (i, e) {
            let productName = $(e).attr('data-product-name');
            let productPrice = $(".price-new", e).text();
            let productCapacity = $('.cat-product-feature:contains("Pojemność dysku:")', e).text().replace(/Pojemność dysku:\n/, "").trim();
            // console.log(productCapacity);
            let capValue = parseInt(productCapacity.slice(0, productCapacity.length - 3));
            if (productCapacity.slice(productCapacity.length - 2) === 'TB') {
                capValue = capValue * 1000;
            }
            // console.log(productPrice);
            productPrice = productPrice.slice(0,productPrice.length-2).replace(/,/, '.').replace(/ /,"");
            // console.log(parseFloat(productPrice));
            let tempProduct = new Product(productName, parseFloat(productPrice), capValue);
            temp.push(tempProduct)
        });
        // console.log(temp);

        for(let prod of temp){
            this.products.push(prod)
        }
        // console.log(this.products)
    }

    showResult(){

        for(let product of this.products){
            console.log(`Name: ${product.name}`);
            console.log(`Price: ${product.price}zł`);
            // console.log(`Capacity: ${product.capacity}`);
            console.log(`Price/Unit: ${product.priceUnit().toFixed(3)}\n`);
        }

    }


    async main() {
        await rp(this.startUrl)
            .then(html =>
                this.scrapPagLinks(html)
            )
            .catch(
                function (err) {
                    //handle error
                }
            );

        let link;
        for (link of this.paginationLinks) {
            await rp(link)
                .then(html =>
                    this.scrapProducts(html)
                )
                .catch(
                    function (err) {
                        //handle error
                    }
                );

        }
        this.products = this.products.sort(compare);
        this.showResult()

    }


}

scrapper = new Scrapper(url, baseUrl);
scrapper.main();