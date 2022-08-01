create Procedure [dbo].[Condition_insert]
	@terms_conditions ConditionUDT readonly
as
	begin
	insert into dbo.condition (name, p_id)
	select [Name],[PackageId]
	from @terms_conditions;
	end