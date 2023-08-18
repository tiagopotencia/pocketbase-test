/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfzfzi5mdglrs67")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzfwmt3x",
    "name": "user",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfzfzi5mdglrs67")

  // remove
  collection.schema.removeField("lzfwmt3x")

  return dao.saveCollection(collection)
})
