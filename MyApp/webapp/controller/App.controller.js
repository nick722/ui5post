sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller) {
        Controller.extend("opensap.myapp.controller.App", {
            onSave: function () {
                var oInput = {
                    FirstName: this.getView().byId("FirstName").getValue(),
                    LastName: this.getView().byId("LastName").getValue()
                };
                var oModel = new sap.ui.model.odata.v2.ODataModel("https://cors-anywhere.herokuapp.com/http://services.odata.org/V3/Northwind/Northwind.svc");
                oModel.create("/Person", oInput, {
                    method: "POST"
                });
            },
        });
    });