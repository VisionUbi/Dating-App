using API.Controllers.Dtos;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    public class AccountController(DataContext context) : BaseApiController
    {
        [HttpPost("register")]
        public async Task<ActionResult<AppUser>> Register(UserRegistrationDto input)
        {
            var userExists = await UserExists(input.UserName);
            if (userExists) 
            {
                return BadRequest("UserName is already Taken"); 
            }
            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = input.UserName.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(input.Password)),
                PasswordSalt = hmac.Key
            };

            context.Users.Add(user);
            await context.SaveChangesAsync();

            return Ok(user);
        }
        private async Task<bool> UserExists(string userName)
        {
            return await context.Users.AnyAsync(x => x.UserName.ToLower() == userName.ToLower());
        }
    }
}
