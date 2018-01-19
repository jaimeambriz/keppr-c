using System;
using System.Data;
using keeper.Models;
using Dapper;
using MySql.Data.MySqlClient;
using System.Collections.Generic;

namespace keeper.Repositories
{
    public class KeepRepository : DbContext
    {
        public KeepRepository(IDbConnection db) : base(db)
        {
        }
        // Find One Find Many add update delete
        public IEnumerable<Keep> GetAll()
        {
            return _db.Query<Keep>("SELECT * FROM Keeps");
        }

        public Keep GetById(int id)
        {
            return _db.QueryFirstOrDefault<Keep>($"SELECT * FROM Keeps WHERE id = {id}", id);
        }


        public Keep Add(Keep keep)
        {
            int id = _db.ExecuteScalar<int>("INSERT INTO Keeps (Name, UserId, ImageUrl, Views, Count)"
                         + " VALUES(@Name, @UserId, @ImageUrl, @Views, @Count); SELECT LAST_INSERT_ID()", new
                         {
                             keep.Name,
                             keep.UserId,
                             keep.ImageUrl,
                             keep.Views,
                             keep.Count,
                         });
            keep.Id = id;
            return keep;
        }
         public IEnumerable<Keep> GetByVaultId(int id)
        {
    
            return _db.Query<Keep>($@"SELECT * FROM vaultkeeps vk
                                                    INNER JOIN keeps k ON k.id = vk.keepId 
                                                    WHERE (vaultId = {id})", id);
        }
        public IEnumerable<Keep> GetByUserId(int id)
        {
            return _db.Query<Keep>($@"SELECT * FROM keeps WHERE (UserId = {id})", id);
        }
        public Keep GetOneByIdAndUpdate(int id, Keep keep)
        {
            return _db.QueryFirstOrDefault<Keep>($@"
                UPDATE Keeps SET  
                    Name = @Name,
                    Views = @Views,
                    UserId = @UserId,
                    Count = @Count
                WHERE Id = {id};
                SELECT * FROM Keeps WHERE id = {id};", keep);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM Keeps WHERE Id = {id}
            ", id);
            return success > 0 ? "success you deleated a keep" : "umm that didnt work";
        }
    }
}