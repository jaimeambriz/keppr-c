using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keeper.Models;
using keeper.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeper.Controllers
{
    [Route("api/[controller]")]
    public class VaultKeepsController : Controller
    {
        private readonly VaultKeepRepository _db;
        
        public VaultKeepsController(VaultKeepRepository VaultKeepRepo)
        {
            
            _db = VaultKeepRepo;
        }

        [HttpGet]
        public IEnumerable<VaultKeep> Get()
        {
            return _db.GetAll();
        }
        // GET api/values
        [Authorize]
        [HttpGet("vault/{id}")]
        public IEnumerable<Keep> GetByVault(int id)
        {
            return _db.GetAllKeeps(id);
        }


        // POST api/values
        [Authorize]
        [HttpPost]
        public VaultKeep Post([FromBody]VaultKeep VaultKeep)
        {
            var user = HttpContext.User.Identity.Name;
            int Id; 
            int.TryParse( user, out  Id);
            VaultKeep.UserId = Id;
            return _db.Add(VaultKeep);
        }

        // PUT api/values/5
        // [Authorize]
        // [HttpPut("{id}")]
        // public VaultKeep Put(int id, [FromBody]VaultKeep VaultKeep)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         return _db.GetOneByIdAndUpdate(id, VaultKeep);
        //     }
        //     return null;
        // }

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("vaults/{vaultId}/keeps/{keepId}")]
        public string Delete(int vaultId, int keepId)
        {
            return _db.FindKeepAndRemoveFromVault(keepId, vaultId);
        }
    }
}
