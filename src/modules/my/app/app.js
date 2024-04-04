import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    
    selectedProduct;
    
    handleSelected(event){
        this.selectedProduct = event.detail;

        SalesforceInteractions.sendEvent({
            interaction: {
                name: 'View Catalog Object',
                catalogObject: {
                    type: 'Product',
                    id: this.selectedProduct.Id,
                }
            }
        });
    }
}
