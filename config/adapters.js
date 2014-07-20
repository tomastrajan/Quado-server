/**
 * Global adapter config
 * 
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which 
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {

    'default'   : process.env.DB_ADAPTER,

    postgres: {
        module   : 'sails-postgresql',
        host     : process.env.POSTGRES_HOST,
        port     : process.env.POSTGRES_PORT,
        user     : process.env.POSTGRES_USER,
        password : process.env.POSTGRES_PASSWORD,
        database : process.env.POSTGRES_DATABASE,

        schema   : true //This makes sure that sails matches the database schema to your models.
    },

    mysql: {
        module   : 'sails-mysql',
        host     : process.env.MYSQL_HOST,
        port     : process.env.MYSQL_PORT,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : process.env.MYSQL_DATABASE,

        schema   : true //This makes sure that sails matches the database schema to your models.
    }
};