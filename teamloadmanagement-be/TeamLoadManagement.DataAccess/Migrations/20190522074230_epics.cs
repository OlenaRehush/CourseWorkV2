using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamLoadManagement.DataAccess.Migrations
{
    public partial class Epics : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EpicId",
                table: "Tasks",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Epics",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Deadline = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Epics", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_EpicId",
                table: "Tasks",
                column: "EpicId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Epics_EpicId",
                table: "Tasks",
                column: "EpicId",
                principalTable: "Epics",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Epics_EpicId",
                table: "Tasks");

            migrationBuilder.DropTable(
                name: "Epics");

            migrationBuilder.DropIndex(
                name: "IX_Tasks_EpicId",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "EpicId",
                table: "Tasks");
        }
    }
}
