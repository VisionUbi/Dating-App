using API.Dtos;
using API.Entities;
using API.Interface;

namespace API.Data
{
    public class UserRepository(DataContext context) : IUserRepository
    {
        public async Task<MemberDto?> GetMemberAsync(string username, bool isCurrentUser)
        {
            throw new NotImplementedException();
        }

        public async Task<AppUser?> GetUserByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<AppUser?> GetUserByPhotoId(int photoId)
        {
            throw new NotImplementedException();
        }

        public Task<AppUser?> GetUserByUsernameAsync(string username)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveAllAsync()
        {
            throw new NotImplementedException();
        }

        public void Update(AppUser user)
        {
            throw new NotImplementedException();
        }
    }
}
