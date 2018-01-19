using System;
using System.Data;
using keeper.Models;
using Dapper;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace keeper.Repositories
{
    public class VaultRepository : DbContext
    {
        public VaultRepository(IDbConnection db) : base(db)
        {
        }
        // Find One Find Many add update delete
        public IEnumerable<Vault> GetAll()
        {
            return _db.Query<Vault>("SELECT * FROM Vaults");
        }

        public IEnumerable<Vault> GetByUserId(int id)
        {
            return _db.Query<Vault>($@"SELECT * FROM Vaults WHERE (UserId = {id})", id);
        }
        public Vault GetById(int id)
        {
            return _db.QueryFirstOrDefault<Vault>($"SELECT * FROM Vaults WHERE id = {id}", id);
        }


        public Vault Add(Vault vault)
        {
            int id = _db.ExecuteScalar<int>("INSERT INTO Vaults (Name, Description,ImageUrl, UserId)"
                         + " VALUES(@Name, @Description, @ImageUrl, @UserId); SELECT LAST_INSERT_ID()", new
                         {
                             vault.Name,
                             vault.Description,
                             vault.ImageUrl,
                             vault.UserId
                         });

            vault.Id = id;
            return vault;
        }

        public Vault GetOneByIdAndUpdate(int id, Vault vault)
        {
            return _db.QueryFirstOrDefault<Vault>($@"
                UPDATE Vaults SET  
                    Name = @Name,
                    Description = @Description,
                    UserId = @UserId
                WHERE Id = {id};
                SELECT * FROM Vaults WHERE id = {id};", vault);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM Vaults WHERE Id = {id}
            ", id);
            return success > 0 ? "success you deleated a Vault" : "umm that didnt work";
        }
    }
}