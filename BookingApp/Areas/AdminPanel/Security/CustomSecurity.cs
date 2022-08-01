using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace BookingApp.Areas.AdminPanel.LoginModel
{
    public class CustomSecurity: IPrincipal
    {
        private AccountModel accounts;

        public CustomSecurity(AccountModel account)
        {
            this.accounts = account;
            this.Identity = new GenericIdentity(account.UserName);
        }

        public IIdentity Identity { get; set; }

        public bool IsInRole(string role)
        {
            var roles = role.Split(new char[] { ',' });
            return roles.Any(r => this.accounts.Roles.Contains(r));
        }
    }
}
