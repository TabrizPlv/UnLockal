import { Business } from "src/business/schemas/business.schema";

export interface UserListing {
    id : string,
    email : string,
    business : Business
}