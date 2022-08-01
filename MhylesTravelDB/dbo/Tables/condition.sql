CREATE TABLE [dbo].[condition]
(
	[con_id] INT NOT NULL PRIMARY KEY identity(1,1),
	name varchar(150) not null,
	p_id int,
	foreign key (p_id) references t_package(p_id) 
)
