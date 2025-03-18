exports.handler = async (event) => {
    const fs = require("fs");
    const path = require("path");

    // File location to store data
    const filePath = path.resolve(__dirname, "likes.json");

    // Read existing data
    let data = { likes: 0, dislikes: 0 };
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    // Parse request
    const body = JSON.parse(event.body);
    if (body.type === "like") {
        data.likes += 1;
    } else if (body.type === "dislike") {
        data.dislikes += 1;
    }

    // Save updated data
    fs.writeFileSync(filePath, JSON.stringify(data));

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
