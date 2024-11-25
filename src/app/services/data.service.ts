import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject  } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dbInstance!: SQLiteObject; 

  constructor(private sqlite: SQLite) { }

// Función para inicializar BD
  async initializeDatabase() {
    this.dbInstance = await this.sqlite.create({
      name: 'cofradia.db',
      location: 'default',
    });
 
    await this.createTables();
  }

  // Función para crear tabla con los mismos campos del proyecto inicial
  async createTables() {
    await this.dbInstance.executeSql(
      `CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        email TEXT UNIQUE,
        password TEXT,
        nivel_educacion TEXT,
        fecha_nacimiento TEXT
      )`,
      []
    );
  }

    // Función para registrar usuarios en el formulario
    async registerUser(nombre: string, apellido: string, email: string, password: string, nivelEducacion: string, fechaNacimiento: string): Promise<boolean> {
      try {
        await this.dbInstance.executeSql(
          `INSERT INTO users (nombre, apellido, email, password, nivel_educacion, fecha_nacimiento)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [nombre, apellido, email, password, nivelEducacion, fechaNacimiento]
        );
        return true;
      } catch (error) {
        alert('Error al registrar usuario:'+error);
        return false;
      }
    }

    // Función para usar el login
    async loginUser(email: string, password: string): Promise<boolean> {
      const result = await this.dbInstance.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password]
      );
      return result.rows.length > 0;
    }


}
