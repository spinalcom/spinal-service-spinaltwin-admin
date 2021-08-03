import { SpinalNode } from 'spinal-env-viewer-graph-service';
import { SpinalTwinRole } from '../models/SpinalTwinRole.model';
/**
 *
 * @export
 * @class SpinalTwinAdminRole
 */
export declare class SpinalTwinAdminRole {
    /**
     * @param {SpinalTwinRole|string} spinalTwinRole
     * @returns {Promise<string>}
     * @memberof SpinalTwinAdminRole
     */
    createRole(spinalTwinRole: SpinalTwinRole | string): Promise<SpinalNode<any>>;
    /**
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminRole
     */
    getRoleNode(roleId: string): any;
    /**
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminRole
     */
    getAllRole(): Promise<any[]>;
    /**
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminRole
     */
    getRole(roleId: string): any;
    /**
     * @param {SpinalTwinRole|string} spinalTwinRole
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminRole
     */
    updateRole(spinalTwinRole: SpinalTwinRole | string, roleId: string): boolean;
    /**
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminRole
     */
    deleteRole(roleId: string): void;
}
