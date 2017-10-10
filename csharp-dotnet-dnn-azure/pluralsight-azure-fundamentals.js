/*
Pluralsight - Microsoft Azure Fundamentals
Friday, October 6, 2017

https://app.pluralsight.com/library/courses/azure-fundamentals/table-of-contents 

Introducing Windows Azure

Windows Azure Platform = Windows Azure, SQL Azure, and Windows Azure AppFabric

---

Why Cloud Computing?

cloud computing - virtualized computing platform that provides infinite resources for running your applications

Cloud computing leverages economies of scale to save you money by only requiring you to pay for what you use. ("metered access" with virtual instances)

Platform Continuum - helps us eliminate risk. We won't over- or under-provision.

Pay for use instead of provisioning for the peak amount

Three Aspects Are New
1) Infinite computing resources available on demand
2) No up-front commitment by cloud users
3) Only pay for what you use; short-term billing

---

Windows Azure Platform
Microsoft's solution for building and deploying applications in the cloud

Windows Azure
-Compute
-Management
-Storage

-Flexible application hosting
-Lights-out service management
-Provide code & service model, hit ENTER
-Storage at massive scale

---

Microsoft SQL Azure:
Reporting
Business Analytics
Data Sync
The above 3 are on top of the database

Relational db as a service
Highly available, automatically maintained
Extension of the SQL Server Data Platform

---

Windows Azure AppFabric:
Service Bus
	Secure connections between services
	Across organizational boundaries
Claims-based Access Control

Data Market: Information Services
Content brokerage and discovery platform

---

Lap around the Platform;
Windows Azure
	Compute
	Management
	Storage

Application Hosting
	Flexible service architectures
	Support for standard languages (Full Trust)
	Service healing
		a means to detect health of virtual machines running on the platform and to perform auto-recovery of those virtual machines, should they ever fail
		a means of “healing” your service instance

Storage
	Blobs, tables, queues
	Drives
		use standard file system APIS
	Designed for the cloud
		easy access over HTTP from anywhere
		durable
		massive scale

VHD - Virtual Hard Drive

Professional Developers Conf. (PDC) 2010 Announcements
	Programming model
		elevated privileges in web/worker roles
		full Internet Information Services (IIS) - can run multiple websites and admin support
			Internet Information Services (IIS, formerly Internet Information Server) is an extensible web server created by Microsoft for use with the Windows NT family. IIS supports HTTP, HTTPS, FTP, FTPS, SMTP and NNTP.
		can deploy pre-configured virtual machine (VM) images
			still obtain benefits of Windows Azure (WA) service model
	Service mgmt
		remote terminal server access to VMs

Demo: Windows Azure
	he's using Visual Studio 2010
	he has Windows Azure SDK installed
		A software development kit (SDK or devkit) is typically a set of software development tools that allows the creation of applications for a certain software package, software framework, hardware platform, computer system, video game console, operating system, or similar development platform. 

---

Windows Azure AppFabric:
SOAP - Simple Object Access Protocol
REST - Representational State Transfer
Unless you have a definitive reason to use SOAP, use REST

Representational state transfer (REST), or RESTful web services - a way of providing interoperability between computer systems on the Internet

Windows Azure Architecture and Tools
Windows Azure Architecture

---

Developing for Windows Azure:
Windows Azure SDK
	Installs developer fabric - local platform for development
	Command line SDK tools for local packaging and deployment

Developer Fabric
	Runs as an executable
	Can start automatically when debugging in VS (much like web server)
	Provides local versions of storage services (blobs, tables, queues)
	Allows hosting multiple instances of roles w/a load balancer

Visual Studio Tools
	Project wizard for cloud development
	Integrated UI for configuring roles
	Automated execution locally and packaging for remote deployment
-Separate download
	Includes Windows Azure SDK
-Project templates automate creation of role projects/config
	Enables configuration of existing projects as roles
-Integrated w/developer fabric
	F5 debugging
	Automatic startup of services
-Cloud project becomes your startup project
	Causes all web and worker roles to execute in the fabric
	Alternately, execute other applications as startup w/o fabric

---

Microsoft Visual Studio is an integrated development environment from Microsoft. 
It is used to develop computer programs for Microsoft Windows, as well as web sites, web apps, web services and mobile apps.

Visual Studio role templates:
Web roles - your web app code
	ASP.NET MVC web role - VS 2010
		The ASP.NET MVC is a web application FRAMEWORK developed by Microsoft that implements the model–view–controller pattern.
	ASP.NET Web Forms web role
		ASP.NET Web Forms lets you build dynamic websites using a drag-and-drop, event-driven model. A design surface and hundreds of controls and components let you build UI-driven sites with data access.
	WCF Service web role
		-The Windows Communication Foundation, previously known as Indigo, is a RUNTIME and a set of APIs in the .NET Framework for building connected, service-oriented applications.
		-RUNTIME is a general term that refers to any library, framework, or platform that your code runs on. The C and C++ runtimes are collections of functions.
	FAST CGI web role
		-FastCGI is a binary protocol for interfacing interactive programs with a WEB SERVER.
		-A WEB SERVER is a computer system that processes requests via HTTP, the basic network protocol used to distribute information on the World Wide Web.
Worker roles - background processing code
	C# or VB worker role
	F# worker role - VS 2010

---

Configuration of Roles:
Cloud service definition (csdef)
	Identifies roles
	Configuration of endpoints (HTTP, etc.)
	Definition of role configuration properties
	Partial/full (including native) trust
Cloud service configuration (cscfg)
	Specifiy # of instances
	Specific values for config settings
Properties for cloud service project
	Choose whether storage service starts when app starts

developer fabric - resources with memory; part of environment settings.
Helpful if you have multiple websites on one server.

---

Windows Azure Libraries:
Microsoft.WindowsAzure.RuntimeServices namespace
RoleEnvironment
	Access to roles, instances, endpoints, config values
	Events for changes, status check, shutdown
Microsoft.WindowsAzure.Diagnostics namespace
	Diagnostics collection - performance counters, event log, trace, etc.
Microsoft.WindowsAzure.CloudStorageClient
	Provides wrapper classes for interacting w/storage subsystems
	REST API abstracted behind .NET classes

*/







