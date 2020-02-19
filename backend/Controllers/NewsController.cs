using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.News;

namespace backend.Controllers
{
    [ApiController]
    [Route("news")]
    public class NewsController : ControllerBase
    {
        public NewsController()
        {
        }

        [HttpGet]
        public News[] Get()
        {
            return new[]{
                new News()
                {
                    Id = 1,
                    Title = "News 1",
                    Text = "news news news news news news news news news",
                    Image = ""
                },
                new News()
                {
                    Id = 2,
                    Title = "News 2",
                    Text = "news news news news news news news news news",
                    Image = ""
                }
            };
        }
    }
}