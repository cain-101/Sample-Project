CREATE Procedure [dbo].[FlightDetails_insert]
	@flightDetails FlightDUDT readonly
as
	begin
	insert into dbo.flightdetails (name, p_id)
	select [Name],[PackageId]
	from @flightDetails;
	end