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
exports.ServiceSpinalTwinApp = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
const constant_1 = require("../constant");
const spinalTwinAdminGraph_service_1 = require("./spinalTwinAdminGraph.service");
let spinalTwinGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph;
/**
 *
 * @export
 * @class ServiceSpinalTwinApp
 */
class ServiceSpinalTwinApp {
    constructor() { }
    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} contextId
     * @returns {Promise<string>}
     * @memberof ServiceSpinalTwinApp
     */
    createSpinalTwinGroup(spinalTwinGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof spinalTwinGroup === "string")
                spinalTwinGroup = { name: spinalTwinGroup };
            spinalTwinGroup.type = constant_1.SPINALAPP_TYPE;
            const groupId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinGroup, undefined);
            let context = yield spinalTwinGraph.getContext(constant_1.SPINAL_DESCRIPTION);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(context.info.id.get(), groupId, context.info.id.get(), constant_1.SPINALTWIN_ADMIN_SERVICE_APP_GROUP_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST).then(() => __awaiter(this, void 0, void 0, function* () {
                return groupId;
            }))
                .catch((e) => {
                console.error(e);
                return Promise.reject(Error(constant_1.CANNOT_CREATE_INTERNAL_ERROR));
            });
        });
    }
    ;
    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    getSpinalTwinGroup(spinalTwinGroupId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(spinalTwinGroupId);
        if (realNode) {
            return realNode.contextIds._attribute_names.find(id => {
                const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(id);
                if (!node)
                    return false;
                return node.getType().get();
            });
        }
    }
    ;
    /**
       * @param {string} contextId
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    getAllSpinalTwinGroup() {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.SPINAL_DESCRIPTION);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildrenInContext(context.info.id.get(), context.info.id.get());
        });
    }
    ;
    /**
       * @param {string} spinalTwinGroupId
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    getAppOfSpinalTwinGroup(spinalTwinGroupId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(spinalTwinGroupId, [constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_NAME]).then(children => children.map(el => el.get()));
    }
    ;
    /**
       * @param {string} spinalTwinGroupId
       * @param {string} spinalTwinAppId
       * @param {string} relationType
       * @returns {void}
       * @memberof ServiceSpinalTwinApp
       */
    addAppToSpinalTwinGroup(spinalTwinGroupId, spinalTwinAppId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(spinalTwinGroupId, spinalTwinAppId, spinalTwinGroupId, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST);
    }
    /**
     * @param {SpinalTwinApp | string} spinalTwinApp
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    createApp(spinalTwinGroupId, spinalTwinApp) {
        if (typeof spinalTwinApp === "string")
            spinalTwinApp = { name: spinalTwinApp };
        spinalTwinApp.type = constant_1.SPINALAPP_TYPE;
        const appId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinApp, undefined);
        return this.addAppToSpinalTwinGroup(spinalTwinGroupId, appId);
    }
    /**
     * @param {SpinalTwinGroup | string} spinalTwinGroup
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    updateGroupApp(spinalTwinGroup, spinalTwinGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof spinalTwinGroupId === 'undefined') {
                return;
            }
            return spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(spinalTwinGroupId, spinalTwinGroup);
        });
    }
    /**
     * @param {string} spinalTwinGroupId
     * @returns {void}
     * @memberof ServiceSpinalTwinApp
     */
    deleteGroupApp(spinalTwinGroupId) { }
    ;
}
exports.ServiceSpinalTwinApp = ServiceSpinalTwinApp;
//# sourceMappingURL=spinalTwinAdminApp.service.js.map