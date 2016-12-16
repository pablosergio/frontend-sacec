/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.PagoContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "pagoOpened", "pagoCreated", "pagoCanceled", "pagoDeleted");
    },
    /**
     * Notifies interested objects that initial data has been loaded.
     */

    initialDataLoaded: function() {
        /**
         * @event initialDataLoaded Initial data loaded.
         */
        return this.fireEvent("initialDataLoaded");
    },
    /**
     * Notified interested objects that a una option pago is being opened.
     */

    pagoOpened: function(pago) {
        /**
         * @event pagoOpened option pago opened.
         * @param {sglm.model.pago}.
         */
        return this.fireEvent("pagoOpened", pago);
    },

     pagoCreated: function(pago) {
        /**
         * @event pagoCreated option pago opened.
         * @param {sglm.model.pago}.
         */
        return this.fireEvent("pagoCreated", pago);
    },

     pagoCanceled: function(pago) {
        /**
         * @event pagoCanceled option pago opened.
         * @param {sglm.model.pago}.
         */
        return this.fireEvent("pagoCanceled", pago);
    },

     pagoDeleted: function(pago) {
        /**
         * @event pagoCanceled option pago opened.
         * @param {sglm.model.pago}.
         */
        return this.fireEvent("pagoDeleted", pago);
    }
});
