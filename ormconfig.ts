const {
  typeOrmConfig,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require(`./${process.env.CODE_BASE_DIR}/config/typeorm`);

module.exports = typeOrmConfig;
