using API.Entities;
using API.Interface;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Services
{
    public class TokenService(IConfiguration config) : ITokenService
    {
        public string CreateToken(AppUser user)
        {
            var tokenKey = config["TokenKey"] ?? throw new Exception("Can not access token key from appsettings");
            if(tokenKey.Length < 64)  throw new Exception("Token Cannot be less than 64 characters");
            //Security key use for Encryption decryption like if 
            //Symetric is the way use one way for both encryption decryption
            //Asemtric use public key and private key and it have different ways for both encryption and decryption 
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));


            //Claims are like what we want to add in our token to validate the claims for now we are using userName as Claim
            var claims = new List<Claim>
            {
                new (ClaimTypes.NameIdentifier,user.UserName)
            };
                
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDecriptor = new SecurityTokenDescriptor
            {
                //Here we passed the CLaims
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = cred
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDecriptor);


            return tokenHandler.WriteToken(token);
        }
    }
}
