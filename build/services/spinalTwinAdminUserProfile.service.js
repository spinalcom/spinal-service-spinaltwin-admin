"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalTwinAdminUserProfile = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
const constant_1 = require("../constant");
/**
 *
 * @export
 * @class SpinalTwinAdminUserProfile
 */
class SpinalTwinAdminUserProfile {
    constructor() { }
    /**
     * @param {SpinalTwinUserProfile | string} spinalTwinUserProfile
     * @param {string} contextId
     * @returns {Promise<string>}
     * @memberof SpinalTwinAdminUserProfile
     */
    createUserProfile(spinalTwinUserProfile, contextId) {
        if (typeof spinalTwinUserProfile === "string")
            spinalTwinUserProfile = { name: spinalTwinUserProfile };
        const groupId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinUserProfile, undefined);
        const result = spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(contextId, groupId, contextId, constant_1.SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST).then((res) => __awaiter(this, void 0, void 0, function* () {
            return res;
        }))
            .catch((e) => {
            console.error(e);
            return Promise.reject(Error(constant_1.CANNOT_CREATE_INTERNAL_ERROR));
        });
        return result;
    }
    ;
    /**
     * @param {string} userProfileId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getUserProfile(userProfileId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNode(userProfileId)
            .then(node => {
            return node;
        });
    }
    ;
    /**
     * @param {string} contextId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getAllUserProfile(contextId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(contextId, contextId);
    }
    ;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    addRoleToUserProfile(userProfileId, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof userProfileId === 'undefined') {
                return;
            }
            const userProfile = yield spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(userProfileId);
            userProfile.info.roleList.push(roleId); //comment accéder à un attribut une fois qu'on a get son node.
            return spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(userProfileId, userProfile);
        });
    }
    ;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    removeRoleToUserProfile(userProfileId, roleId) { }
    ;
    /**
     * @param {string} userProfileId
     * @param {SpinalTwinUserProfile} userProfile
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    updateUserProfile(userProfile, userProfileId) { }
    ;
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    deleteUserProfile(userProfileId) { }
    ;
}
exports.SpinalTwinAdminUserProfile = SpinalTwinAdminUserProfile;
//# sourceMappingURL=spinalTwinAdminUserProfile.service.js.map