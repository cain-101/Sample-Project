CREATE Procedure [dbo].[VisaReq_insert]
	@visareq VisaReqUDT readonly
as
	begin
	insert into dbo.visareq (name, p_id)
	select [Name],[PackageId]
	from @visareq;
	end