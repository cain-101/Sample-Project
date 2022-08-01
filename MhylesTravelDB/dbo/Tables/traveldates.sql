CREATE TABLE [dbo].[traveldates]
(
	[tdates_id] INT NOT NULL PRIMARY KEY identity(1,1),
	dfrom date,
	dto date,
	p_id int,
	foreign key (p_id) references t_package(p_id)
)
