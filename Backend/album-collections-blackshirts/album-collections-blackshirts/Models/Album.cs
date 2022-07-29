namespace album_collections_blackshirts
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
       // public List<Song> Songs { get; set; }
        public string RecordLabel { get; set; }
        public virtual Artist Artist { get; set; }
        public int ArtistId { get; set; }

        public Album(int id, string title, string recordLabel, int artistId)
        {
            Id = id;
            Title = title;
            RecordLabel = recordLabel;
            ArtistId = artistId;
        }

        public Album()
        {

        }
    }
}
