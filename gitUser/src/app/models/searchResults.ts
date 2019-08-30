import { User } from "./user";

export class SearchResults{
    public total_count: number = 0;
    public incomplete_results: boolean = false;
    public items:User[] = [];
}