using Newtonsoft.Json;

namespace AngularASPNETCore2WebApiAuth.Models
{
    internal class FacebookAppAccessToken
    {
        [JsonProperty("token_type")]
        public string TokenType { get; set; }

        [JsonProperty("access_token")]
        public string AccessToken { get; set; }
    }
}
