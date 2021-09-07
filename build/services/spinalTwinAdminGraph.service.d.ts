import { SpinalNode } from 'spinal-env-viewer-graph-service';
/**
 *
 * @export
 * @class SpinalTwinAdminGraph
 */
export declare class SpinalTwinAdminGraph {
    constructor();
    /**
     * @param {spinal.Directory<any>} directory
     * @param {string} filename
     * @returns {void}
     * @memberof SpinalTwinAdminGraph
     */
    init(directory: spinal.Directory<any>, filename: string): Promise<void>;
    getContext(name?: string): Promise<SpinalNode<any>>;
}
