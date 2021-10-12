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

import { SpinalTwinAdminRole } from './services/spinalTwinAdminRole.service';
import { SpinalTwinAdminUserProfile } from './services/spinalTwinAdminUserProfile.service';
import { SpinalTwinAdminAppProfile } from './services/spinalTwinAdminAppProfile.service';
import { SpinalTwinAdminUser } from './services/spinalTwinAdminUser.service';
import { SpinalTwinAdminGraph } from './services/spinalTwinAdminGraph.service';

import { SpinalTwinRole } from './models/SpinalTwinRole.model';
import { SpinalTwinUser } from './models/SpinalTwinUser.model';
import { SpinalTwinUserProfile } from './models/SpinalTwinUserProfile.model';
import { SpinalTwinAppProfile } from './models/SpinalTwinAppProfile.model';
// @ts-ignore
const gRoot: any = typeof window === 'undefined' ? global : window;
// @ts-ignore
if (typeof gRoot.spinal === 'undefined') gRoot.spinal = {};
// @ts-ignore

if (typeof gRoot.spinal.SpinalTwinAdminRole === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminRole = new SpinalTwinAdminRole();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminUserProfile === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminUserProfile = new SpinalTwinAdminUserProfile();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminAppProfile === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminAppProfile = new SpinalTwinAdminAppProfile();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminUser === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminUser = new SpinalTwinAdminUser();
}
// @ts-ignore
if (typeof gRoot.spinal.SpinalTwinAdminGraph === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminGraph = new SpinalTwinAdminGraph();
}
// @ts-ignore
export const SpinalTwinServiceUserProfile =
  gRoot.spinal.spinalTwinAdminUserProfile;
// @ts-ignore
export const SpinalTwinServiceGraph = gRoot.spinal.spinalTwinAdminGraph;
// @ts-ignore
export const SpinalTwinServiceRole = gRoot.spinal.spinalTwinAdminRole;
// @ts-ignore
export const SpinalTwinServiceUser = gRoot.spinal.spinalTwinAdminUser;
// @ts-ignore
export const SpinalTwinServiceAppProfile =
  gRoot.spinal.spinalTwinAdminAppProfile;

export {
  SpinalTwinRole,
  SpinalTwinUser,
  SpinalTwinUserProfile,
  SpinalTwinAdminAppProfile,
};
