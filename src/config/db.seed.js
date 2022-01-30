const db = require("../db/db");
const User = require("../models/user");

const seed = async () => {
    await db.sync({ force: true });

    const name = `ura`;
    const surname = "kuch";

    User.create({
        name: name,
        surname: surname,

    })
        .then((user) => {
            console.log("seeded user", user);
            User.findOne({ where: { name: `${user.name}` } })
                .then((user) => {
                    console.log("found in db after adding");
                    db.close();
                })
                .catch((error) => {
                    console.error("error looking for new user in db: ", error);
                    db.close();
                });
        })
        .catch((error) => {
            console.error("failed to seed, ", error);
            db.close();
        });
};

seed();