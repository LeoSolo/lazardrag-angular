using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.Products;

namespace backend.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductsController : ControllerBase
    {
        public ProductsController()
        {
        }

        [HttpGet]
        public Product[] Get()
        {
            return new []{
                new Product()
                {
                    Id = 101,
                    Title = "Product 1",
                    Description = "Description of product 1",
                    Price = 9.99M,
                    Image = "",
                    Types = new []{1,2,3}
                },
                new Product()
                {
                    Id = 102,
                    Title = "Product 2",
                    Description = "Description of product 2",
                    Price = 9.99M,
                    Image = "",
                    Types = new []{1,2,3}
                }
            };
        }
    }
}
