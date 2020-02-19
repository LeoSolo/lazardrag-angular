using System;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FiltersApp.Filters
{
    public class FiltersApp: Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            throw new NotImplementedException();
        }
    }
}
