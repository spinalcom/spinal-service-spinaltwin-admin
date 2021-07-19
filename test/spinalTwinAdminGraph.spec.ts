
import { assert } from 'chai';
import { describe } from 'mocha';
import { Directory } from 'spinal-core-connectorjs_type';
import { SpinalTwinAdminGraph } from '../src/services/spinalTwinAdminGraph.service';

let spinalTwinGraphService = new SpinalTwinAdminGraph;

describe("Create a Graph", function () {
    it('should create a new graph', async function (done) {
        try {
            let directory = new Directory;
            let filename = "TestGraph";
            await spinalTwinGraphService.init(directory, filename);
            done();
        } catch ( e ) {
          console.log( e );
        }
      });
  });