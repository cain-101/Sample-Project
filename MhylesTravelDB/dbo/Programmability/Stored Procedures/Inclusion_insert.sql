CREATE Procedure [dbo].[Inclusion_insert]
	@inclusions InclusionUDT readonly
as
	begin
	insert into dbo.inclusion (name, p_id)
	select [Name],[PackageId]
	from @inclusions;
	end 