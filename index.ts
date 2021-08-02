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

import { SpinalTwinAdminRole } from './src/services/spinalTwinAdminRole.service';
import { SpinalTwinAdminUserProfile } from './src/services/spinalTwinAdminUserProfile.service';
import { SpinalTwinAdminUser} from './src/services/spinalTwinAdminUser.service';

import { SpinalTwinRole } from './src/models/SpinalTwinRole.model';
import { SpinalTwinUser } from './src/models/SpinalTwinUser.model';
import { SpinalTwinUserProfile } from './src/models/SpinalTwinUserProfile.model';
// @ts-ignore
const gRoot = typeof window === 'undefined' ? global : window;
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
if (typeof gRoot.spinal.SpinalTwinAdminUser === 'undefined') {
  // @ts-ignore
  gRoot.spinal.spinalTwinAdminUser = new SpinalTwinAdminUser();
}
// @ts-ignore
export const SpinalTwinServiceUserProfile = gRoot.spinal.SpinalTwinAdminUserProfile;
// @ts-ignore
export const SpinalTwinServiceRole = gRoot.spinal.SpinalTwinAdminRole;
// @ts-ignore
export const SpinalTwinServiceUser = gRoot.spinal.SpinalTwinAdminUser;

export { SpinalTwinRole, SpinalTwinUser, SpinalTwinUserProfile }