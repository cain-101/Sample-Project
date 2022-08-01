CREATE Procedure [dbo].[TravelDateInsert]
	@travelDates DateUDT readonly
as
	begin
	insert into dbo.traveldates(dfrom, dto, p_id)
	select [DFrom],[DTo],[PackageId]
	from @travelDates;
end