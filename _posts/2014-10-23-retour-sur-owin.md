---
title: Retour sur OWIN
date: 2014-10-23 00:00:00 Z
categories:
- aspnet-vnext
layout: post
---

Retour sur OWIN
---------------

Pour ceux qui n'ont pas encore eu l'occasion de suivre l'évolution du projet, [OWIN] (Open Web Interface for .NET) est un middleware (essentiellement, se situe entre le serveur web ([IIS], [Kestrel], [nginx], [apache] et autres) et votre application. Son role est donc d'exposer de façon standard les requêtes et réponses.

Pourquoi ?
----------

En fait, OWIN a pour source entres autres les framework [Rack] (de ruby) et [WSGI] (de python). Le but était à l'origine de faire une séparation entre IIS et l'application afin de permettre que l'évolution du framework MVC et du serveur web IIS se fasse de façon indépendante l'un de l'autre (puisque MVC était très limité par la lenteur des releases de IIS, qui viennent avec Windows). 

Owin offre en outre une façon plus aisé et flexible (et surtout testable) d'exposer des modules au sein de l'application. Il est à noter également que à partir de vNext Owin étant le centre de l'application, `System.Web` ne seras plus chargé à chaque requête. L'effet direct est une performance théorique accrue (par un facteur de 10 selon les benchmarks de Microsoft) et une consommation de mémoire énormément réduite ([de 96% environs]).

Utilisation
-----------

OWIN remplace la classe Global à terme. Par convention, OWIN cherche pour une classe nommée Startup (dans n'importe quel namespace).

Un exemple simple ressemblerait à ceci, pour chaque requête peu importe son contenu, répondre "Hello World":

``` csharp
using Microsoft.AspNet.Builder; // pour IApplicationBuilder
using Microsoft.AspNet.Http; // Pour la méthode d'extension app.Run()

namespace Builder.HelloWorld.Web
{
    // Marque la classe comme étant le point de départ
    public class Startup
    {
        // appelé lors du démarrage de l'application
        public void Configure(IApplicationBuilder app)
        {
            // déclaration d'une lambda appelée pour chaque requête
            app.Run(async context =>
            {
                context.Response.ContentType = "text/plain";
                await context.Response.WriteAsync("Hello world");
            });
        }
    }
}
```

Pas plus compliqué que ça. Ces quelques lignes peuvent suffire à écrire une application (basique) en utilisant owin.

Utilisation simple au sein de MVC
---------------------------------

``` csharp
using Microsoft.AspNet.Builder; // pour IApplicationBuilder
using Microsoft.Framework.DependencyInjection; // pour l'injection de dépendances

namespace TagHelperSample.Web
{
    // Marque la classe comme étant le point de départ
    public class Startup
    {
        // appelé lors du démarrage de l'application
        public void Configure(IApplicationBuilder app)
        {
            // configure les services d'injections de dépendances 
            // pour utiliser et injecter Mvc
            app.UseServices(services => services.AddMvc());
            
            // configure le module MVC avec les routes par défaut
            app.UseMvc();
        }
    }
}
```
Puisque la nouvelle tangente de l'équipe asp.net était de moderniser les techniques de développement, MVC fonctionne maintenant par IOC (Inversion de Contrôle) et se fait injecter au sein du système maintenant. Double avantage lié au contrôle mais également par le fait que ça permets de remplacer MVC très aisément par [NancyFX] par exemple. Il est aussi possible de rouler MVC et NancyFX en parallèle d'ailleurs

``` csharp
namespace MyApplication
{
    using Microsoft.AspNet.Builder;
    using Nancy.Owin;
 
    public class Startup
    {
        public void Configure(IBuilder app)
        {
            app.UseOwin(x => x.UseNancy());
        }
    }
}
```

Plus de d'information
---------------------

[Introducing ASP.Net Project Helios] *(en)*  
[Future of .Net on the server] *(en)*  
[Deep Dive the future of .NET on the server] *(en)*  

[OWIN]: http://owin.org/
[Kestrel]: https://github.com/aspnet/KestrelHttpServer
[nginx]: http://nginx.org/
[apache]: http://apache.org/
[IIS]: http://iis.net/
[Rack]: http://rack.github.io/
[WSGI]: https://docs.python.org/2/library/wsgiref.html
[NancyFX]: http://nancyfx.org/
[de 96% environs]: http://blogs.msdn.com/b/webdev/archive/2014/02/18/introducing-asp-net-project-helios.aspx
[Introducing ASP.Net Project Helios]: http://blogs.msdn.com/b/webdev/archive/2014/02/18/introducing-asp-net-project-helios.aspx
[Future of .Net on the server]: http://channel9.msdn.com/Events/TechEd/NorthAmerica/2014/DEV-B385
[Deep Dive the future of .NET on the server]: http://channel9.msdn.com/Events/TechEd/NorthAmerica/2014/DEV-B411
