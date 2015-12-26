/**
* Comment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	articleId: 'int',
  	title: 'string',
  	content: 'string',
  	authorName: 'string',
  }
};

sails.config.models.migrate='drop';