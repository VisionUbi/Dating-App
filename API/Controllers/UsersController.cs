using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{
   
    private readonly DataContext _context;

    public UsersController(DataContext context)
    {
        _context = context;
    }
    [AllowAnonymous]
    [HttpGet]
   public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
    {
        var users = await _context.Users.ToListAsync();
        if(users == null) return NotFound();
        return Ok(users);

    }
    [AllowAnonymous]
    [HttpGet("{id:int}")]
   public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(int id)
    {
        var users = await _context.Users.FindAsync(id);
        if(users == null) return NotFound();
        return Ok(users);

    }
}
