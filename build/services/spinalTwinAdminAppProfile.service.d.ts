import { SpinalNode } from 'spinal-env-viewer-graph-service';
import { SpinalTwinAppProfile } from '../models/SpinalTwinAppProfile.model';
/**
 *
 * @export
 * @class SpinalTwinAdminAppProfile
 */
export declare class SpinalTwinAdminAppProfile {
    constructor();
    /**
     * @param {SpinalTwinAppProfile | string} spinalTwinAppProfile
     * @returns {Promise<string>}
     * @memberof SpinalTwinAppProfile
     */
    createAppProfile(spinalTwinAppProfile: SpinalTwinAppProfile | string): Promise<SpinalNode<any>>;
    /**
     * @param {string} appProfileId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    getAppProfile(appProfileId: string): any;
    /**
     * @param {string} contextId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    getAllAppProfile(): Promise<import("spinal-env-viewer-graph-service/declarations/GraphManagerService").SpinalNodeRef[]>;
    /**
     * @param {string} appProfileId
     * @param {SpinalTwinAppProfile} userProfile
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    updateAppProfile(appProfile: SpinalTwinAppProfile, appProfileId: string): SpinalNode<any>;
    /**
     * @param {string} appProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    deleteAppProfile(appProfileId: string): void;
}
