using System.ComponentModel.DataAnnotations;

namespace API.Controllers.Dtos
{
    public class UserRegistrationDto
    {
        [Required]
        [MaxLength(100)]
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
