CREATE Procedure [dbo].[Itinerary_insert]
	@itinerary MyUDT readonly
	as
	begin
	insert into dbo.itinerary(name, description, bmeal, lmeal, dmeal, p_id)
	select [Name],[Description],[Bmeals],[Lmeals],[Dmeals],[PackageId]
	from @itinerary;
	end