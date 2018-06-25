sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller) {

        Controller.extend("opensap.myapp.controller.App", {

            onSave: function () {

                console.log('onSave works');
                var oModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/http://services.odata.org/V3/Northwind/Northwind.svc");

                var oData = {
                    ProductId: 2506182051,
                    ProductName: "Piper"
                }

                oModel.create("/Person", oData, {
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