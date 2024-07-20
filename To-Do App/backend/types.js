const zod = require("zod");

const schemaPost = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const schemaPut = zod.object({ id: zod.string() });

module.exports = { schemaPost, schemaPut };
