import { LightningElement, api } from 'lwc';

export default class ProductTile extends LightningElement {

    _product;
    /** Product__c to display. */
    @api
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
        this.pictureUrl = value.Picture_URL__c;
        this.name = value.Name;
        this.msrp = value.MSRP__c;
        this.category = value.Category__c;
    }

    /** Product__c field values to display. */
    pictureUrl;
    name;
    msrp;
    category;

    handleClick() {
        const selectedEvent = new CustomEvent('selected', {bubbles: true, composed: true, detail: this.product});
        this.dispatchEvent(selectedEvent);
    }
}
