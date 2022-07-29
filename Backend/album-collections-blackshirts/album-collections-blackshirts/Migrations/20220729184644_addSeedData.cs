using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace album_collections_blackshirts.Migrations
{
    public partial class addSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "RecordLabel", "Title" },
                values: new object[] { "Roc-A-Fella Records", "The College Dropout" });

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "ArtistId", "RecordLabel", "Title" },
                values: new object[] { 1, "GOOD Music", "Donda 2" });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "ArtistId", "RecordLabel", "Title" },
                values: new object[,]
                {
                    { 3, 2, "American Recordings", "Toxicity" },
                    { 4, 2, "American Recordings", "Hypnotize" }
                });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "Hometown", "Name", "RecordLabel" },
                values: new object[,]
                {
                    { 3, 24, "Brooklyn, NY", "Notorious B.I.G", "Bad Boy Records" },
                    { 4, 52, "London, ENG", "Queen", "EMI Records" }
                });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "ArtistId", "RecordLabel", "Title" },
                values: new object[,]
                {
                    { 5, 3, "Bad Boy Records", "Ready To Die" },
                    { 6, 3, "Bad Boy Records", "Life After Death" },
                    { 7, 4, "EMI Records", "Queen" },
                    { 8, 4, "EMI Records", "Made In Heaven" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Artists",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "RecordLabel", "Title" },
                values: new object[] { "GOOD Music", "Donda 2" });

            migrationBuilder.UpdateData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "ArtistId", "RecordLabel", "Title" },
                values: new object[] { 2, "American Recordings", "Hypnotize" });
        }
    }
}
