import { ICovidInfo } from "src/app/models/i-covid-info";

// A response object use to catch data from backend through http calls 
// A response object container
// Good practice to create response object to handle any responses(json, xml, etc)
export interface ResponseCovidInfo{

    // public covidInfo: ICovidInfo[];
    // public json: {};
    isSuccess: boolean;

}