sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ], function (Controller, MessageToast) {

        Controller.extend("opensap.myapp.controller.App", {
            onShowHello: function () {
                MessageToast.show("Hello openSAP!");
            },

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
                /*
                $.ajax({
                    type: "POST",
                    data: "POST CONTENT DATA",
                    crossDomain: true,
                    url: "http://mydomain.coim/service/endpooint",
                headers: {'key1':'value1','key2':'value2'},
                contentType: "application/json",
                    success: function (res, status, xhr) {
                    //success code
                        console.log("SUCCESS!");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("POST request error: " + textStatus + errorThrown);
                }
            });
            */

                /*/////////////////////////////////////
                var fnSuccess = function () {
                    // this._setBusy(false);
                    MessageToast.show(this._getText("changesSentMessage"));
                    this._setUIChanges(false);
                }.bind(this);

                var fnError = function (oError) {
                    // this._setBusy(false);
                    this._setUIChanges(false);
                    MessageBox.error(oError.message);
                }.bind(this);

                // this._setBusy(true); // Lock UI until submitBatch is resolved.
                console.log('this.getView()>>>', this.getView());
                this.getView().getModel().submitBatch("peopleGroup").then(fnSuccess, fnError);
                this._bTechnicalErrors = false; // If there were technical errors, a new save resets them.
                */
            },

            // _setBusy : function (bIsBusy) {
            //     var oModel = this.getView().getModel("appView");
            //     oModel.setProperty("/busy", bIsBusy);
            // }
        });
    });