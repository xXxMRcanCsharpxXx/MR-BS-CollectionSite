using Microsoft.EntityFrameworkCore;
using album_collections_blackshirts;


namespace album_collections_blackshirts
{
    public class MusicContext : DbContext
    {
        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "Server=(localdb)\\mssqllocaldb;Database=album_collections_Summer2022;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
            modelBuilder.Entity<Artist>().HasData(
                new Artist() { Id = 1, Name = "Kanye West", Age = 45, Hometown = "Chicago, IL", RecordLabel = "GOOD Music" },
                new Artist() { Id = 2, Name = "System of a Down", Age = 28, Hometown = "Glendale, CA", RecordLabel = "American Recordings"  },
                new Artist() { Id = 3, Name = "Notorious B.I.G", Age = 24, Hometown = "Brooklyn, NY", RecordLabel = "Bad Boy Records"},
                new Artist() { Id = 4, Name = "Queen", Age = 52, Hometown = "London, ENG", RecordLabel = "EMI Records"}

                );
            modelBuilder.Entity<Album>().HasData(
                new Album() { Id = 1, Title = "The College Dropout", RecordLabel = "Roc-A-Fella Records", ArtistId = 1 },
                new Album() { Id = 2, Title = "Donda 2", RecordLabel = "GOOD Music", ArtistId = 1 },
                new Album() { Id = 3, Title = "Toxicity", RecordLabel = "American Recordings", ArtistId = 2 },
                new Album() { Id = 4, Title = "Hypnotize", RecordLabel = "American Recordings", ArtistId = 2 },
                new Album() { Id = 5, Title = "Ready To Die", RecordLabel = "Bad Boy Records", ArtistId = 3 },
                new Album() { Id = 6, Title = "Life After Death", RecordLabel = "Bad Boy Records", ArtistId = 3},
                new Album() { Id = 7, Title = "Queen", RecordLabel = "EMI Records", ArtistId = 4 },
                new Album() { Id = 8, Title = "Made In Heaven", RecordLabel = "EMI Records", ArtistId = 4}
                );
           
            base.OnModelCreating(modelBuilder);
        }
    }
}
