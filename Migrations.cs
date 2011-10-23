using System;
using System.Collections.Generic;
using System.Data;
using Orchard.ContentManagement.Drivers;
using Orchard.ContentManagement.MetaData;
using Orchard.ContentManagement.MetaData.Builders;
using Orchard.Core.Contents.Extensions;
using Orchard.Data.Migration;
using Orchard.Environment.Extensions;
using Piedone.Models.ConfirmLeave;

namespace Piedone.ConfirmLeave.Migrations
{
    [OrchardFeature("Piedone.ConfirmLeave")]
    public class Migrations : DataMigrationImpl
    {
        public int Create()
        {
            ContentDefinitionManager.AlterPartDefinition(typeof(ConfirmLeavePart).Name,
                builder => builder.Attachable());


            return 1;
        }
    }
}