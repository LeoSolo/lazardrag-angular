using Microsoft.EntityFrameworkCore;
using Models.Products;
using Models.Slides;
using Models.Tags;
using Models.Users;

namespace backend.DAL {     
public class DataContext : DbContext     
  {         
    public DataContext(DbContextOptions<DataContext> options) : base(options)         
{         
}       
    public DbSet<User> Users { get; set; }     
    public DbSet<Product> Products { get; set; }
    public DbSet<Slide> Slides { get; set; }
    public DbSet<Tag> Tags { get; set; }
   } 
}
