
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {

        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        surname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },


         });
    User.associate = models => {
        // Associating User with wishlist
        // When an User is deleted, also delete any associated wishlist items
        User.hasMany(models.Wish, {
            onUpdate: 'cascade',
            onDelete: 'cascade',
        });
    }




return User};