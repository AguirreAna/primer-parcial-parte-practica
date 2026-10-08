// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ProjectModel = sequelize.define("Project", {
  // TODO: 1. code: string, único y obligatorio.
  code: {
    type: DataTypes.STRING, allowNull: false, unique: true },
  // TODO: 2. name: string, obligatorio.
  name: {
    type: DataTypes.STRING, allowNull: false},
  // TODO: 3. description: texto, obligatorio.
  description: {
    type: DataTypes.TEXT, allowNull: false},
  // TODO: 4. status: ENUM con los valores planning, in_progress, paused y finished; obligatorio y con planning como valor por defecto.
  // TODO: 5. start_date: fecha (solo día), obligatoria.
  start_date:{
    type: DataTypes.DATE, 
  },
  // TODO: 6. budget: decimal, obligatorio.
  budget: {
    type: DataTypes.STRING, allowNull: false
  },
  // TODO: 7. leader_id: entero, obligatorio, clave foránea hacia User.
  learder_id:{
    type: DataTypes.ENTERO,
    allowNull:false,
    field: "user_id",
  }
});
