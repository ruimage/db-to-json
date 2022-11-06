import {ModelExporter, Parser} from '@dbml/core';
import jsonToTable from 'json-to-table';
import {markdownTable} from 'markdown-table'

export const convertDBMLStringToJSON = (dbml) => ModelExporter.export(Parser.parse(dbml, 'dbml'), 'json', false);

export const convertJsonToArray = (json) => jsonToTable(json)

export const convertArrayToMarkdownTable = array => markdownTable(array)

export const convertJsonToMarkdown = json => markdownTable(jsonToTable(json))
