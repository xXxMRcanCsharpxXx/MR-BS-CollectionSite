using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using album_collections_blackshirts;

namespace album_collections_blackshirts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        public MusicContext db { get; set; }
        public ArtistController(MusicContext db)
        {
            this.db = db;
        }

        // Get (details)
        [HttpGet("{id}")]
        public ActionResult<Artist> Get(int id)
        {
            Artist artist = db.Artists.Find(id);
            if (artist == null)
            {
                return NotFound();
            }
            return artist;
        }

        // Get All (index)
        [HttpGet]
        public ActionResult<IEnumerable<Artist>> GetAll([FromQuery] string? name)
        {
            if (name != null)
            {

                return db.Artists.Where(bg => bg.Name.ToUpper().Contains(name.ToUpper())).ToList();
            }
            return db.Artists;
        }

        // Post (create)
        [HttpPost]
        public ActionResult<IEnumerable<Artist>> Post(Artist artist)
        {

            if (!ArtistExists(artist.Name))
            {
                db.Artists.Add(artist);
                db.SaveChanges();
            }

            return db.Artists;
        }

        // Put (update)
        [HttpPut("{id}")]
        public ActionResult<Artist> Put(int id, Artist artist)
        {
            if (artist.Id == id)
            {
                db.Artists.Update(artist);
                db.SaveChanges();
            }

            return artist;
        }

        // Delete (delete)
        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Artist>> Delete(int id)
        {
            Artist artist = db.Artists.Find(id);
            db.Artists.Remove(artist);
            db.SaveChanges();

            return db.Artists;
        }

        private bool ArtistExists(string name)
        {
            Artist existing = db.Artists.Where(bg => bg.Name == name).FirstOrDefault();
            return existing != null;
        }
    }
}
