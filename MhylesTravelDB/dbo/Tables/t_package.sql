CREATE TABLE [dbo].[t_package]
(
	[p_id] INT NOT NULL PRIMARY KEY identity(1,1),
	p_name varchar(100) not null,
	p_price float,
	c_id int,
	foreign key(c_id) references category(c_id),
	bedroom int,
	foreign key(bedroom) references bedrooms(bed_id),
	status int
)
