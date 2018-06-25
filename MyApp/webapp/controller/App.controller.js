sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller) {

        Controller.extend("opensap.myapp.controller.App", {

            onSave: function () {

                console.log('onSave works');
                var oModel = new sap.ui.model.odata.v2.ODataModel("http://services.odata.org/Northwind/Northwind.svc/");

                // var oEntry = {};
                // oEntry.Carrid = "AFO";
                // oEntry.Carrname = "Airforce One";
                // oEntry.Currcode = "USD";
                // oEntry.Url = "www.techippo.com";

                var oData = {
                    ProductId: 999,
                    ProductName: "myProduct"
                }

                oModel.create("/Products", oData, {
                    method: "POST",
                    success: function(data) {
                        console.log('POST request success' + JSON.stringify(data));
                    },
                    error: function() {
                        console.log('POST request error');
                    }
                });
            },
        });
    });