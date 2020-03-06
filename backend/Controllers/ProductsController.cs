using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.Products;
using backend.DAL;

namespace backend.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public ProductsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost]
        public void Post([FromBody]Product product)
        {
            _dataContext.Products.Add(new Models.Products.Product {
                Title = product.Title,
                Description = product.Description,
                Price = product.Price,
                Image = product.Image,
                Type = product.Type
            });
            _dataContext.SaveChanges();
        }
        
        [HttpGet]
        public IEnumerable<Models.Products.Product> GetList()
        {
            return _dataContext.Products.ToList();
        }

        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            return new Product() {
                Id = id,
                Title = "Product 1",
                Description = "Description of product 1",
                Price = 9.99M,
                Image = "",
                Type = 1
            };
        }
    }
}
