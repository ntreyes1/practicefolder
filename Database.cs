using System.Diagnostics.Metrics;

namespace MIS321_PA4_NReyes1
{
    public class Database
    {
        private string host {get;set;}
        private string database {get;set;}
        private string username {get;set;}
        private string port {get;set;}
        private string password{get;set;}

        public string cs {get; set;}

        public Database() {
            host = "co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            database = "gnrdg4hzjj3mtv8l";
            username = "ndch78amfewcxr0t";
            port = "3306";
            password = "bimp180mgn82un7v";

            cs = $"server={host};user={username};database={database};port={port};password={password}";

        } 
    }

}