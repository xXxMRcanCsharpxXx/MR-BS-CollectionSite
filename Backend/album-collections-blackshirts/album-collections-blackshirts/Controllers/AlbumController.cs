using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using album_collections_blackshirts;

namespace album_collections_blackshirts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
            public MusicContext db { get; set; }
        public AlbumController(MusicContext db)
        {
            this.db = db;
        }

        // Get (details)
        [HttpGet("{id}")]
        public ActionResult<Album> Get(int id)
        {
            Album album = db.Albums.Find(id);
            if(album == null)
            {
                return NotFound();
            }
            return album;
        }

        // Get All (index)
        [HttpGet]
        public ActionResult< IEnumerable<Album> > GetAll([FromQuery]string? name) 
        {
            if(name != null)
            {
                
                return db.Albums.Where(bg => bg.Title.ToUpper().Contains( name.ToUpper() ) ).ToList(); 
            }
            return db.Albums;
        }

        // Post (create)
        [HttpPost]
        public ActionResult< IEnumerable<Album> > Post([FromBody]Album album)
        {
            
            if ( !AlbumExists(album.Title) ) 
            {
                db.Albums.Add(album);
                db.SaveChanges();
            }

            return db.Albums;
        }
        
        // Put (update)
        [HttpPut("{id}")]
        public ActionResult<Album> Put(int id, Album album)
        {
            if(album.Id == id)
            {
                db.Albums.Update(album);
                db.SaveChanges();
            }

            return album;
        }

        // Delete (delete)
        [HttpDelete("{id}")]
        public ActionResult< IEnumerable<Album> > Delete(int id)
        {
            Album album = db.Albums.Find(id);
            db.Albums.Remove(album);
            db.SaveChanges();

            return db.Albums;
        }

        private bool AlbumExists(string name)
        {
            Album existing = db.Albums.Where(bg => bg.Title == name).FirstOrDefault(); 
            return existing != null; 
        }
    }
}

    

