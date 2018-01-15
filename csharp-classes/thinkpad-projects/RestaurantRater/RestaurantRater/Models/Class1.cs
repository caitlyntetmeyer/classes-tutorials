using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace RestaurantRater.Models
{
    public class Restaurant
    {
        public int RestaurantID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Rating { get; set; }
    }

    // DbContext: Access to your tables and views
    public class RestaurantDBContext : DbContext
    {
        // DbSet: To get access, create, update, delete and modify your table data
        public DbSet<Restaurant> Restaurants { get; set; }
    }
}