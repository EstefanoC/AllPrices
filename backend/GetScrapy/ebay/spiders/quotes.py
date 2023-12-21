import scrapy
from urllib.parse import urljoin


class ebaySpider(scrapy.Spider):
    name = "ebay"

    def start_requests(self):
        keyword_list = ['ps5']
        for keyword in keyword_list:
            ebay_search_url = f'https://www.ebay.com/sch/i.html?_dcat=139971&_fsrp=1&rt=nc&_from=R40&_nkw={keyword}&_sacat=1249'
            yield scrapy.Request(url=ebay_search_url, callback=self.discover_product_urls, meta={'keyword': keyword, 'page': 1})

    def discover_product_urls(self, response):
        product_links = response.xpath(
            '//a[@class="s-item__link"]/@href').getall()

        if product_links:
            yield from response.follow_all(product_links, callback=self.parse_product_data)
            next_page = response.xpath(
                '//a[@aria-label="Go to next search page"]/@href').get()

        if next_page:
            yield response.follow(next_page, callback=self.discover_product_urls)

    def parse_product_data(self, response):
        # fmt: off
        prod_title = ''.join(response.xpath('//h1[@class="x-item-title__mainTitle"]/span/text()').getall())
        prod_price = ''.join(response.xpath('//div[@class="x-price-primary"]/span//text()').getall())
        prod_images = response.xpath('//div[@class="ux-image-carousel-container"]//img/@src').getall()
        # fmt: on

        yield {
            "name": prod_title,
            "price": prod_price,
            "images": prod_images,
        }
