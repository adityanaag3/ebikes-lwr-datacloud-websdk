import { LightningElement, track } from 'lwc';

export default class ProductTileList extends LightningElement {

    /** Current page in the product list. */
    pageNumber = 1;

    /** The number of items on a page. */
    pageSize;

    /** The total number of items matching the selection. */
    totalItemCount = 0;

    /** JSON.stringified version of filters to pass to apex */
    filters = {};

    @track products = {};


    connectedCallback() {
        /*fetch('/api/getProducts')
            .then((res) => {
                res.json().then((data) => {
                    this.products.data = data;
                });
            })
            .catch((e) => {
                console.error(e);
            });*/
        
        this.products.data = {
            "totalSize": 16,
            "done": true,
            "records": [
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvZEAW"
                },
                "Id": "a1Oa5000000BLvZEAW",
                "Name": "FUSE X1",
                "MSRP__c": 2500,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/fusex1.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring",
                "Front_Brakes__c": "Dual-pivot caliper brake",
                "Rear_Brakes__c": "Dual-pivot caliper brake",
                "Battery__c": "401Wh",
                "Charger__c": "41V4A",
                "Motor__c": "251 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvaEAG"
                },
                "Id": "a1Oa5000000BLvaEAG",
                "Name": "FUSE X2",
                "MSRP__c": 2600,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/fusex2.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring",
                "Front_Brakes__c": "Dual-pivot caliper brake",
                "Rear_Brakes__c": "Dual-pivot caliper brake",
                "Battery__c": "402Wh",
                "Charger__c": "42V4A",
                "Motor__c": "252 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvbEAG"
                },
                "Id": "a1Oa5000000BLvbEAG",
                "Name": "FUSE X3",
                "MSRP__c": 2700,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/fusex3.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring",
                "Front_Brakes__c": "Dual-pivot caliper brake",
                "Rear_Brakes__c": "Dual-pivot caliper brake",
                "Battery__c": "403Wh",
                "Charger__c": "43V4A",
                "Motor__c": "253 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvcEAG"
                },
                "Id": "a1Oa5000000BLvcEAG",
                "Name": "FUSE X4",
                "MSRP__c": 2800,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/fusex4.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring",
                "Front_Brakes__c": "Dual-pivot caliper brake",
                "Rear_Brakes__c": "Dual-pivot caliper brake",
                "Battery__c": "404Wh",
                "Charger__c": "44V4A",
                "Motor__c": "254 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvdEAG"
                },
                "Id": "a1Oa5000000BLvdEAG",
                "Name": "DYNAMO X1",
                "MSRP__c": 7000,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Racer",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/dynamox1.jpg",
                "Material__c": "Carbon",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "501Wh",
                "Charger__c": "41V4A",
                "Motor__c": "281 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLveEAG"
                },
                "Id": "a1Oa5000000BLveEAG",
                "Name": "DYNAMO X2",
                "MSRP__c": 7200,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Racer",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/dynamox2.jpg",
                "Material__c": "Carbon",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "502Wh",
                "Charger__c": "42V4A",
                "Motor__c": "282 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvfEAG"
                },
                "Id": "a1Oa5000000BLvfEAG",
                "Name": "DYNAMO X3",
                "MSRP__c": 7400,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Racer",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/dynamox3.jpg",
                "Material__c": "Carbon",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "503Wh",
                "Charger__c": "43V4A",
                "Motor__c": "283 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvgEAG"
                },
                "Id": "a1Oa5000000BLvgEAG",
                "Name": "DYNAMO X4",
                "MSRP__c": 7800,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Racer",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/dynamox4.jpg",
                "Material__c": "Carbon",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "504Wh",
                "Charger__c": "44V4A",
                "Motor__c": "284 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvhEAG"
                },
                "Id": "a1Oa5000000BLvhEAG",
                "Name": "ELECTRA X1",
                "MSRP__c": 4000,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Enthusiast",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax1.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "501Wh",
                "Charger__c": "41V4A",
                "Motor__c": "251 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLviEAG"
                },
                "Id": "a1Oa5000000BLviEAG",
                "Name": "ELECTRA X2",
                "MSRP__c": 4300,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Enthusiast",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax2.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "502Wh",
                "Charger__c": "42V4A",
                "Motor__c": "252 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvjEAG"
                },
                "Id": "a1Oa5000000BLvjEAG",
                "Name": "ELECTRA X3",
                "MSRP__c": 4600,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Enthusiast",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax3.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "503Wh",
                "Charger__c": "43V4A",
                "Motor__c": "253 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvkEAG"
                },
                "Id": "a1Oa5000000BLvkEAG",
                "Name": "ELECTRA X4",
                "MSRP__c": 4900,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Mountain",
                "Level__c": "Enthusiast",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax4.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Air spring, adjustable rebound",
                "Front_Brakes__c": "Hydraulic disc, 200mm",
                "Rear_Brakes__c": "Hydraulic disc, 200mm",
                "Battery__c": "504Wh",
                "Charger__c": "44V4A",
                "Motor__c": "254 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvlEAG"
                },
                "Id": "a1Oa5000000BLvlEAG",
                "Name": "VOLT X1",
                "MSRP__c": 1200,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/voltx1.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Foldable",
                "Front_Brakes__c": "Centre-pull caliper brake",
                "Rear_Brakes__c": "Centre-pull caliper brake",
                "Battery__c": "300Wh",
                "Charger__c": "21V4A",
                "Motor__c": "251 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvmEAG"
                },
                "Id": "a1Oa5000000BLvmEAG",
                "Name": "VOLT X2",
                "MSRP__c": 1400,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/voltx2.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Foldable",
                "Front_Brakes__c": "Centre-pull caliper brake",
                "Rear_Brakes__c": "Centre-pull caliper brake",
                "Battery__c": "300Wh",
                "Charger__c": "42V4A",
                "Motor__c": "252 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvnEAG"
                },
                "Id": "a1Oa5000000BLvnEAG",
                "Name": "VOLT X3",
                "MSRP__c": 1800,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/voltx3.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Foldable",
                "Front_Brakes__c": "Centre-pull caliper brake",
                "Rear_Brakes__c": "Centre-pull caliper brake",
                "Battery__c": "300Wh",
                "Charger__c": "23V4A",
                "Motor__c": "253 watt, 75Nm"
              },
              {
                "attributes": {
                  "type": "Product__c",
                  "url": "/services/data/v42.0/sobjects/Product__c/a1Oa5000000BLvoEAG"
                },
                "Id": "a1Oa5000000BLvoEAG",
                "Name": "VOLT X4",
                "MSRP__c": 1900,
                "Description__c": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Category__c": "Commuter",
                "Level__c": "Beginner",
                "Picture_URL__c": "https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/voltx4.jpg",
                "Material__c": "Aluminum",
                "Fork__c": "Foldable",
                "Front_Brakes__c": "Centre-pull caliper brake",
                "Rear_Brakes__c": "Centre-pull caliper brake",
                "Battery__c": "300Wh",
                "Charger__c": "24V4A",
                "Motor__c": "254 watt, 75Nm"
              }
            ]
        };
        
    }

    handleSearchKeyChange(event) {
        this.filters = {
            searchKey: event.target.value.toLowerCase()
        };
        this.pageNumber = 1;
    }

    handleFilterChange(message) {
        this.filters = { ...message.filters };
        this.pageNumber = 1;
    }

    handlePreviousPage() {
        this.pageNumber = this.pageNumber - 1;
    }

    handleNextPage() {
        this.pageNumber = this.pageNumber + 1;
    }
}
