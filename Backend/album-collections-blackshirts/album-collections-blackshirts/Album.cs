namespace album_collections_blackshirts
{
    public class Album
    {
        public int id { get; set; }
        public string title { get; set; }
        public List<Song> Songs { get; set; }
        public string recordLabel { get; set; }
    }
}
