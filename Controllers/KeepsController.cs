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
    public class KeepsController : Controller
    {
        private readonly KeepRepository _db;

        public KeepsController(KeepRepository repo)
        {
            _db = repo;
        }
        // GET api/keeps
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _db.GetAll();
        }
        [Authorize]
        [HttpGet("vaults/{id}")]
        public IEnumerable<Keep> GetByVault(int id)
        {
            return _db.GetByVaultId(id);
        }
        [Authorize]
        [HttpGet("user/{id}")]
        public IEnumerable<Keep> GetByUser(int id)
        {
            return _db.GetByUserId(id);
        }
        // GET api/keeps/5
        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            return _db.GetById(id);
        }

        // POST api/keeps
        [Authorize]
        [HttpPost]
        public Keep Post([FromBody]Keep keep)
        {
            var user = HttpContext.User.Identity.Name;
            int Id; 
            int.TryParse( user, out  Id);
            keep.UserId = Id;
            return _db.Add(keep);
        }


        // PUT api/keeps/5
        [Authorize]
        [HttpPut("{id}")]
        public Keep Put(int id, [FromBody]Keep keep)
        {
            if (ModelState.IsValid)
            {
                return _db.GetOneByIdAndUpdate(id, keep);
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
