const VectorTile = require('@mapbox/vector-tile').VectorTile
const Protobuf = require('pbf')
const fs = require('fs')

if (process.argv[2]) {
  if (fs.existsSync(process.argv[2])) {
    const t = new VectorTile(new Protobuf(fs.readFileSync(process.argv[2])))
    console.log(t)
  }
}

