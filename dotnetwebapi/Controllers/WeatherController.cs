using Microsoft.AspNetCore.Mvc;

namespace dotnetwebapi.Controllers;
[Controller]
public class WeatherController : Controller
{
    private readonly ILogger<WeatherController> _logger;

    public WeatherController(ILogger<WeatherController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public void GetItems()
    {
        
    }
}
