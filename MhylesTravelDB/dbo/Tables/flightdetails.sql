CREATE TABLE [dbo].[flightdetails]
(
	[fl_id] INT NOT NULL PRIMARY KEY identity(1,1),
	name varchar(100) not null,
	p_id int,
	foreign key(p_id) references t_package(p_id)
)
