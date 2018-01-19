using System.Data;

namespace keeper.Repositories
{
    public abstract class DbContext
    {
        protected readonly IDbConnection _db;

        public DbContext(IDbConnection db)
        {
            _db = db;
        }
    }
}