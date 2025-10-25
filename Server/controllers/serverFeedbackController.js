import connection from "../dbConfig/db.js";

const getFeedbackData = async (req, res) => {
  const [rows] = await connection.promise().query("SELECT * FROM feedbackData");

  return res.json(rows);
};


export default getFeedbackData;