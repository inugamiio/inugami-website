import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CacheServices {

    //==================================================================================================================
    // ATTRIBUTES
    //==================================================================================================================
    private cache: any = {};

    //==================================================================================================================
    // API
    //==================================================================================================================
    public set(key: string, object: any): void {
        this.cache[key] = object;
    }
    public clear(key: string): void {
        const value = this.cache[key];
        if(value){
            delete this.cache[key];
        }
    }

    public get<T>(key: string): T | undefined {
        const value = this.cache[key];
        return value ? value as T : undefined;
    }


}