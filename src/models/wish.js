

module.exports = (sequelize, DataTypes) => {const Wish = sequelize.define("Wish", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
        Wish.associate = function(models) {
            Wish.belongsTo(models.User, {
                onUpdate: 'cascade',
                onDelete: 'SET NULL',
                foreignKey: 'UserId',
                targetKey: 'id',
            });

        }



return Wish};