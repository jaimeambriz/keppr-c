using System;

namespace keeper.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public int  Views { get; set; }
        public int  Count { get; set; }
        
    }
}