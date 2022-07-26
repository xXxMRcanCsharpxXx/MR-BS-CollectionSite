namespace album_collections_blackshirts
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string image { get; set; }
        public List<Album> Albums { get; set; }
        public int age { get; set; }
        public string recordLabel { get; set; }
        public string hometown { get; set; }
    }
}
