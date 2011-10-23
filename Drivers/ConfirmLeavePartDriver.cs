using Orchard.ContentManagement;
using Orchard.ContentManagement.Drivers;
using Orchard.Environment.Extensions;
using Piedone.Models.ConfirmLeave;

namespace Piedone.ConfirmLeav.Drivers
{
    [OrchardFeature("Piedone.ConfirmLeave")]
    public class ConfirmLeavePartDriver : ContentPartDriver<ConfirmLeavePart>
    {
        // GET
        protected override DriverResult Editor(ConfirmLeavePart part, dynamic shapeHelper)
        {
            return ContentShape("Parts_ConfirmLeave_Edit",
                () => shapeHelper.EditorTemplate(
                    TemplateName: "Parts/ConfirmLeave",
                    Model: part,
                    Prefix: Prefix));
        }
    }
}