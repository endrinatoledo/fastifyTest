"use strict";
import { Model, UUIDV4 } from "sequelize";
import { PokemonAttributes } from "../types/pokemon/pokemon.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
    class Pokemon
        extends Model<PokemonAttributes>
        implements PokemonAttributes {

        id!: string;
        nombre!: string;
        tipo!: string;
        altura!: number;
        peso!: number;
        habilidades!: string;

        static associate(models: any) {
            // define association here

        }
    }
    Pokemon.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tipo: {
                type: DataTypes.STRING(500),
            },
            altura: {
                type: DataTypes.INTEGER(11),
            },
            peso: {
                type: DataTypes.INTEGER(11),
            },
            habilidades: {
                type: DataTypes.STRING(500),
            },
        },
        {
            sequelize,
            modelName: "Pokemon",
        }
    );
    return Pokemon;
};
