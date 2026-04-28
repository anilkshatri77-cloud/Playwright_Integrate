exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.header = '.app_logo';
        this.firstProduct = '.inventory_item:first-child';
        this.firstProductName = '.inventory_item:first-child .inventory_item_name';
    }

    async getHeaderText() {
        return await this.page.locator(this.header).textContent();
    }

    async getFirstProductName() {
        return await this.page.locator(this.firstProductName).textContent();
    }

    async isHeaderVisible() {
        return await this.page.locator(this.header).isVisible();
    }

    async isFirstProductVisible() {
        return await this.page.locator(this.firstProduct).isVisible();
    }
};