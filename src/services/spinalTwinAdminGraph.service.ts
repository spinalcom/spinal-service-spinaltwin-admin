import {
    SpinalGraphService,
    SpinalGraph,
    SpinalContext,
    SpinalNode
} from "spinal-env-viewer-graph-service";
import { SPINAL_TWIN_ADMIN } from '../constant';

/**
 * 
 * @export
 * @class SpinalTwinAdminGraph
 */
export class SpinalTwinAdminGraph {

    constructor() { }

    /**
     * @param {spinal.Directory<any>} directory
     * @param {string} filename
     * @returns {void}
     * @memberof SpinalTwinAdminGraph
     */
    init (directory: spinal.Directory<any>, filename: string): Promise<void> {

        let promises = [];
        const graph = new SpinalGraph("SpinalTwinAdmin");
        const DataListContext = new SpinalContext("DataList");

        const SpinaltwinDescContext = new SpinalContext("SpinalTwinDescription");
        const UserProfileContext = new SpinalContext("UserProfileList");
        const UserListContext = new SpinalContext("UserList");
        const RoleListContext = new SpinalContext("RoleList");

        promises.push(
            graph.addContext(DataListContext),
            graph.addContext(SpinaltwinDescContext),
            graph.addContext(UserListContext),
            graph.addContext(UserProfileContext),
            graph.addContext(RoleListContext)
        );
        const dataRoomNode = new SpinalNode("DataRoom");
        const maintenanceBookNode = new SpinalNode("MaintenanceBook");
        const operationCenterNode = new SpinalNode("OperationBook");

        promises.push(
            SpinaltwinDescContext.addChildInContext(dataRoomNode, "hasGroupApplication", "PtrLst"),
            SpinaltwinDescContext.addChildInContext(maintenanceBookNode, "hasGroupApplication", "PtrLst"),
            SpinaltwinDescContext.addChildInContext(operationCenterNode, "hasGroupApplication", "PtrLst"),
        )
        // App for DataRoom
        const EquipmentCenter = new SpinalNode("EquipmentCenter");
        const DescriptionCenter = new SpinalNode("DescriptionCenter");
        const SpaceCenter = new SpinalNode("SpaceCenter");

        promises.push(
            dataRoomNode.addChildInContext(EquipmentCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext),
            dataRoomNode.addChildInContext(DescriptionCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext),
            dataRoomNode.addChildInContext(SpaceCenter, "hasApplicationDataRoom", "PtrLst", SpinaltwinDescContext),
        )
        // App for MaintenanceBook
        const TicketCenter = new SpinalNode("TicketCenter");
        const NoteCenter = new SpinalNode("NoteCenter");
        const AgendaCenter = new SpinalNode("AgendaCenter");

        promises.push(
            maintenanceBookNode.addChildInContext(TicketCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext),
            maintenanceBookNode.addChildInContext(NoteCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext),
            maintenanceBookNode.addChildInContext(AgendaCenter, "hasApplicationMaintenanceBook", "PtrLst", SpinaltwinDescContext)
        );
        // App for OperationCenter
        const InsightCenter = new SpinalNode("InsightCenter");
        const ControlCenter = new SpinalNode("ControlCenter");
        const AlarmCenter = new SpinalNode("AlarmCenter");
        const EnergyCenter = new SpinalNode("EnergyCenter");

        promises.push(
            operationCenterNode.addChildInContext(InsightCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext),
            operationCenterNode.addChildInContext(ControlCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext),
            operationCenterNode.addChildInContext(AlarmCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext),
            operationCenterNode.addChildInContext(EnergyCenter, "hasApplicationOperation", "PtrLst", SpinaltwinDescContext),
        );

        directory.force_add_file(filename, graph, {
            model_type: "SpinalTwin Admin",
        });

        return Promise.all(promises).then(() => {
            return ;
        })

    }

    public async getContext(name?: string): Promise<SpinalNode<any>> {
        const graph = SpinalGraphService.getGraph();
        const contexts = await graph.getContext(name);
        /*if (name && name.trim().length > 0) {
            const found: any = contexts.filter(el => el.getName().get() === name);
            return found ? found.info.get() : undefined;
        }*/
        return contexts;
    }
}
