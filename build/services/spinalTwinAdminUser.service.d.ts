import 'spinal-core-connectorjs_type';
import { SpinalTwinUser } from '../models/SpinalTwinUser.model';
/**
 *
 * @export
 * @class SpinalTwinAdminUser
 */
export declare class SpinalTwinAdminUser {
    /**
    * @param {SpinalTwinUser|string} user
    * @returns {Promise<SpinalTwinUser | string>}
    * @memberof SpinalTwinAdminUser
    */
    createUser(user: SpinalTwinUser): Promise<SpinalTwinUser | string>;
    getUserByID(id: string): void;
    getAllUser(contextId: string): void;
    /**
    * @param {string} id
    * @param {string} email
    * @param {string} password
    * @returns {Promise<SpinalTwinUser | string>}
    * @memberof SpinalTwinAdminUser
    */
    getUser(id: string, email?: string, password?: string): Promise<SpinalTwinUser>;
    addNode(userId: string, childId: string, relationName: string, relationType: string): void;
    /**
    * @param {string} email
    * @returns {Promise<boolean>}
    * @memberof SpinalTwinAdminUser
    */
    private findEmail;
    /**
    * @param {string} email
    * @param {string} password
    * @returns {Promise<SpinalTwinUser>}
    * @memberof SpinalTwinAdminUser
    */
    private findUserWithEmailPassword;
    addUserProfileToUser(userId: string, userProfileId: string): void;
    updateUser(userId: string): void;
    deleteUser(userId: string): void;
}
