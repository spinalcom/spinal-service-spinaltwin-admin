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
exports.SpinalTwinAdminAppProfile = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
const constant_1 = require("../constant");
const spinalTwinAdminGraph_service_1 = require("./spinalTwinAdminGraph.service");
let spinalTwinGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminAppProfile
 */
class SpinalTwinAdminAppProfile {
    constructor() { }
    /**
     * @param {SpinalTwinAppProfile | string} spinalTwinAppProfile
     * @returns {Promise<string>}
     * @memberof SpinalTwinAppProfile
     */
    createAppProfile(spinalTwinAppProfile, graphContext) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof spinalTwinAppProfile === 'string')
                spinalTwinAppProfile = { name: spinalTwinAppProfile };
            const appId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinAppProfile, graphContext);
            let context = yield spinalTwinGraph.getContext(constant_1.APP_PROFILE_LIST);
            const result = spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(context.info.id.get(), appId, context.info.id.get(), constant_1.SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST)
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
     * @param {string} appProfileId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    getAppProfile(appProfileId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNode(appProfileId).then((node) => {
            return node;
        });
    }
    /**
     * @param {string} contextId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    getAllAppProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.APP_PROFILE_LIST);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(context.info.id.get(), context.info.id.get());
        });
    }
    /**
     * @param {string} appProfileId
     * @param {SpinalTwinAppProfile} userProfile
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    updateAppProfile(appProfile, appProfileId, graphContext) {
        if (typeof appProfileId === 'undefined' ||
            typeof appProfile === 'undefined') {
            return;
        }
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(appProfileId);
        if (node) {
            node.info.name.set(appProfile.name);
            node.info.appList.set(appProfile.clientId);
            node.info.buildContextList.set(appProfile.clientSecret);
            node.element.setElement(graphContext);
        }
        return node;
    }
    /**
     * @param {string} appProfileId
     * @param {string} roleId
     * @returns {void}
     * @memberof SpinalTwinAppProfile
     */
    deleteAppProfile(appProfileId) { }
}
exports.SpinalTwinAdminAppProfile = SpinalTwinAdminAppProfile;
//# sourceMappingURL=spinalTwinAdminAppProfile.service.js.map