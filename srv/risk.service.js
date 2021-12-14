//Imports
const cds = require("@sap/cds");

/**
 * The service implementation with all service handlers
 */
module.exports = cds.service.impl(async function () {
    //Define contraints for the Risk and BusinessPartner entities from the risk.service.cds file
    const { Risks, BusinessPartners } = this.entities;

    /**
     * Set criticality after a READ operation on /risks
     */
    this.after("READ", Risks, (data) => {
        const risks = Array.isArray(data) ? data : [data];

        risks.forEach((risk) => {
            if (risk.impact >= 100000) {
                risk.criticality = 1;
            } else {
                risk.criticality = 2;
            }
        });
    });
});
 
//connect to remote service
//const BPsrv = await cds.connect.to("API_BUSINESS_PARTNER");
//const BPsrv = await cds.connect.to("API_BUSINESS_PARTNER");

/**
 * event-handler for read-events on the BusinessPartners entity.
 * Each request to the API Business Hub requires the apikey in the header.
 */
//this.on("READ", BusinessPartners, async (req) => {
    // This API sandbox returns a lot of business partner with empty names
    // We don't want them in our application
//    req.query.where("LastName <> '' and FirstName <> '' ");

//    return await BPsrv.transaction(req).send({
//        query: req.query,
//        header: {
//            apikey: process.send.apikey,
//        },
//    });
   
//});