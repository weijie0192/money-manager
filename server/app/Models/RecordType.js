'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class RecordType extends Model {
  group() {
    return this.belongsTo('App/Models/RecordGroup');
  }

  records() {
    return this.hasMany('App/Models/Record');
  }
}

module.exports = RecordType;
