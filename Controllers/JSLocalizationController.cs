using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Orchard.Localization;
using Orchard.Environment.Extensions;

namespace Piedone.ConfirmLeave.Controllers
{
    [OrchardFeature("Piedone.ConfirmLeave")]
    public class JSLocalizationController : Controller
    {
        public Localizer T { get; set; }

        public JSLocalizationController()
        {
            T = NullLocalizer.Instance;
        }

        public ActionResult Index()
        {
            var localization = new Dictionary<string, string>();
            localization["confirm"] = T("Are you sure you want to leave? Your changes will be lost.").ToString();

            return Json(localization, JsonRequestBehavior.AllowGet);
            //var json = new System.Web.Script.Serialization.JavaScriptSerializer().Serialize(localization);
            //return JavaScript(json);
        }
    }
}
