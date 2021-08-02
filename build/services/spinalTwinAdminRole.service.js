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
exports.SpinalTwinAdminRole = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
const constant_1 = require("../constant");
const spinalTwinAdminGraph_service_1 = require("./spinalTwinAdminGraph.service");
let spinalTwinGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph;
/**
 *
 * @export
 * @class SpinalTwinAdminRole
 */
class SpinalTwinAdminRole {
    /**
    * @param {SpinalTwinRole|string} spinalTwinRole
    * @returns {Promise<string>}
    * @memberof SpinalTwinAdminRole
    */
    createRole(spinalTwinRole) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof spinalTwinRole === "string")
                spinalTwinRole = { name: spinalTwinRole };
            const roleId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(spinalTwinRole, undefined);
            let context = yield spinalTwinGraph.getContext("RoleList");
            const result = spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(context.info.id.get(), roleId, context.info.id.get(), constant_1.SPINALTWIN_ADMIN_SERVICE_USER_PROFILE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST).then((res) => __awaiter(this, void 0, void 0, function* () {
                return res;
            }))
                .catch((e) => {
                console.error(e);
                return Promise.reject(Error(constant_1.CANNOT_CREATE_INTERNAL_ERROR));
            });
            return result;
        });
    }
    ;
    /**
    * @param {string} roleId
    * @returns {void}
    * @memberof SpinalTwinAdminRole
    */
    getRoleNode(roleId) {
        const realNode = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(roleId);
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
    * @param {string} roleId
    * @returns {void}
    * @memberof SpinalTwinAdminRole
    */
    getRole(roleId) {
        return spinal_env_viewer_graph_service_1.SpinalGraphService.findNode(roleId)
            .then(node => {
            return node;
        });
    }
    ;
    /**
    * @param {SpinalTwinRole|string} spinalTwinRole
    * @param {string} roleId
    * @returns {void}
    * @memberof SpinalTwinAdminRole
    */
    updateRole(spinalTwinRole, roleId) {
        if (typeof roleId === 'undefined') {
            return;
        }
        return spinal_env_viewer_graph_service_1.SpinalGraphService.modifyNode(roleId, spinalTwinRole);
    }
    ;
    /**
    * @param {string} roleId
    * @returns {void}
    * @memberof SpinalTwinAdminRole
    */
    deleteRole(roleId) {
    }
    ;
}
exports.SpinalTwinAdminRole = SpinalTwinAdminRole;
//# sourceMappingURL=spinalTwinAdminRole.service.js.map