using Microsoft.AspNetCore.Mvc;
using Models.Slides;

namespace backend.Controllers
{
    [ApiController]
    [Route("slides")]
    public class SlidesController : ControllerBase
    {
        public SlidesController(){}

        [HttpGet]
        public Slide[] Get()
        {
            return new []{
                new Slide()
                {
                    Image = "https://shelpcart.com/wp-content/uploads/2019/06/2.-1200x300.jpg"
                },
                new Slide()
                {
                    Image = "https://www.iso.org/files/live/sites/isoorg/files/archive/Ref1980/img_ref1980_01.jpg/thumbnails/1200x300"
                },
                new Slide()
                {
                    Image = "https://lh3.googleusercontent.com/proxy/Uznko8z9l0k0-A_hD52wp3dt5VVhB5RFpDZxBhFXuGc4-U2WOWf9FPf-Ii5eeBgbHqnTdiZh00VGDoCvWJuo7W4vg_UAoupM9wy1G6CwgUgt"
                }
            };
        }
    }
}
