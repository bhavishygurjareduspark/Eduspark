const fs = require("fs");
const path = require("path");

// JSON file to store likes & dislikes
const dataFilePath = path.join(__dirname, "likes-data.json");

// Ensure file exists
if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ likes: 0, dislikes: 0, users: [] }));
}

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const { user_id, reaction } = JSON.parse(event.body);
        let data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));

        // Check if user already reacted
        if (data.users.includes(user_id)) {
            return { statusCode: 400, body: JSON.stringify({ message: "User already reacted" }) };
        }

        // Update likes or dislikes
        if (reaction === "like") {
            data.likes += 1;
        } else if (reaction === "dislike") {
            data.dislikes += 1;
        }

        // Save user ID to prevent multiple votes
        data.users.push(user_id);

        // Write updated data to file
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Reaction updated successfully", data }),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
