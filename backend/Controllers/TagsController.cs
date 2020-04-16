using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DAL;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models.Tags;

namespace backend.Controllers
{
    [ApiController]
    [Route("tags")]

    public class TagsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public TagsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost]
        public void Post([FromBody]Tag tag)
        {
            _dataContext.Tags.Add(new Models.Tags.Tag {
                ProductId = tag.Id,
                Word = tag.Word
            });
            _dataContext.SaveChanges();
        }

        [HttpGet("{id}")]
        public IEnumerable<Models.Tags.Tag> GetTags(long id)
        {
            return _dataContext.Tags.Where(tag => tag.Id == id).ToList();
        }
    }
}