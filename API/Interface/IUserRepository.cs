using API.Dtos;
using API.Entities;

namespace API.Interface
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync(); 
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser?> GetUserByIdAsync(int id);
        Task<AppUser?> GetUserByUsernameAsync(string username);
        //Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams);
        Task<MemberDto?> GetMemberAsync(string username, bool isCurrentUser);
        Task<AppUser?> GetUserByPhotoId(int photoId);
    }
}
