export default (config, env, helpers) => {
  if (env.production) {
    let result = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
    if (result) {
      let { index } = result;
      config.plugins.splice(index, 1);
    }
  }
};
