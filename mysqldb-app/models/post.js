const { DataTypes, Model } = require("sequelize");
const User = require('./user')
let dbConnect = require("../dbconnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }

// async function init() {
//     await User.sync();
// };
// init()
//Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type:
            DataTypes.INTEGER, allowNull: false,
        references: {
            model: User, //reference to another model
            key: 'id', //column name of the referenced model
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
        required: false
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        required: false
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: true, freezeTableName: true,

    }
)
module.exports = Post;


