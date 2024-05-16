const {Code} = require('../models/codeModel'); 

const getAllCode = async (req, res) => {
    try {
        const code = await Code.find();
        if (code.length === 0) {
            return res.status(404).json({ message: "No code found" });
        }
        return res.status(200).json({ code });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {
    getAllCode
};