namespace album_collections_blackshirts
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
   
        public virtual List<Album> Albums { get; set; }
        public int Age { get; set; }
        public string RecordLabel { get; set; }
        public string Hometown { get; set; }
    }
}
