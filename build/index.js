"use strict";
/*
 * Copyright 2019 SpinalCom - www.spinalcom.com
 *
 *  This file is part of SpinalCore.
 *
 *  Please read all of the following terms and conditions
 *  of the Free Software license Agreement ("Agreement")
 *  carefully.
 *
 *  This Agreement is a legally binding contract between
 *  the Licensee (as defined below) and SpinalCom that
 *  sets forth the terms and conditions that govern your
 *  use of the Program. By installing and/or using the
 *  Program, you agree to abide by all the terms and
 *  conditions stated or referenced herein.
 *
 *  If you do not agree to abide by these terms and
 *  conditions, do not demonstrate your acceptance and do
 *  not install or use the Program.
 *  You should have received a copy of the license along
 *  with this file. If not, see
 *  <http://resources.spinalcom.com/licenses.pdf>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalTwinServiceUser = exports.SpinalTwinServiceRole = exports.SpinalTwinServiceGraph = exports.SpinalTwinServiceUserProfile = void 0;
const spinalTwinAdminRole_service_1 = require("./services/spinalTwinAdminRole.service");
const spinalTwinAdminUserProfile_service_1 = require("./services/spinalTwinAdminUserProfile.service");
const spinalTwinAdminUser_service_1 = require("./services/spinalTwinAdminUser.service");
const spinalTwinAdminGraph_service_1 = require("./services/spinalTwinAdminGraph.service");
// @ts-ignore
const gRoot = typeof window === 'undefined' ? global : window;
// @ts-ignore
if (typeof gRoot.spinal === 'undefined')
    gRoot.spinal = {};
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminRole === 'undefined') {
    // @ts-ignore
    gRoot.spinal.spinalTwinAdminRole = new spinalTwinAdminRole_service_1.SpinalTwinAdminRole();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminUserProfile === 'undefined') {
    // @ts-ignore
    gRoot.spinal.spinalTwinAdminUserProfile = new spinalTwinAdminUserProfile_service_1.SpinalTwinAdminUserProfile();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminUser === 'undefined') {
    // @ts-ignore
    gRoot.spinal.spinalTwinAdminUser = new spinalTwinAdminUser_service_1.SpinalTwinAdminUser();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminGraph === 'undefined') {
    // @ts-ignore
    gRoot.spinal.spinalTwinAdminGraph = new spinalTwinAdminGraph_service_1.SpinalTwinAdminGraph();
}
// @ts-ignore
exports.SpinalTwinServiceUserProfile = gRoot.spinal.spinalTwinAdminUserProfile;
exports.SpinalTwinServiceGraph = gRoot.spinal.spinalTwinAdminGraph;
// @ts-ignore
exports.SpinalTwinServiceRole = gRoot.spinal.spinalTwinAdminRole;
// @ts-ignore
exports.SpinalTwinServiceUser = gRoot.spinal.spinalTwinAdminUser;
//# sourceMappingURL=index.js.map