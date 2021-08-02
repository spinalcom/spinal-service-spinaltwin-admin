import { Model } from 'spinal-core-connectorjs_type';
import { SpinalTwinRole } from './SpinalTwinRole.model';

const spinalCore = require('spinal-core-connectorjs');

export interface SpinalTwinUserProfile {
  id? :string;
  name? :string;
  level? :number;
  appList? : number[];
  buildContextList? : number[];
  roleList?: number[];
  [key: string]: any;
}
