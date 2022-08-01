CREATE TABLE [dbo].[imagetable]
(
	[img_id] INT NOT NULL PRIMARY KEY identity(1,1),
	slides varchar(150) not null,
	p_id int,
	foreign key(p_id) references t_package(p_id)
)
