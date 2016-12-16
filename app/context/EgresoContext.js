/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.EgresoContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "egresoOpened", "egresoCreated", "egresoCanceled", "egresoDeleted");
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
     * Notified interested objects that a una option egreso is being opened.
     */

    egresoOpened: function(egreso) {
        /**
         * @event egresoOpened option egreso opened.
         * @param {sglm.model.egreso}.
         */
        return this.fireEvent("egresoOpened", egreso);
    },

     egresoCreated: function(egreso) {
        /**
         * @event egresoCreated option egreso opened.
         * @param {sglm.model.egreso}.
         */
        return this.fireEvent("egresoCreated", egreso);
    },

     egresoCanceled: function(egreso) {
        /**
         * @event egresoCanceled option egreso opened.
         * @param {sglm.model.egreso}.
         */
        return this.fireEvent("egresoCanceled", egreso);
    },

     egresoDeleted: function(egreso) {
        /**
         * @event egresoCanceled option egreso opened.
         * @param {sglm.model.egreso}.
         */
        return this.fireEvent("egresoDeleted", egreso);
    }
});
