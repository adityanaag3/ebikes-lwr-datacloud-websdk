import { LightningElement } from 'lwc';

export default class Login extends LightningElement {
    
    rendered = false;
    
    anonymousId;

    renderedCallback(){
        if(!this.rendered){
            this.rendered = true;
            this.anonymousId = SalesforceInteractions.getAnonymousId();
        }
    }

    handleLogin(){
        SalesforceInteractions.sendEvent({
            user: {
                attributes: {
                    eventType: 'identity',
                    firstName: 'Al',
                    lastName: 'Miller',
                    email: 'amiller@example.com',
                    isAnonymous: 1
                }
            }
        });

        SalesforceInteractions.sendEvent({
            user: {
                attributes: {
                    eventType: 'contactPointEmail',
                    email: 'amiller@example.com'
                }
            }
        });
    }
}