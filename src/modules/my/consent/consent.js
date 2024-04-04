import { LightningElement } from 'lwc';

export default class Consent extends LightningElement {

    rendered = false;

    optInDisabled = false;
    optOutDisabled = false;

    renderedCallback(){
        if(!this.rendered){
            this.rendered = true;

            const consentsFromWebSDK = SalesforceInteractions.getConsents();
            if(consentsFromWebSDK.length > 0 && consentsFromWebSDK[0].consent.status == SalesforceInteractions.ConsentStatus.OptIn){
                this.optInDisabled = true;
            } else {
                this.optOutDisabled = true;
            }

            // Alternate Implementation
            /* if(SalesforceInteractions.currentConsentOptInExists()){
                this.optInDisabled = true;
            } else {
                this.optOutDisabled = true;
            } */
        }

    }

    handleOptIn(){
        SalesforceInteractions.updateConsents({ 
            purpose: SalesforceInteractions.ConsentPurpose.Tracking, 
            provider: "OneTrust", 
            status: SalesforceInteractions.ConsentStatus.OptIn 
        });
        this.optInDisabled = true;
        this.optOutDisabled = false;
    }

    handleOptOut(){
        SalesforceInteractions.updateConsents({ 
            purpose: SalesforceInteractions.ConsentPurpose.Tracking, 
            provider: "OneTrust", 
            status: SalesforceInteractions.ConsentStatus.OptOut
        });
        this.optOutDisabled = true;
        this.optInDisabled = false;
    }

}