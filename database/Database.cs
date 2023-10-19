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
            host = "u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            database = "gdxrv40koc8k9tio";
            username = "x7vvsgcy5o49sq0l";
            port = "3306";
            password = "pwjpg34y3t7dbox5";

            cs = $"server={host};user={username};database={database};port={port};password={password}";

        } 
    }

}