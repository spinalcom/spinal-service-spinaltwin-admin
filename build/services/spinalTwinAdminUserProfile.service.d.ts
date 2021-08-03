import { SpinalNode } from 'spinal-env-viewer-graph-service';
import { SpinalTwinUserProfile } from '../models/SpinalTwinUserProfile.model';
/**
 *
 * @export
 * @class SpinalTwinAdminUserProfile
 */
export declare class SpinalTwinAdminUserProfile {
    constructor();
    /**
     * @param {SpinalTwinUserProfile | string} spinalTwinUserProfile
     * @returns {Promise<string>}
     * @memberof SpinalTwinAdminUserProfile
     */
    createUserProfile(spinalTwinUserProfile: SpinalTwinUserProfile | string): Promise<SpinalNode<any>>;
    /**
     * @param {string} userProfileId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getUserProfile(userProfileId: string): any;
    /**
     * @param {string} contextId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getAllUserProfile(contextId: any): Promise<import("spinal-env-viewer-graph-service/declarations/GraphManagerService").SpinalNodeRef[]>;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    addRoleToUserProfile(userProfileId: string, roleId: string): Promise<boolean>;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    removeRoleToUserProfile(userProfileId: string, roleId: string): void;
    /**
     * @param {string} userProfileId
     * @param {SpinalTwinUserProfile} userProfile
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    updateUserProfile(userProfile: SpinalTwinUserProfile, userProfileId: string): void;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    deleteUserProfile(userProfileId: string): void;
}
