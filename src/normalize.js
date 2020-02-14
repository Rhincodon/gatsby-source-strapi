const extractFields = async (
  apiURL,
  store,
  cache,
  createNode,
  touchNode,
  auth,
  item
) => {
  for (const key of Object.keys(item)) {
    const field = item[key]
    if (Array.isArray(field)) {
      // add recursion to fetch nested strapi references
      await Promise.all(
        field.map(async f =>
          extractFields(apiURL, store, cache, createNode, touchNode, auth, f)
        )
      )
    }
  }
}

// Downloads media from image type fields
exports.downloadMediaFiles = async ({
  entities,
  apiURL,
  store,
  cache,
  createNode,
  touchNode,
  jwtToken: auth,
}) =>
  Promise.all(
    entities.map(async entity => {
      for (let item of entity) {
        // loop item over fields
        await extractFields(
          apiURL,
          store,
          cache,
          createNode,
          touchNode,
          auth,
          item
        )
      }
      return entity
    })
  )
