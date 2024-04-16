
const Card = require("../models/Card");

module.exports = {
    getAllCards: async (req, res) => {
        try {
            const cards = await Card.getAllCards();
            res.json({ statusCode: 200, data: cards, message: "Success" });
        } catch (error) {
            console.error("Error fetching cards:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    postCard: async (req, res) => {
        try {
            const card = req.body;
            await Card.insertCard(card);
            res.status(201).json({ statusCode: 201, data: card, message: "Card added successfully" });
        } catch (error) {
            console.error("Error adding card:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};
