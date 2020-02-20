'use strict';

/**
 * ImportContent.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */
const { resolveDataFromRequest, getItemsFromData } = require("./util/utils");  
const analyzer = require("./util/analyzer");  

module.exports = {
  preAnalyzeImportFile: async ctx => {
    const { dataType, body, options } = await resolveDataFromRequest(ctx);
    const { sourceType, items } = await getItemsFromData({
      dataType,
      body,
      options
    });
    const analysis = analyzer.analyze(sourceType, items);
    return { sourceType, ...analysis };
  }
};
