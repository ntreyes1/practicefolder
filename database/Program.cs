using System.Security.Policy;
using MIS321_PA4_NReyes1;
using MySql.Data.MySqlClient;

Console.WriteLine("Hello, World!");

Database db = new Database();
using var con = new MySqlConnection(db.cs);
con.Open();
string stm = "SELECT * from exercises;";
using var cmd = new MySqlCommand(stm, con);
using MySqlDataReader rdr = cmd.ExecuteReader();
while (rdr.Read()) {
string formattedDate = rdr.GetDateTime(3).ToString("yyyy/MM/dd");
    Console.WriteLine($"{rdr.GetInt32(0)} {rdr.GetString(1)} {rdr.GetDecimal(2)} {formattedDate} {rdr.GetString(4)} {rdr.GetString(5)}");
}

con.Close();