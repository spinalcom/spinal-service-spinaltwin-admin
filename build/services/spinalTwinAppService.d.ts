import { SpinalTwinApp } from "../models/SpinalTwinApp";
import { SpinalTwinGroup } from "../models/SpinalTwinGroup";
export declare class ServiceSpinalTwinApp {
    constructor();
    createSpinalTwinGroup(spinalTwinGroup: SpinalTwinGroup | string, contextId: string): Promise<string>;
    getAllSpinalTwinGroup(contextId: string): Promise<import("spinal-env-viewer-graph-service/declarations/GraphManagerService").SpinalNodeRef[]>;
    getAppOfSpinalTwinGroup(spinalTwinGroupId: string): Promise<any[]>;
    addAppToSpinalTwinGroup(spinalTwinGroupId: string, spinalTwinAppId: string, relationType: string): any;
    createApp(spinalTwinApp: SpinalTwinApp | string): string;
}
