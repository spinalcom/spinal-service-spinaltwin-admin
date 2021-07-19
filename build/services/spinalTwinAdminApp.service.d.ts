import { SpinalTwinApp } from "../models/SpinalTwinApp.model";
import { SpinalTwinGroup } from "../models/SpinalTwinGroup.model";
/**
 *
 * @export
 * @class ServiceSpinalTwinApp
 */
export declare class ServiceSpinalTwinApp {
    constructor();
    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} contextId
     * @returns {Promise<string>}
     * @memberof ServiceSpinalTwinApp
     */
    createSpinalTwinGroup(spinalTwinGroup: SpinalTwinGroup | string, contextId: string): Promise<string>;
    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    getSpinalTwinGroup(spinalTwinGroupId: string): any;
    /**
       * @param {string} contextId
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    getAllSpinalTwinGroup(contextId: string): Promise<import("spinal-env-viewer-graph-service/declarations/GraphManagerService").SpinalNodeRef[]>;
    /**
       * @param {string} spinalTwinGroupId
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    getAppOfSpinalTwinGroup(spinalTwinGroupId: string): Promise<any[]>;
    /**
       * @param {string} spinalTwinGroupId
       * @param {string} spinalTwinAppId
       * @param {string} relationType
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    addAppToSpinalTwinGroup(spinalTwinGroupId: string, spinalTwinAppId: string, relationType: string): any;
    /**
     * @param {SpinalTwinApp | string} spinalTwinApp
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    createApp(spinalTwinApp: SpinalTwinApp | string): string;
    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    updateGroupApp(spinalTwinGroup: SpinalTwinGroup | string, spinalTwinGroupId: string): Promise<any>;
    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    deleteGroupApp(spinalTwinGroupId: string): void;
}
