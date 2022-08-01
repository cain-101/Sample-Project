CREATE Procedure [dbo].[Exclusion_insert]
	@exclusions ExclusionUDT readonly
as 
	begin
	insert into dbo.exclusion (name, p_id)
	select [Name],[PackageId]
	from @exclusions;
	end
