export interface SpinalTwinUserProfile {
    id?: string;
    name?: string;
    level?: number;
    appList?: number[];
    buildContextList?: number[];
    roleList?: number[];
    [key: string]: any;
}
