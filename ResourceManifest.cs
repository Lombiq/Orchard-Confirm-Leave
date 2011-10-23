using Orchard.Environment.Extensions;
using Orchard.UI.Resources;

namespace Piedone.ConfirmLeave
{
    [OrchardFeature("Piedone.ConfirmLeave")]
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder)
        {
            var manifest = builder.Add();
            manifest.DefineScript("ConfirmLeave").SetUrl("ConfirmLeave.js").SetDependencies("jQuery");
        }
    }
}
