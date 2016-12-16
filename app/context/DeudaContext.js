/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.DeudaContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "deudaOpened", "deudaCreated", "deudaCanceled", "deudaDeleted");
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
     * Notified interested objects that a una option deuda is being opened.
     */

    deudaOpened: function(deuda) {
        /**
         * @event deudaOpened option deuda opened.
         * @param {sglm.model.deuda}.
         */
        return this.fireEvent("deudaOpened", deuda);
    },

     deudaCreated: function(deuda) {
        /**
         * @event deudaCreated option deuda opened.
         * @param {sglm.model.deuda}.
         */
        return this.fireEvent("deudaCreated", deuda);
    },

     deudaCanceled: function(deuda) {
        /**
         * @event deudaCanceled option deuda opened.
         * @param {sglm.model.deuda}.
         */
        return this.fireEvent("deudaCanceled", deuda);
    },

     deudaDeleted: function(deuda) {
        /**
         * @event deudaCanceled option deuda opened.
         * @param {sglm.model.deuda}.
         */
        return this.fireEvent("deudaDeleted", deuda);
    }
});
