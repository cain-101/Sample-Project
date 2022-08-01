CREATE TABLE [dbo].[itinerary]
(
	[it_id] INT NOT NULL PRIMARY KEY identity(1,1),
	name varchar(100) not null,
	description text,
	bmeal int,
	lmeal int,
	dmeal int,
	p_id int,
	foreign key(p_id) references t_package(p_id)
)
