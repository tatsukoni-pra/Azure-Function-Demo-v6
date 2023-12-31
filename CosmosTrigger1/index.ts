import { AzureFunction, Context } from "@azure/functions"

const cosmosDBTrigger: AzureFunction = async function (context: Context, documents: any[]): Promise<void> {
    if (!!documents && documents.length > 0) {
        context.log('Execute Function6 APS2-2 CosmosTrigger1 Id: ', documents[0].id);
    }
}

export default cosmosDBTrigger;
