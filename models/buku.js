module.exports = (sequelize,DataTypes) => {
    const buku = sequelize.define("buku", {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title : {
            type: DataTypes.STRING,
        },
        description : {
             type: DataTypes.STRING,
        },
        author : {
            type: DataTypes.STRING,
        }
    });
    return buku;

}