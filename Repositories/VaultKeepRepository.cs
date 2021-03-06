using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using keeper.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace keeper.Repositories
{
    public class VaultKeepRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepRepository(IDbConnection db)
        {
            _db = db;
        }
        public IEnumerable<Keep> GetAllKeeps(int id)
        {
            return _db.Query<Keep>($@"
            SELECT * FROM vaultkeeps vk
            INNER JOIN keeps k ON k.id = vk.keepId 
            WHERE (vaultId = {id})");

        }
        public IEnumerable<VaultKeep> GetAll()
        {
            return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps");
        }

        // public VaultKeep GetById(int id)
        // {
        //     return _db.QueryFirstOrDefault<VaultKeep>($"SELECT * FROM vaultkeeps WHERE id = {id}", id);
        // }

        public VaultKeep Add(VaultKeep VaultKeep)
        {
            int id = _db.ExecuteScalar<int>("INSERT INTO vaultkeeps (UserId, VaultId, KeepId)"
                        + $" VALUES(@UserId, @VaultId, @KeepId); SELECT LAST_INSERT_ID()", new
                        {
                            VaultKeep.UserId,
                            VaultKeep.VaultId,
                            VaultKeep.KeepId
                        });
            VaultKeep.Id = id;
            return VaultKeep;

        }

        // public VaultKeep GetOneByIdAndUpdate(int id, VaultKeep VaultKeep)
        // {
        //     return _db.QueryFirstOrDefault<VaultKeep>($@"
        //         UPDATE VaultKeeps SET  
        //             UserId = @UserId, 
        //             VaultId = @VaultId, 
        //             KeepId = @KeepId
        //         WHERE Id = {id};
        //         SELECT * FROM VaultKeeps WHERE id = {id};", VaultKeep);
        // }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM VaultKeeps WHERE Id = {id}
            ", id);
            return success > 0 ? "success" : "umm that didnt work";
        }

        public string FindKeepAndRemoveFromVault(int keepId, int vaultId)
        {
            var success = _db.Execute($@"
                DELETE FROM VaultKeeps WHERE vaultId = {vaultId} AND keepId = {keepId}
            ");
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}