export const TARGET_BLANK = '_blank';
export const TARGET_SELF = '_self';
export const TARGET_PARENT = '_parent';
export interface SiteLink{
  title:string;
  path:string;
  icon?:string;
  styleClass?:string;
  external?:boolean;
  target?:string,
  children?: SiteLinkChildren[];
  gaEvent?:string;
  gaCategory?:string;
}

export interface SiteLinkChildren{
    links?:SiteLink[];
    title?:string;
}
