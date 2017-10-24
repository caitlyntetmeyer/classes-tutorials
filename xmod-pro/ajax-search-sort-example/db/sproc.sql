USE [replace_with_your_database_name]
GO

/****** Object:  StoredProcedure [dbo].[sp_Select_Contacts]    Script Date: 4/22/2015 5:17:57 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Rewrote sproc to do server-side paging and allow searching of archive.
-- Record Count is returned as the column TotalCount in each record.
CREATE PROCEDURE [dbo].[sp_Select_Contacts] 
	  @SortOn int = 3
	, @SortDesc int = 1
	, @Query nvarchar(100) = null
	, @PageSize int = 10
	, @PageNum int = 1
AS
BEGIN

	IF @Query IS NULL
		BEGIN
			SELECT [ContactId], [ContactType], [FirstName], [LastName], 
				[Email], [Gender], [Address1], [City], 
				COUNT(*) OVER () AS TotalCount FROM Contacts
			ORDER BY 
				CASE WHEN @SortOn = 1 AND @SortDesc = 0 THEN ContactId END,
				CASE WHEN @SortOn = 1 AND @SortDesc = 1 THEN ContactId END DESC,
				CASE WHEN @SortOn = 2 AND @SortDesc = 0 THEN ContactType END, 
				CASE WHEN @SortOn = 2 AND @SortDesc = 1 THEN ContactType END DESC, 
				CASE WHEN @SortOn = 3 AND @SortDesc = 0 THEN FirstName END, 
				CASE WHEN @SortOn = 3 AND @SortDesc = 1 THEN FirstName END DESC, 
				CASE WHEN @SortOn = 4 AND @SortDesc = 0 THEN LastName END, 
				CASE WHEN @SortOn = 4 AND @SortDesc = 1 THEN LastName END DESC, 
				CASE WHEN @SortOn = 5 AND @SortDesc = 0 THEN Email END, 
				CASE WHEN @SortOn = 5 AND @SortDesc = 1 THEN Email END DESC, 
				CASE WHEN @SortOn = 6 AND @SortDesc = 0 THEN Gender END, 
				CASE WHEN @SortOn = 6 AND @SortDesc = 1 THEN Gender END DESC, 
				CASE WHEN @SortOn = 7 AND @SortDesc = 0 THEN Address1 END,
				CASE WHEN @SortOn = 7 AND @SortDesc = 1 THEN Address1 END DESC,
				CASE WHEN @SortOn = 8 AND @SortDesc = 0 THEN City END,
				CASE WHEN @SortOn = 8 AND @SortDesc = 1 THEN City END DESC					 
				OFFSET (@PageSize * (@PageNum - 1)) ROWS
			FETCH NEXT @PageSize ROWS ONLY;
		END
	ELSE
		BEGIN
			SELECT [ContactId], [ContactType], [FirstName], [LastName], 
				[Email], [Gender], [Address1], [City], 
				COUNT(*) OVER () AS TotalCount FROM Contacts
			WHERE FirstName LIKE '%' + @Query + '%' 
				OR LastName LIKE '%' + @Query + '%'
				OR Email LIKE '%' + @Query + '%' 
				OR Address1 LIKE '%' + @Query + '%' 
				OR City LIKE '%' + @Query + '%'
			ORDER BY 
				CASE WHEN @SortOn = 1 AND @SortDesc = 0 THEN ContactId END,
				CASE WHEN @SortOn = 1 AND @SortDesc = 1 THEN ContactId END DESC,
				CASE WHEN @SortOn = 2 AND @SortDesc = 0 THEN ContactType END, 
				CASE WHEN @SortOn = 2 AND @SortDesc = 1 THEN ContactType END DESC, 
				CASE WHEN @SortOn = 3 AND @SortDesc = 0 THEN FirstName END, 
				CASE WHEN @SortOn = 3 AND @SortDesc = 1 THEN FirstName END DESC, 
				CASE WHEN @SortOn = 4 AND @SortDesc = 0 THEN LastName END, 
				CASE WHEN @SortOn = 4 AND @SortDesc = 1 THEN LastName END DESC, 
				CASE WHEN @SortOn = 5 AND @SortDesc = 0 THEN Email END, 
				CASE WHEN @SortOn = 5 AND @SortDesc = 1 THEN Email END DESC, 
				CASE WHEN @SortOn = 6 AND @SortDesc = 0 THEN Gender END, 
				CASE WHEN @SortOn = 6 AND @SortDesc = 1 THEN Gender END DESC, 
				CASE WHEN @SortOn = 7 AND @SortDesc = 0 THEN Address1 END,
				CASE WHEN @SortOn = 7 AND @SortDesc = 1 THEN Address1 END DESC,
				CASE WHEN @SortOn = 8 AND @SortDesc = 0 THEN City END,
				CASE WHEN @SortOn = 8 AND @SortDesc = 1 THEN City END DESC					 
				OFFSET (@PageSize * (@PageNum - 1)) ROWS
			FETCH NEXT @PageSize ROWS ONLY;

		END
END
GO

