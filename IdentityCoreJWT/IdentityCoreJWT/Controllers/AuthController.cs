using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IdentityCoreJWT.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace IdentityCoreJWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<IdentityUser> userManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> InsertUser([FromBody] RegisterViewModel register)
        {
            var user = new IdentityUser
            {
                Email = register.Email,
                UserName = register.Email,
                SecurityStamp = Guid.NewGuid().ToString()
            };

            var result = await _userManager.CreateAsync(user, register.Password);
            if (result.Succeeded) {
                await _userManager.AddToRoleAsync(user, "Customer");
                return Ok(new { Username = user.UserName });
            }
            else
            {
                return BadRequest(result.Errors.FirstOrDefault().Description);
            }
        }

        [HttpGet]
        public ActionResult<RegisterViewModel> Get()
        {
            var user = new RegisterViewModel
            {
                Email = "adler@gmail.com",
                Password = "passwd123"
            };

            return user;
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginViewModel login)
        {
            var user = await _userManager.FindByNameAsync(login.Username);
            if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
            {
                var roles = await _userManager.GetRolesAsync(user);
                var claims = roles.Select(role => new Claim(ClaimTypes.Role, role)).ToList();
                
                //To Enable access to Values Controller
                claims.Add(new Claim(ClaimTypes.Role, "Admin"));
                claims.Add(new Claim(ClaimTypes.Role, "GetValues"));
                claims.Add(new Claim(ClaimTypes.Role, "GetValuesById"));

                var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SigninKey"]));

                int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);

                var token = new JwtSecurityToken(
                    issuer: _configuration["Jwt:Site"],
                    audience: _configuration["Jwt:Site"],
                    expires: DateTime.UtcNow.AddMinutes(expiryInMinutes),
                    claims: claims,
                    signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256));

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }
    }
}