import { Injectable } from '@angular/core';
var Sqlite = require( "nativescript-sqlite" );
import 'rxjs/add/operator/map';

@Injectable()
export class Database {

	db
	
	constructor() {
		var self = this
		new Sqlite("db", function(err, db) {
	        if (err) {
	          console.error("We failed to open database", err);
	        } else {
	          self.inicializar(db)
	        }
	    })
	}

	crearEstructuraDB() {
    	var usuario = "Create table usuario (usuario varchar(255), token varchar(255)); "
	    this.db.execSQL(usuario);
	    this.db.version(1); 
	  } 

	inicializar(db) {
		var self = this
		this.db = db
		this.getDB().version(function(err, ver) {
	        if (ver == 0) {
	          self.crearEstructuraDB()
	        }
	      });
		
	      
	}

	getDB() {
		return this.db
	}

	dameUsuario() {
		return this.getDB().get('select usuario, token from usuario');
	}

	insertarUsuario(nombre, token) {
		return this.db.execSQL("insert into usuario (usuario, token ) values (?,?);", [ nombre,token  ]);
	}

	borrarUsuarios() {
		return this.db.execSQL("delete from usuario");
	}
}
