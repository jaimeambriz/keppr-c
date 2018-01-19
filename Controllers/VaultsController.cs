using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using keeper.Models;
using keeper.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keeper.Controllers
{
    [Route("api/[controller]")]
    public class VaultsController : Controller
    {
        private readonly VaultRepository _db;

        public VaultsController(VaultRepository repo)
        {
            _db = repo;
        }
        // GET api/keeps
        [Authorize]
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return _db.GetAll();
        }
        [Authorize]
        [HttpGet("user/{id}")]
        public IEnumerable<Vault> GetByUser(int id)
        {
            return _db.GetByUserId(id);
        }
        // GET api/keeps/5
        [Authorize]
        [HttpGet("{id}")]

        public Vault Get(int id)
        {
            return _db.GetById(id);
        }

        // POST api/keeps
        [Authorize]
        [HttpPost]
        public Vault Post([FromBody]Vault vault)
        {
            var user = HttpContext.User.Identity.Name;
            int Id; 
            int.TryParse( user, out  Id);
            vault.UserId = Id;
            return _db.Add(vault);
        }


        // PUT api/keeps/5
        [Authorize]
        [HttpPut("{id}")]
        public Vault Put(int id, [FromBody]Vault vault)
        {
            if (ModelState.IsValid)
            {
                return _db.GetOneByIdAndUpdate(id, vault);
            }
            return null;
        }

        // DELETE api/keeps/5
        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return _db.FindByIdAndRemove(id);
        }
    }
}
