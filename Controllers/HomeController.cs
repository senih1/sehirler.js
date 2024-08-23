using Microsoft.AspNetCore.Mvc;
using sehirler.Models;
using System.Diagnostics;

namespace sehirler.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
