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
exports.SpinalTwinAdminGraph = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
const constant_1 = require("../constant");
/**
 *
 * @export
 * @class SpinalTwinAdminGraph
 */
class SpinalTwinAdminGraph {
    constructor() { }
    /**
     * @param {spinal.Directory<any>} directory
     * @param {string} filename
     * @returns {void}
     * @memberof SpinalTwinAdminGraph
     */
    init(directory, filename) {
        let promises = [];
        const graph = new spinal_env_viewer_graph_service_1.SpinalGraph('BosConfig');
        const DataListContext = new spinal_env_viewer_graph_service_1.SpinalContext('DigitalTwin');
        const SpinaltwinDescContext = new spinal_env_viewer_graph_service_1.SpinalContext('SpinalTwinDescription');
        const UserProfileContext = new spinal_env_viewer_graph_service_1.SpinalContext('UserProfileList');
        const AppProfileContext = new spinal_env_viewer_graph_service_1.SpinalContext('AppProfileList');
        const ApiContext = new spinal_env_viewer_graph_service_1.SpinalContext('ApiList');
        const OrganContext = new spinal_env_viewer_graph_service_1.SpinalContext('OrganList');
        const RoleListContext = new spinal_env_viewer_graph_service_1.SpinalContext('RoleList');
        const RegisterAdminContext = new spinal_env_viewer_graph_service_1.SpinalContext('RegisterAdmin');
        const CredentialBosToAdminContext = new spinal_env_viewer_graph_service_1.SpinalContext('CredentialBosAdmin');
        const CredentialAdminToBosContext = new spinal_env_viewer_graph_service_1.SpinalContext('CredentialAdminBos');
        promises.push(graph.addContext(DataListContext), graph.addContext(SpinaltwinDescContext), graph.addContext(AppProfileContext), graph.addContext(UserProfileContext), graph.addContext(RoleListContext), graph.addContext(RegisterAdminContext), graph.addContext(ApiContext), graph.addContext(OrganContext), graph.addContext(CredentialBosToAdminContext), graph.addContext(CredentialAdminToBosContext));
        const read = new spinal_env_viewer_graph_service_1.SpinalNode('Lecture');
        const write = new spinal_env_viewer_graph_service_1.SpinalNode('Ecriture');
        const deleted = new spinal_env_viewer_graph_service_1.SpinalNode('Suppression');
        promises.push(RoleListContext.addChildInContext(read, constant_1.SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST), RoleListContext.addChildInContext(write, constant_1.SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST), RoleListContext.addChildInContext(deleted, constant_1.SPINALTWIN_ADMIN_SERVICE_ROLE_RELATION_NAME, constant_1.SPINALTWIN_ADMIN_SERVICE_APP_RELATION_TYPE_PTR_LST));
        const dataRoomNode = new spinal_env_viewer_graph_service_1.SpinalNode('DataRoom');
        const maintenanceBookNode = new spinal_env_viewer_graph_service_1.SpinalNode('MaintenanceBook');
        const operationCenterNode = new spinal_env_viewer_graph_service_1.SpinalNode('OperationCenter');
        promises.push(SpinaltwinDescContext.addChildInContext(dataRoomNode, 'hasGroupApplication', 'PtrLst'), SpinaltwinDescContext.addChildInContext(maintenanceBookNode, 'hasGroupApplication', 'PtrLst'), SpinaltwinDescContext.addChildInContext(operationCenterNode, 'hasGroupApplication', 'PtrLst'));
        // App for DataRoom
        const EquipmentCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Equipment');
        EquipmentCenter.info.add_attr({ typeContext: ['BIMObjectGroupContext'] });
        const DescriptionCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Description');
        DescriptionCenter.info.add_attr({ typeContext: ['geographicContext'] });
        const SpaceCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Space');
        promises.push(dataRoomNode.addChildInContext(EquipmentCenter, 'hasApplicationDataRoom', 'PtrLst', SpinaltwinDescContext), dataRoomNode.addChildInContext(DescriptionCenter, 'hasApplicationDataRoom', 'PtrLst', SpinaltwinDescContext), dataRoomNode.addChildInContext(SpaceCenter, 'hasApplicationDataRoom', 'PtrLst', SpinaltwinDescContext));
        // App for MaintenanceBook
        const TicketCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Ticket');
        TicketCenter.info.add_attr({ typeContext: ['SpinalSystemServiceTicket'] });
        const NoteCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Note');
        const AgendaCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Agenda');
        promises.push(maintenanceBookNode.addChildInContext(TicketCenter, 'hasApplicationMaintenanceBook', 'PtrLst', SpinaltwinDescContext), maintenanceBookNode.addChildInContext(NoteCenter, 'hasApplicationMaintenanceBook', 'PtrLst', SpinaltwinDescContext), maintenanceBookNode.addChildInContext(AgendaCenter, 'hasApplicationMaintenanceBook', 'PtrLst', SpinaltwinDescContext));
        // App for OperationCenter
        const InsightCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Insight');
        InsightCenter.info.add_attr({
            typeContext: ['SpinalControlPointGroupContext', 'geographicContext'],
        });
        const ControlCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Control');
        const AlarmCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Alarm');
        const EnergyCenter = new spinal_env_viewer_graph_service_1.SpinalNode('Energy');
        promises.push(operationCenterNode.addChildInContext(InsightCenter, 'hasApplicationOperation', 'PtrLst', SpinaltwinDescContext), operationCenterNode.addChildInContext(ControlCenter, 'hasApplicationOperation', 'PtrLst', SpinaltwinDescContext), operationCenterNode.addChildInContext(AlarmCenter, 'hasApplicationOperation', 'PtrLst', SpinaltwinDescContext), operationCenterNode.addChildInContext(EnergyCenter, 'hasApplicationOperation', 'PtrLst', SpinaltwinDescContext));
        directory.force_add_file(filename, graph, {
            model_type: 'Configuration Bos',
        });
        return Promise.all(promises).then(() => {
            return graph;
        });
    }
    getContext(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const graph = spinal_env_viewer_graph_service_1.SpinalGraphService.getGraph();
            const contexts = yield graph.getContext(name);
            /*if (name && name.trim().length > 0) {
                    const found: any = contexts.filter(el => el.getName().get() === name);
                    return found ? found.info.get() : undefined;
                }*/
            return contexts;
        });
    }
}
exports.SpinalTwinAdminGraph = SpinalTwinAdminGraph;
//# sourceMappingURL=spinalTwinAdminGraph.service.js.map