import connection from "../dbConfig/db.js";

const postFeedbackData = async (req, res) => {
  const { username, useremail, userfeedback } = req.body;

  //Create userId
  const userId = () => {
    const name = username.slice(0, 3).toLowerCase();
    const date = new Date(); //Get current date
    const year = date.getFullYear(); //Get current year example 2025
    const dayOfMonth = date.getDate(); //Day of month 1-30 or 31
    const dayOfWeek = date.getDay(); //Day of week 1-7
    const monthofYear = date.getMonth() + 1; //To get month 1-12
    const soconds = date.getSeconds(); //Get seconds 0-59
    const randomNum = Math.floor(Math.random() * 10000); //Generate random number between 1-10000

    return `${randomNum}${name[0]}${dayOfMonth}${dayOfWeek}${name[1]}${monthofYear}${name[2]}${year}${soconds}`;
  };

  const sql = `INSERT INTO feedbackData (userId, name, email, feedback) VALUES (?, ?, ?, ?)`;
  const values = [userId(), username, useremail, userfeedback];

  await connection.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).end();
    }
  });

  return res
    .status(200)
    .end();
};


export default postFeedbackData;