/**
 * Mascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      nombre:{
          type:'string',
          required:true
      },
      fechaNacimiento:{
          type:'date'
      },
      paisNacimiento:{
          type:'string',
          enum:['Ecuador','Peru','Colombia']
      },
      // idRaza es el nombre del Foreign Key


  }
};








