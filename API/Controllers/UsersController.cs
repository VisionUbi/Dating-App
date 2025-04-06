using API.Data;
using API.Dtos;
using API.Entities;
using API.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController : BaseApiController
{

    private readonly IUserRepository _userRepository;

    public UsersController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    [AllowAnonymous]
    [HttpGet]
   public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        var users = await _userRepository.GetMembersAsync();
         

        if (users == null) return NotFound();
        return Ok(users);

    }

    [AllowAnonymous]
    [HttpGet("{name}")]
    public async Task<ActionResult<MemberDto>> GetUser(string name)
    {
        var user = await _userRepository.GetMemberAsync(name,false);

        if (user == null)
            return NotFound();
         

        return Ok(user);
    }

}
