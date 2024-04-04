import * as jwt from 'salesforce-jwt-bearer-token-flow';
import * as fs from 'fs';
import jsforce from 'jsforce';
import 'dotenv/config';

// Retrieve Environment Variables
const { SF_CONSUMER_KEY, SF_USERNAME, SF_LOGIN_URL } = process.env;
let PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
    PRIVATE_KEY = fs.readFileSync('private.pem').toString('utf8');
}

let conn;

// Auth to Salesforce using JWT Flow
jwt.getToken(
    {
        iss: SF_CONSUMER_KEY,
        sub: SF_USERNAME,
        aud: SF_LOGIN_URL,
        privateKey: PRIVATE_KEY
    },
    function(err, token){
        if(token){
            console.log('Successfully authenticated to Salesforce using JWT. Below is the access token');
            console.log(token.access_token);
            conn = new jsforce.Connection({
                instanceUrl: token.instance_url,
                accessToken: token.access_token
            });
        } else if (err) {
            console.error(err);
            process.exit(-1);
        }
    }
);

// Query records from Todo__c object
export async function getProducts(req, res){
    try{
        const result = await conn.query("SELECT Id, Name, MSRP__c, Description__c, Category__c, Level__c, Picture_URL__c, Material__c, Fork__c, Front_Brakes__c, Rear_Brakes__c, Battery__c, Charger__c, Motor__c FROM Product__c");
        res.json(result);
    } catch(e){
        res.status(500).send(e.message);
    }
}