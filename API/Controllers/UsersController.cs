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
    private readonly IMapper _mapper;

    public UsersController(IUserRepository userRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }
    [AllowAnonymous]
    [HttpGet]
   public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        var users = await _userRepository.GetUsersAsync();

        var userToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

        if (users == null) return NotFound();
        return Ok(userToReturn);

    }
    [AllowAnonymous]
    [HttpGet("{id:int}")]
   public async Task<ActionResult<IEnumerable<MemberDto>>> GetUser(int id)
    {
        var users = await _userRepository.GetUserByIdAsync(id);

        var userToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

        if (userToReturn == null) return NotFound();
        return Ok(userToReturn);

    }
}
