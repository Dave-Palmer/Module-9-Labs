const { DataTypes, Model } = require("sequelize");
const User = require('./user')
const Post = require('./post')
let dbConnect = require("../dbconnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        references: {
            model: User, //reference to another model
            key: 'id', //column name of the referenced model
        }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
        references: {
            model: Post, //reference to another model
            key: 'id', //column name of the referenced model
        }
    },
    commentBody: {
        type: DataTypes.STRING(500),
        allowNull: false,
        required: true
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'comments', //use lowercase plural format
        timestamps: true, freezeTableName: true,

    }
)
module.exports = Comment;
