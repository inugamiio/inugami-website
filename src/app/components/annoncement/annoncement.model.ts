export interface AnnoncementExample{
    value:string|null;
    type?:string|null;
    description?:string|null;
    
}


export interface AnnoncementItem{
    link?:string|null;
    title?:string|null;
    examples?:AnnoncementExample[];
}

export interface Annoncement{
    id:number;
    application?:string|null;
    title?:string|null;
    version?:string|null;
    date?:string|null;
    description?:string|null;

    features?: AnnoncementItem[];
    fix?: AnnoncementItem[];

}