const connection = require("./connection");

const getUser = async() =>{
  const sql = "SELECT * FROM SearchUser.users";
  
  const [users] = await connection.execute(sql);
  //console.log(users);
  return users;
}

module.exports = getUser;