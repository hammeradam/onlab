using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace alulaTest.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Blogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Company = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Occupacity = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<int>(nullable: false),
                    Salary = table.Column<int>(nullable: false),
                    Skills = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Budget = table.Column<int>(nullable: false),
                    Company = table.Column<string>(nullable: true),
                    CurrentHours = table.Column<int>(nullable: false),
                    DueDate = table.Column<string>(nullable: true),
                    Leader = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PlannedHours = table.Column<int>(nullable: false),
                    ResourcesId = table.Column<int>(nullable: true),
                    Risk = table.Column<int>(nullable: false),
                    SkillsId = table.Column<int>(nullable: true),
                    StartDate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Posts_Blogs_ResourcesId",
                        column: x => x.ResourcesId,
                        principalTable: "Blogs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Year",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ProjectId = table.Column<int>(nullable: true),
                    ResourceId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Year", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Year_Posts_ProjectId",
                        column: x => x.ProjectId,
                        principalTable: "Posts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Year_Blogs_ResourceId",
                        column: x => x.ResourceId,
                        principalTable: "Blogs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Week",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Current = table.Column<int>(nullable: false),
                    Requiered = table.Column<int>(nullable: false),
                    YearId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Week", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Week_Year_YearId",
                        column: x => x.YearId,
                        principalTable: "Year",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Skill",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Count = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    WeekId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skill", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Skill_Week_WeekId",
                        column: x => x.WeekId,
                        principalTable: "Week",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_ResourcesId",
                table: "Posts",
                column: "ResourcesId");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_SkillsId",
                table: "Posts",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_Skill_WeekId",
                table: "Skill",
                column: "WeekId");

            migrationBuilder.CreateIndex(
                name: "IX_Week_YearId",
                table: "Week",
                column: "YearId");

            migrationBuilder.CreateIndex(
                name: "IX_Year_ProjectId",
                table: "Year",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Year_ResourceId",
                table: "Year",
                column: "ResourceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Skill_SkillsId",
                table: "Posts",
                column: "SkillsId",
                principalTable: "Skill",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Blogs_ResourcesId",
                table: "Posts");

            migrationBuilder.DropForeignKey(
                name: "FK_Year_Blogs_ResourceId",
                table: "Year");

            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Skill_SkillsId",
                table: "Posts");

            migrationBuilder.DropTable(
                name: "Blogs");

            migrationBuilder.DropTable(
                name: "Skill");

            migrationBuilder.DropTable(
                name: "Week");

            migrationBuilder.DropTable(
                name: "Year");

            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
