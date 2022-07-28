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
                new Artist() { Id = 2, Name = "System of a Down", Age = 28, Hometown = "Glendale, CA", RecordLabel = "American Recordings"  }
                );
            modelBuilder.Entity<Album>().HasData(
                new Album() { Id = 1, Title = "Donda 2", RecordLabel = "GOOD Music", ArtistId = 1 },
                new Album() { Id = 2, Title = "Hypnotize", RecordLabel = "American Recordings", ArtistId = 2 }
                );
           
            base.OnModelCreating(modelBuilder);
        }
    }
}
