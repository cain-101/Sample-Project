CREATE procedure [dbo].[Phtel_insert]
	@phtel photelUDT readonly
as
	begin
	insert into dbo.photel(ph_loc, ph_phtel, p_id)
	select [Ph_loc],[Ph_phtel],[PackageId]
	from @phtel;
	end
