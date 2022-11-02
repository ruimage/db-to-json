import {ModelExporter, Parser} from "@dbml/core";


const convertDBMLStringToJSON = (dbml) => ModelExporter.export(Parser.parse(dbml, 'dbml'), 'json', false);

export default convertDBMLStringToJSON
