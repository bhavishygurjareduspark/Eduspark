const fs = require("fs");
const path = require("path");

// ✅ JSON File ka path
const filePath = path.resolve(__dirname, "../../likesData.json");

exports.handler = async (event) => {
    try {
        // ✅ JSON File read karo
        let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        let { type } = JSON.parse(event.body);

        // ✅ Like/Dislike update karo
        if (type === "likes" || type === "dislikes") {
            data[type] = (data[type] || 0) + 1;
            fs.writeFileSync(filePath, JSON.stringify(data));
        }

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: "Server Error" }) };
    }
};
