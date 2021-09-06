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
exports.SpinalTwinAdminUser = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
require("spinal-core-connectorjs_type");
const constant_1 = require("../constant");
const spinalTwinAdminGraph_service_1 = require("./spinalTwinAdminGraph.service");
let spinalTwinGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph();
/**
 *
 * @export
 * @class SpinalTwinAdminUser
 */
class SpinalTwinAdminUser {
    /**
     * @param {SpinalTwinUser|string} user
     * @returns {Promise<SpinalTwinUser | string>}
     * @memberof SpinalTwinAdminUser
     */
    createUser(user) {
        return this.findEmail(user.email)
            .then((exist) => __awaiter(this, void 0, void 0, function* () {
            if (exist) {
                return Promise.resolve(constant_1.USER_NOT_FOUND);
            }
            const userId = spinal_env_viewer_graph_service_1.SpinalGraphService.createNode(user, undefined);
            user.id = userId;
            let context = yield spinalTwinGraph.getContext(constant_1.USER_LIST);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.addChildInContext(context.info.id.get(), userId, context.info.id.get(), constant_1.SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME, constant_1.SPINALAPP_TYPE).then(() => {
                return Promise.resolve(user);
            });
        }))
            .catch((e) => {
            return Promise.resolve(e);
        });
    }
    getUserByID(id) { }
    getAllUser(contextId) { }
    /**
     * @param {string} id
     * @param {string} email
     * @param {string} password
     * @returns {Promise<SpinalTwinUser | string>}
     * @memberof SpinalTwinAdminUser
     */
    getUser(id, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.USER_LIST);
            if (typeof email === 'string' && typeof password === 'string')
                return this.findUserWithEmailPassword(email, password);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(context.info.id.get(), [
                constant_1.SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
            ])
                .then((children) => {
                if (children.length < 0) {
                    return Promise.reject(constant_1.USER_BASE_EMPTY);
                }
                for (let i = 0; i < children.length; i = i + 1) {
                    if (children[i].hasOwnProperty('id') && children[i].id.get() === id) {
                        return Promise.resolve(children[i]);
                    }
                }
                return Promise.resolve(constant_1.USER_NOT_FOUND);
            })
                .catch((e) => {
                console.error(e);
                return Promise.resolve(e);
            });
        });
    }
    addNode(userId, childId, relationName, relationType) { }
    /**
     * @param {string} email
     * @returns {Promise<boolean>}
     * @memberof SpinalTwinAdminUser
     */
    findEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.USER_LIST);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(context.info.id.get(), [
                constant_1.SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
            ]).then((children) => {
                if (children.length < 0) {
                    return Promise.resolve(false);
                }
                for (let i = 0; i < children.length; i = i + 1) {
                    if (children[i].hasOwnProperty('email') &&
                        children[i].email.get() === email) {
                        return Promise.resolve(true);
                    }
                }
                return Promise.resolve(false);
            });
        });
    }
    /**
     * @param {string} email
     * @param {string} password
     * @returns {Promise<SpinalTwinUser>}
     * @memberof SpinalTwinAdminUser
     */
    findUserWithEmailPassword(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = yield spinalTwinGraph.getContext(constant_1.USER_LIST);
            return spinal_env_viewer_graph_service_1.SpinalGraphService.getChildren(context.info.id.get(), [
                constant_1.SPINALTWIN_ADMIN_SERVICE_USER_RELATION_NAME,
            ])
                .then((children) => {
                if (children.length < 0) {
                    return Promise.reject(constant_1.USER_BASE_EMPTY);
                }
                for (let i = 0; i < children.length; i = i + 1) {
                    if (children[i].hasOwnProperty('email') &&
                        children[i].email.get() === email &&
                        children[i].hasOwnProperty('password') &&
                        children[i].password.get() === password) {
                        return Promise.resolve(children[i]);
                    }
                }
                return Promise.resolve(constant_1.USER_NOT_FOUND);
            })
                .catch((e) => {
                console.error(e);
                return Promise.resolve(e);
            });
        });
    }
    addUserProfileToUser(userId, userProfileId) { }
    updateUser(user, userId) {
        if (typeof userId === 'undefined' || typeof user === 'undefined') {
            return;
        }
        const node = spinal_env_viewer_graph_service_1.SpinalGraphService.getRealNode(userId);
        if (node) {
            node.info.name.set(user.name);
            node.info.email.set(user.email);
            node.info.firstname.set(user.firstname);
            node.info.userProfileId.set(user.userProfileId);
        }
        return node;
    }
    deleteUser(userId) { }
}
exports.SpinalTwinAdminUser = SpinalTwinAdminUser;
//# sourceMappingURL=spinalTwinAdminUser.service.js.map