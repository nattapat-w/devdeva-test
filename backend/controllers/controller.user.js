const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.$queryRaw`
    SELECT * FROM User
  `;
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.getUsersFromNameSurname = async (req, res) => {
  try {
    const nameSurname = req.params.nameSurname;
    console.log(nameSurname);
    const users = await prisma.$queryRaw`
    SELECT * FROM User WHERE firstname LIKE CONCAT('%', ${nameSurname}, '%') OR lastname LIKE CONCAT('%', ${nameSurname}, '%')
    `;
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.createUser = async (req, res) => {
  try {
    const { firstname, lastname, gender, birthdate, image } = req.body;
    const result = await prisma.$executeRaw`
    INSERT INTO User (firstname, lastname, gender, birthdate, image)
    VALUES (${firstname}, ${lastname}, ${gender}, ${birthdate}, ${image})
  `;
    if (result === 0) {
      throw new Error("Error create User");
    }
    const newUser = await prisma.user.findFirst({
      orderBy: { id: "desc" },
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstname, lastname, gender, birthdate, image } = req.body;

    const result = await prisma.$executeRaw`
    UPDATE User
    SET firstname = ${firstname}, lastname = ${lastname}, gender = ${gender}, birthdate = ${birthdate}, image = ${image}
    WHERE id = ${userId};
  `;
    if (result === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json({ message: "Edited User Success!" });
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await prisma.$executeRaw`
    DELETE FROM User WHERE id = ${userId}
  `;
    if (result === 0) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json({ message: "Deleted User Success!" });
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
