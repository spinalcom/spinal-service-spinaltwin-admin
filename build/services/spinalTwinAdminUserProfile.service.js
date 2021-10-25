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
const spinalTwinAdminGraph_service_1 = require("./spinalTwinAdminGraph.service");
let spinalTwinGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminUserProfile
 */
class SpinalTwinAdminUserProfile {
    constructor() { }
    /**
     * @param {SpinalTwinUserProfile | string} spinalTwinUserProfile
     * @returns {Promise<string>}
     * @memberof SpinalTwinAdminUserProfile
     */
    createUserProfile(spinalTwinUserProfile, graphContext) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof spinalTwinUserProfile === 'string')
                spinalTwinUserProfile = { name: spinalTwinUserProfile };
            const groupId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinUserProfile, graphContext);
            let context = yield spinalTwinGraph.getContext(constant_1.USER_PROFILE_LIST);
            const result = spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(context.info.id.get(), groupId, context.info.id.get(), constant_1.SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST)
                .then((res) => __awaiter(this, void 0, void 0, function* () {
                return res;
            }))
                .catch((e) => {
                console.error(e);
                return Promise.reject(Error(constant_1.CANNOT_CREATE_INTERNAL_ERROR));
            });
            return result;
        });
    }
    /**
     * @param {string} userProfileId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getUserProfile(userProfileId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNode(userProfileId).then((node) => {
            return node;
        });
    }
    /**
     * @param {string} contextId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    getAllUserProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.USER_PROFILE_LIST);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(context.info.id.get(), context.info.id.get());
        });
    }
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    removeRoleToUserProfile(userProfileId, roleId) { }
    /**
     * @param {string} userProfileId
     * @param {SpinalTwinUserProfile} userProfile
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    updateUserProfile(userProfile, userProfileId, graphContext) {
        if (typeof userProfileId === 'undefined' ||
            typeof userProfile === 'undefined') {
            return;
        }
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(userProfileId);
        if (node) {
            node.info.name.set(userProfile.name);
            node.info.appList.set(userProfile.appList);
            node.info.buildContextList.set(userProfile.buildContextList);
            node.element.setElement(graphContext);
        }
        return node;
    }
    /**
     * @param {string} userProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAdminUserProfile
     */
    deleteUserProfile(userProfileId) { }
}
exports.SpinalTwinAdminUserProfile = SpinalTwinAdminUserProfile;
//# sourceMappingURL=spinalTwinAdminUserProfile.service.js.map