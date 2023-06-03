migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gp0wgssdfku1qgf")

  // remove
  collection.schema.removeField("nuqmvnnp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "namzx4ld",
    "name": "tag",
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
  const collection = dao.findCollectionByNameOrId("gp0wgssdfku1qgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nuqmvnnp",
    "name": "tag",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("namzx4ld")

  return dao.saveCollection(collection)
})
