using System.Collections.Generic;
using System.Linq;
using backend.DAL;
using Microsoft.AspNetCore.Mvc;
using Models.Slides;

namespace backend.Controllers
{
    [ApiController]
    [Route("slides")]
    public class SlidesController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public SlidesController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost]
        public void Post([FromBody]Slide slide)
        {
            _dataContext.Slides.Add(new Models.Slides.Slide{
                Image = slide.Image
            });
            _dataContext.SaveChanges();
        }

        [HttpGet]
        public IEnumerable<Models.Slides.Slide> GetList()
        {
            return _dataContext.Slides.ToList();
        }
    }
}
