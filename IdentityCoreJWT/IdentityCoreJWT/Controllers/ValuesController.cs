using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityCoreJWT.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Authorize(Roles = "GetValues")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{elements}")]
        [Authorize(Roles = "GetValuesById")]
        public ActionResult<IEnumerable<string>> Get(int elements)
        {
            List<string> listString = new List<string>();
            for (int i = 0; i < elements; i++)
            {
                listString.Add($"Element {i.ToString()}");
            }
            return listString;
        }
    }
}
