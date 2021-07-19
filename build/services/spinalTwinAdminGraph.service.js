"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalTwinAdminGraph = void 0;
const spinal_env_viewer_graph_service_1 = require("spinal-env-viewer-graph-service");
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
        const graph = new spinal_env_viewer_graph_service_1.SpinalGraph("SpinalTwinAdmin");
        const DataListContext = new spinal_env_viewer_graph_service_1.SpinalContext("DataList");
        const SpinaltwinDescContext = new spinal_env_viewer_graph_service_1.SpinalContext("SpinalTwinDescription");
        const UserProfileContext = new spinal_env_viewer_graph_service_1.SpinalContext("UserProfile");
        const UserListContext = new spinal_env_viewer_graph_service_1.SpinalContext("UserList");
        const RoleListContext = new spinal_env_viewer_graph_service_1.SpinalContext("RoleList");
        promises.push(graph.addContext(DataListContext), graph.addContext(SpinaltwinDescContext), graph.addContext(UserListContext), graph.addContext(UserProfileContext), graph.addContext(RoleListContext));
        const dataRoomNode = new spinal_env_viewer_graph_service_1.SpinalNode("DataRoom");
        const maintenanceBookNode = new spinal_env_viewer_graph_service_1.SpinalNode("MaintenanceBook");
        const operationCenterNode = new spinal_env_viewer_graph_service_1.SpinalNode("OperationBook");
        promises.push(SpinaltwinDescContext.addChildInContext(dataRoomNode, "hasGroupApplication", "PtrLst"), SpinaltwinDescContext.addChildInContext(maintenanceBookNode, "hasGroupApplication", "PtrLst"), SpinaltwinDescContext.addChildInContext(operationCenterNode, "hasGroupApplication", "PtrLst"));
        // App for DataRoom
        const EquipmentCenter = new spinal_env_viewer_graph_service_1.SpinalNode("EquipmentCenter");
        const DescriptionCenter = new spinal_env_viewer_graph_service_1.SpinalNode("DescriptionCenter");
        const SpaceCenter = new spinal_env_viewer_graph_service_1.SpinalNode("SpaceCenter");
        promises.push(dataRoomNode.addChildInContext(EquipmentCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext), dataRoomNode.addChildInContext(DescriptionCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext), dataRoomNode.addChildInContext(SpaceCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext));
        // App for MaintenanceBook
        const TicketCenter = new spinal_env_viewer_graph_service_1.SpinalNode("TicketCenter");
        const NoteCenter = new spinal_env_viewer_graph_service_1.SpinalNode("NoteCenter");
        const AgendaCenter = new spinal_env_viewer_graph_service_1.SpinalNode("AgendaCenter");
        promises.push(maintenanceBookNode.addChildInContext(TicketCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext), maintenanceBookNode.addChildInContext(NoteCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext), maintenanceBookNode.addChildInContext(AgendaCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext));
        // App for OperationCenter
        const InsightCenter = new spinal_env_viewer_graph_service_1.SpinalNode("InsightCenter");
        const ControlCenter = new spinal_env_viewer_graph_service_1.SpinalNode("ControlCenter");
        const AlarmCenter = new spinal_env_viewer_graph_service_1.SpinalNode("AlarmCenter");
        const EnergyCenter = new spinal_env_viewer_graph_service_1.SpinalNode("EnergyCenter");
        promises.push(operationCenterNode.addChildInContext(InsightCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext), operationCenterNode.addChildInContext(ControlCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext), operationCenterNode.addChildInContext(AlarmCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext), operationCenterNode.addChildInContext(EnergyCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext));
        directory.force_add_file(filename, graph, {
            model_type: "SpinalTwin Admin",
        });
        return Promise.all(promises).then(() => {
            return;
        });
    }
}
exports.SpinalTwinAdminGraph = SpinalTwinAdminGraph;
//# sourceMappingURL=spinalTwinAdminGraph.service.js.map