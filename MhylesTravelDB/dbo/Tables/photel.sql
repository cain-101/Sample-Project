CREATE TABLE [dbo].[photel]
(
	[ph_id] INT NOT NULL PRIMARY KEY identity(1,1),
	ph_loc varchar(100),
	ph_phtel varchar(200),
	p_id int,
	foreign key(p_id) references t_package(p_id)
)
