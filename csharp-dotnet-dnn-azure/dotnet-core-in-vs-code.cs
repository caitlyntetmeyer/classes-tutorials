/*

Using .NET Core in Visual Studio Code

https://code.visualstudio.com/docs/other/dotnet

.NET Core gives you a blazing fast and modular platform for creating server applications that run on Windows, Linux and Mac. Use Visual Studio Code with the C# extension to get a powerful editing experience with full support for C# IntelliSense (smart code completion) and debugging.

Getting Started:
Install .NET Core.
Install the C# extension from the VS Code Marketplace.

If you'd like to get started with a simple "Hello World" program on .NET Core, follow the steps below:

1) Initialize a C# project:
-Open the command prompt (or terminal).
-Navigate to the folder where you'd like to create the C# project.
-Type "dotnet new console".
-This creates a Program.cs file in your folder with a simple "Hello World" program already written.

2) Resolve the build assets by typing "dotnet restore":

*Tip: .NET Core Tools are now MSBuild-based. This means a .csproj project file will be created instead of a project.json.

-Running "restore" pulls down the required packages declared in the project.json file.
-You'll see a new "project.lock.json" file in your project folder.
-This file contains information about your project's dependencies to make subsequent restores quicker.

3) When the project folder is first opened in VS Code, a notification will appear at the top of the window asking if you'd like to add the required assets to build and debug your project. Select "Yes".

4) Run the "Hello World" program by typing "dotnet run" in the command prompt (or terminal).

Watch a video tutorial for further setup help on macOS: https://channel9.msdn.com/Blogs/dotnet/Get-started-VSCode-NET-Core-Mac.

Tip: Continue exploring C# development: Debug with VS Code and .NET Core (https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code#debug)

Next Steps:

Basic Editing - Learn about the powerful VS Code editor.
    https://code.visualstudio.com/docs/editor/codebasics
Code Navigation - Move quickly through your source code.
    https://code.visualstudio.com/docs/editor/editingevolved 
Working with C# - Learn about the great C# support you'll have when working on your .NET Core application.
    https://code.visualstudio.com/docs/languages/csharp 
Tasks - Running tasks with Gulp, Grunt and Jake. Showing Errors and Warnings
    https://code.visualstudio.com/docs/editor/tasks 
.NET Core Docs - Visit the .NET Core docs for more information on this powerful cross-platform development solution.
    https://docs.microsoft.com/en-us/dotnet/core/ 

*/