/*

Pluralsight - DotNetNuke (DNN)

https://app.pluralsight.com/player?course=dotnetnuke-fundamentals&author=charles-nurse&name=dotnetnuke-fundamentals-m1-intro&clip=1&mode=live

DNN is a web application framework first released Dec. 2002.
It's NOT a vertical web application that does one job, like Twitter, Facebook or Wordpress.
DNN's a horizontal web platform.

What's DNN for?

DNN's for rapid deployment of modular web applications for businesses that use the Microsoft Windows platform.

Lets you create:
-personal blog site
-e-commerce site
-basic marketing site
-social community site

Built on Microsoft's ASP.NET framework

---

What is DNN (diagram: read bottom to top)

DNN: Content Pages (in a site). Modules (apps on content pages).
DNN: Site 1, Site 2...Site N
DNN: Web Application Framework
Off to the side: Microsoft SQL Server Database. Interacts w/Web Application Framework.

Windows: ASP.NET Framework
Windows: IIS (Internet Information Service - Web Server)
Windows: Microsoft Windows Server

---

What is DNN (diagram: read bottom to top)

Custom login providers. Language packs.
3rd-party modules and skins. Custom extensions.
Text/HTML Module. Google Analytics, Taxonomy, Localization, Personalization, File Management, etc.
DotNetNuke Core

---

Many orgs use DNN, such as the UN, NASA, and Nokia
Nearly 1 million registered users
Over 7 million downloads all time

---

What sets DNN apart:

Modules (Blog, Store, RSS feed..)
Skins and Containers (any color, any layout, any market)
Authentication Systems (Facebook, Twitter, Windows Live, AD)
Language Packs (over 40 languages)
Skin Objects (Login Control, Breadcrumb...)
Control Panels
Dashboard Controls
Library
Providers
Widgets

---

Major Features

https://app.pluralsight.com/player?course=dotnetnuke-fundamentals&author=charles-nurse&name=dotnetnuke-fundamentals-m3-tour&clip=0&mode=live

User Personas:
-Host User - can do anything
-Administrator User - can do anything in a single site
-Registered User - can't change the site at all

---

The User's Experience

https://app.pluralsight.com/player?course=dotnetnuke-fundamentals&author=charles-nurse&name=dotnetnuke-fundamentals-m3-tour&clip=2&mode=live

-registering
-logging in 
-profile
-activity feed
-friends and followers
-message center
-notifications

---

General Admin

-In Context Administration
-Control Bar:
	-Host v Admin
	-Tools
	-Help
-DNN's 3 modes:
	-View
	-Edit
	-Display
-Module Action menus

---

Most Common Functions a Site Admin Needs

Managing Pages and Content:
-Page Management:
	-Adding a page
	-Editing the current page
	-Deleting a page
-Managing Content:
	-Adding a new module to a page
	-Editing a module's settings
	-Deleting a module
	-Sharing content between pages

---

Extending DNN: Extension Types

https://app.pluralsight.com/player?course=dotnetnuke-fundamentals&author=charles-nurse&name=dotnetnuke-fundamentals-m4-extensions&clip=0&mode=live

Extensions are managed at the host level.

---

Creating a DNN Module

https://app.pluralsight.com/player?course=dotnetnuke-fundamentals&author=charles-nurse&name=dotnetnuke-fundamentals-m5-create&clip=0&mode=live

-IModuleControl Interface
-Base Classes:
	-PortalModuleBase
	-CachedModuleControl
	-ModuleUserControlBase
	-ModuleControlBase
	-RazorHostControl
-Create 1 "Hello World" Module using the DNN UI & 1 using a Developer IDE
-Going beyond Hello World:
	-The DNN API
	-Data Persistence

IModuleControlInterface: */

public interface IModuleControl
	{
		Control Control { get; } // returns the underlying control instance
		string ControlPath { get; } // returns the path to the folder where the control source is located
		string ControlName { get; } // returns the name of the control
		string LocalResourceFile { get; set; } // returns the location of the local resource file, where localized text is stored
		ModuleInstanceContext ModuleContext { get; } // returns a module instance context object which contains info about the module's context
	}

/* Base Classes (DNN ships with 5 classes)

-ModuleUserControlBase class
	-Extends UserControl
-ModuleControlBase class
	-Extends WebControl
-CachedModuleControl class
	-Extends Literal
-RazorHostControl class
	-Extends UserControl
	-Support for cshtml and vbhtml WebPage files
-PortalModuleBase class
	-Extends UserControl
	-Provides a flatter object module

---

Some Module Basics

-Modules live in DesktopModules folder
-1 or 2 folders deep
	-DesktopModules/HTML
	-DesktopModules/Admin/Extensions
-First-level folder can be University Learning Centers
	-DesktopModules/MyCompany/Module1, Module2...ModuleN




*/



































