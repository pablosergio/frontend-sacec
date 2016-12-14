/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.EstructuraTarifariaContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
       return this.addEvents("initialDataLoaded", "estructuraTarifariaOpened", "estructuraTarifariaCreated", "estructuraTarifariaCanceled", "estructuraTarifariaDeleted");
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
     * Notified interested objects that a una option estructuraTarifaria is being opened.
     */

    estructuraTarifariaOpened: function(estructuraTarifaria) {
        /**
         * @event estructuraTarifariaOpened option estructuraTarifaria opened.
         * @param {sglm.model.estructuraTarifaria}.
         */
       return this.fireEvent("estructuraTarifariaOpened", estructuraTarifaria);
    },

     estructuraTarifariaCreated: function(estructuraTarifaria) {
        /**
         * @event estructuraTarifariaCreated option estructuraTarifaria opened.
         * @param {sglm.model.estructuraTarifaria}.
         */
       return this.fireEvent("estructuraTarifariaCreated", estructuraTarifaria);
    },

     estructuraTarifariaCanceled: function(estructuraTarifaria) {
        /**
         * @event estructuraTarifariaCanceled option estructuraTarifaria opened.
         * @param {sglm.model.estructuraTarifaria}.
         */
       return this.fireEvent("estructuraTarifariaCanceled", estructuraTarifaria);
    },

     estructuraTarifariaDeleted: function(estructuraTarifaria) {
        /**
         * @event estructuraTarifariaCanceled option estructuraTarifaria opened.
         * @param {sglm.model.estructuraTarifaria}.
         */
       return this.fireEvent("estructuraTarifariaDeleted", estructuraTarifaria);
    }
});
