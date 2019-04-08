using Newtonsoft.Json;

namespace AngularASPNETCore2WebApiAuth.Models
{
    internal class FacebookPicture
    {
        public int Height { get; set; }

        public int Width { get; set; }

        [JsonProperty("is_silhouette")]
        public bool IsSilhouette { get; set; }

        public string Url { get; set; }
    }
}
