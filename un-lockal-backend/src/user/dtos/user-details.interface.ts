import { Business } from "src/business/schemas/business.schema";

export interface UserDetails {
    id : string;
    email : string;
    business : Business
}