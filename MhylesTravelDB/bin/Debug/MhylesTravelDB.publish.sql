/*
Deployment script for MhylesTravelDB

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "MhylesTravelDB"
:setvar DefaultFilePrefix "MhylesTravelDB"
:setvar DefaultDataPath "C:\Users\st0w\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB"
:setvar DefaultLogPath "C:\Users\st0w\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [master];


GO

IF (DB_ID(N'$(DatabaseName)') IS NOT NULL) 
BEGIN
    ALTER DATABASE [$(DatabaseName)]
    SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE [$(DatabaseName)];
END

GO
PRINT N'Creating $(DatabaseName)...'
GO
CREATE DATABASE [$(DatabaseName)]
    ON 
    PRIMARY(NAME = [$(DatabaseName)], FILENAME = N'$(DefaultDataPath)$(DefaultFilePrefix)_Primary.mdf')
    LOG ON (NAME = [$(DatabaseName)_log], FILENAME = N'$(DefaultLogPath)$(DefaultFilePrefix)_Primary.ldf') COLLATE SQL_Latin1_General_CP1_CI_AS
GO
USE [$(DatabaseName)];


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ANSI_NULLS ON,
                ANSI_PADDING ON,
                ANSI_WARNINGS ON,
                ARITHABORT ON,
                CONCAT_NULL_YIELDS_NULL ON,
                NUMERIC_ROUNDABORT OFF,
                QUOTED_IDENTIFIER ON,
                ANSI_NULL_DEFAULT ON,
                CURSOR_DEFAULT LOCAL,
                CURSOR_CLOSE_ON_COMMIT OFF,
                AUTO_CREATE_STATISTICS ON,
                AUTO_SHRINK OFF,
                AUTO_UPDATE_STATISTICS ON,
                RECURSIVE_TRIGGERS OFF 
            WITH ROLLBACK IMMEDIATE;
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CLOSE OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET ALLOW_SNAPSHOT_ISOLATION OFF;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET READ_COMMITTED_SNAPSHOT OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_UPDATE_STATISTICS_ASYNC OFF,
                PAGE_VERIFY NONE,
                DATE_CORRELATION_OPTIMIZATION OFF,
                DISABLE_BROKER,
                PARAMETERIZATION SIMPLE,
                SUPPLEMENTAL_LOGGING OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET TRUSTWORTHY OFF,
        DB_CHAINING OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'The database settings cannot be modified. You must be a SysAdmin to apply these settings.';
    END


GO
IF IS_SRVROLEMEMBER(N'sysadmin') = 1
    BEGIN
        IF EXISTS (SELECT 1
                   FROM   [master].[dbo].[sysdatabases]
                   WHERE  [name] = N'$(DatabaseName)')
            BEGIN
                EXECUTE sp_executesql N'ALTER DATABASE [$(DatabaseName)]
    SET HONOR_BROKER_PRIORITY OFF 
    WITH ROLLBACK IMMEDIATE';
            END
    END
ELSE
    BEGIN
        PRINT N'The database settings cannot be modified. You must be a SysAdmin to apply these settings.';
    END


GO
ALTER DATABASE [$(DatabaseName)]
    SET TARGET_RECOVERY_TIME = 0 SECONDS 
    WITH ROLLBACK IMMEDIATE;


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET FILESTREAM(NON_TRANSACTED_ACCESS = OFF),
                CONTAINMENT = NONE 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF),
                MEMORY_OPTIMIZED_ELEVATE_TO_SNAPSHOT = OFF,
                DELAYED_DURABILITY = DISABLED 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE (QUERY_CAPTURE_MODE = ALL, DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_PLANS_PER_QUERY = 200, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 367), MAX_STORAGE_SIZE_MB = 100) 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE [$(DatabaseName)]
            SET QUERY_STORE = OFF 
            WITH ROLLBACK IMMEDIATE;
    END


GO
IF EXISTS (SELECT 1
           FROM   [master].[dbo].[sysdatabases]
           WHERE  [name] = N'$(DatabaseName)')
    BEGIN
        ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
        ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
        ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
    END


GO
IF fulltextserviceproperty(N'IsFulltextInstalled') = 1
    EXECUTE sp_fulltext_database 'enable';


GO
PRINT N'Creating [dbo].[ConditionUDT]...';


GO
CREATE TYPE [dbo].[ConditionUDT] AS TABLE (
    [Name]      VARCHAR (150) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[DateUDT]...';


GO
CREATE TYPE [dbo].[DateUDT] AS TABLE (
    [DFrom]     DATE NULL,
    [DTo]       DATE NULL,
    [PackageId] INT  NULL);


GO
PRINT N'Creating [dbo].[ExclusionUDT]...';


GO
CREATE TYPE [dbo].[ExclusionUDT] AS TABLE (
    [Name]      VARCHAR (150) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[FlightDUDT]...';


GO
CREATE TYPE [dbo].[FlightDUDT] AS TABLE (
    [Name]      VARCHAR (100) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[InclusionUDT]...';


GO
CREATE TYPE [dbo].[InclusionUDT] AS TABLE (
    [Name]      VARCHAR (150) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[MyUDT]...';


GO
CREATE TYPE [dbo].[MyUDT] AS TABLE (
    [Name]        VARCHAR (50) NULL,
    [Description] TEXT         NULL,
    [Bmeals]      VARCHAR (20) NULL,
    [Lmeals]      VARCHAR (20) NULL,
    [Dmeals]      VARCHAR (20) NULL,
    [PackageId]   INT          NULL);


GO
PRINT N'Creating [dbo].[photelUDT]...';


GO
CREATE TYPE [dbo].[photelUDT] AS TABLE (
    [Ph_loc]    VARCHAR (100) NULL,
    [Ph_phtel]  VARCHAR (200) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[VisaReqUDT]...';


GO
CREATE TYPE [dbo].[VisaReqUDT] AS TABLE (
    [Name]      VARCHAR (150) NULL,
    [PackageId] INT           NULL);


GO
PRINT N'Creating [dbo].[bedrooms]...';


GO
CREATE TABLE [dbo].[bedrooms] (
    [bed_id]  INT          IDENTITY (1, 1) NOT NULL,
    [bedtype] VARCHAR (50) NOT NULL,
    PRIMARY KEY CLUSTERED ([bed_id] ASC)
);


GO
PRINT N'Creating [dbo].[category]...';


GO
CREATE TABLE [dbo].[category] (
    [c_id]   INT           IDENTITY (1, 1) NOT NULL,
    [c_type] VARCHAR (100) NOT NULL,
    PRIMARY KEY CLUSTERED ([c_id] ASC)
);


GO
PRINT N'Creating [dbo].[condition]...';


GO
CREATE TABLE [dbo].[condition] (
    [con_id] INT           IDENTITY (1, 1) NOT NULL,
    [name]   VARCHAR (150) NOT NULL,
    [p_id]   INT           NULL,
    PRIMARY KEY CLUSTERED ([con_id] ASC)
);


GO
PRINT N'Creating [dbo].[exclusion]...';


GO
CREATE TABLE [dbo].[exclusion] (
    [ex_id] INT           IDENTITY (1, 1) NOT NULL,
    [name]  VARCHAR (150) NOT NULL,
    [p_id]  INT           NULL,
    PRIMARY KEY CLUSTERED ([ex_id] ASC)
);


GO
PRINT N'Creating [dbo].[flightdetails]...';


GO
CREATE TABLE [dbo].[flightdetails] (
    [fl_id] INT           IDENTITY (1, 1) NOT NULL,
    [name]  VARCHAR (100) NOT NULL,
    [p_id]  INT           NULL,
    PRIMARY KEY CLUSTERED ([fl_id] ASC)
);


GO
PRINT N'Creating [dbo].[imagetable]...';


GO
CREATE TABLE [dbo].[imagetable] (
    [img_id] INT           IDENTITY (1, 1) NOT NULL,
    [slides] VARCHAR (150) NOT NULL,
    [p_id]   INT           NULL,
    PRIMARY KEY CLUSTERED ([img_id] ASC)
);


GO
PRINT N'Creating [dbo].[inclusion]...';


GO
CREATE TABLE [dbo].[inclusion] (
    [in_id] INT           IDENTITY (1, 1) NOT NULL,
    [name]  VARCHAR (150) NOT NULL,
    [p_id]  INT           NULL,
    PRIMARY KEY CLUSTERED ([in_id] ASC)
);


GO
PRINT N'Creating [dbo].[indexslide]...';


GO
CREATE TABLE [dbo].[indexslide] (
    [is_id]  INT           IDENTITY (1, 1) NOT NULL,
    [is_img] VARCHAR (150) NULL,
    PRIMARY KEY CLUSTERED ([is_id] ASC)
);


GO
PRINT N'Creating [dbo].[itinerary]...';


GO
CREATE TABLE [dbo].[itinerary] (
    [it_id]       INT           IDENTITY (1, 1) NOT NULL,
    [name]        VARCHAR (100) NOT NULL,
    [description] TEXT          NULL,
    [bmeal]       INT           NULL,
    [lmeal]       INT           NULL,
    [dmeal]       INT           NULL,
    [p_id]        INT           NULL,
    PRIMARY KEY CLUSTERED ([it_id] ASC)
);


GO
PRINT N'Creating [dbo].[photel]...';


GO
CREATE TABLE [dbo].[photel] (
    [ph_id]    INT           IDENTITY (1, 1) NOT NULL,
    [ph_loc]   VARCHAR (100) NULL,
    [ph_phtel] VARCHAR (200) NULL,
    [p_id]     INT           NULL,
    PRIMARY KEY CLUSTERED ([ph_id] ASC)
);


GO
PRINT N'Creating [dbo].[t_package]...';


GO
CREATE TABLE [dbo].[t_package] (
    [p_id]    INT           IDENTITY (1, 1) NOT NULL,
    [p_name]  VARCHAR (100) NOT NULL,
    [p_price] FLOAT (53)    NULL,
    [c_id]    INT           NULL,
    [bedroom] INT           NULL,
    [status]  INT           NULL,
    PRIMARY KEY CLUSTERED ([p_id] ASC)
);


GO
PRINT N'Creating [dbo].[traveldates]...';


GO
CREATE TABLE [dbo].[traveldates] (
    [tdates_id] INT  IDENTITY (1, 1) NOT NULL,
    [dfrom]     DATE NULL,
    [dto]       DATE NULL,
    [p_id]      INT  NULL,
    PRIMARY KEY CLUSTERED ([tdates_id] ASC)
);


GO
PRINT N'Creating [dbo].[visareq]...';


GO
CREATE TABLE [dbo].[visareq] (
    [visa_id] INT           IDENTITY (1, 1) NOT NULL,
    [name]    VARCHAR (150) NULL,
    [p_id]    INT           NULL,
    PRIMARY KEY CLUSTERED ([visa_id] ASC)
);


GO
PRINT N'Creating unnamed constraint on [dbo].[condition]...';


GO
ALTER TABLE [dbo].[condition]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[exclusion]...';


GO
ALTER TABLE [dbo].[exclusion]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[flightdetails]...';


GO
ALTER TABLE [dbo].[flightdetails]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[imagetable]...';


GO
ALTER TABLE [dbo].[imagetable]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[inclusion]...';


GO
ALTER TABLE [dbo].[inclusion]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[itinerary]...';


GO
ALTER TABLE [dbo].[itinerary]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[photel]...';


GO
ALTER TABLE [dbo].[photel]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[t_package]...';


GO
ALTER TABLE [dbo].[t_package]
    ADD FOREIGN KEY ([c_id]) REFERENCES [dbo].[category] ([c_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[t_package]...';


GO
ALTER TABLE [dbo].[t_package]
    ADD FOREIGN KEY ([bedroom]) REFERENCES [dbo].[bedrooms] ([bed_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[traveldates]...';


GO
ALTER TABLE [dbo].[traveldates]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating unnamed constraint on [dbo].[visareq]...';


GO
ALTER TABLE [dbo].[visareq]
    ADD FOREIGN KEY ([p_id]) REFERENCES [dbo].[t_package] ([p_id]);


GO
PRINT N'Creating [dbo].[Condition_insert]...';


GO
create Procedure [dbo].[Condition_insert]
	@terms_conditions ConditionUDT readonly
as
	begin
	insert into dbo.condition (name, p_id)
	select [Name],[PackageId]
	from @terms_conditions;
	end
GO
PRINT N'Creating [dbo].[Exclusion_insert]...';


GO
CREATE Procedure [dbo].[Exclusion_insert]
	@exclusions ExclusionUDT readonly
as 
	begin
	insert into dbo.exclusion (name, p_id)
	select [Name],[PackageId]
	from @exclusions;
	end
GO
PRINT N'Creating [dbo].[FlightDetails_insert]...';


GO
CREATE Procedure [dbo].[FlightDetails_insert]
	@flightDetails FlightDUDT readonly
as
	begin
	insert into dbo.flightdetails (name, p_id)
	select [Name],[PackageId]
	from @flightDetails;
	end
GO
PRINT N'Creating [dbo].[Inclusion_insert]...';


GO
CREATE Procedure [dbo].[Inclusion_insert]
	@inclusions InclusionUDT readonly
as
	begin
	insert into dbo.inclusion (name, p_id)
	select [Name],[PackageId]
	from @inclusions;
	end
GO
PRINT N'Creating [dbo].[Itinerary_insert]...';


GO
CREATE Procedure [dbo].[Itinerary_insert]
	@itinerary MyUDT readonly
	as
	begin
	insert into dbo.itinerary(name, description, bmeal, lmeal, dmeal, p_id)
	select [Name],[Description],[Bmeals],[Lmeals],[Dmeals],[PackageId]
	from @itinerary;
	end
GO
PRINT N'Creating [dbo].[Phtel_insert]...';


GO
CREATE procedure [dbo].[Phtel_insert]
	@phtel photelUDT readonly
as
	begin
	insert into dbo.photel(ph_loc, ph_phtel, p_id)
	select [Ph_loc],[Ph_phtel],[PackageId]
	from @phtel;
	end
GO
PRINT N'Creating [dbo].[TravelDateInsert]...';


GO
CREATE Procedure [dbo].[TravelDateInsert]
	@travelDates DateUDT readonly
as
	begin
	insert into dbo.traveldates(dfrom, dto, p_id)
	select [DFrom],[DTo],[PackageId]
	from @travelDates;
end
GO
PRINT N'Creating [dbo].[VisaReq_insert]...';


GO
CREATE Procedure [dbo].[VisaReq_insert]
	@visareq VisaReqUDT readonly
as
	begin
	insert into dbo.visareq (name, p_id)
	select [Name],[PackageId]
	from @visareq;
	end
GO
DECLARE @VarDecimalSupported AS BIT;

SELECT @VarDecimalSupported = 0;

IF ((ServerProperty(N'EngineEdition') = 3)
    AND (((@@microsoftversion / power(2, 24) = 9)
          AND (@@microsoftversion & 0xffff >= 3024))
         OR ((@@microsoftversion / power(2, 24) = 10)
             AND (@@microsoftversion & 0xffff >= 1600))))
    SELECT @VarDecimalSupported = 1;

IF (@VarDecimalSupported > 0)
    BEGIN
        EXECUTE sp_db_vardecimal_storage_format N'$(DatabaseName)', 'ON';
    END


GO
PRINT N'Update complete.';


GO
