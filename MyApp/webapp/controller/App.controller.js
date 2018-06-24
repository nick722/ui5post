sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller) {

        Controller.extend("opensap.myapp.controller.App", {

            onSave: function () {

                $.ajax({
                    type: "POST",

                    url: 'proxy/http/services.odata.org/V3/(S(javsoqela2hqsduwyhasapr2))/OData/OData.svc/Products',
                    dataType: "json",
                    // data: JSON.stringify(oEntry),
                    data: "POST CONTENT DATA",
                    contentType: "application/json" ,
                    success: function() {
                        sap.m.MessageToast.show("Product Added Successfully");
                        oCreateDialog.close();
                        sap.ui.getCore().byId("table").getModel().refresh(true);

                    },

                    error: function() {
                        new sap.m.MessageToast.show("Error while adding the product");
                    }
                });
            },
        });
    });