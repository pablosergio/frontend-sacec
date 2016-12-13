/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.PropietarioContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "propietarioOpened", "propietarioCreated", "propietarioCanceled");
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
     * Notified interested objects that a una option Propietario is being opened.
     */

    propietarioOpened: function(propietario) {
        /**
         * @event propietarioOpened option Propietario opened.
         * @param {sglm.model.Propietario}.
         */
        return this.fireEvent("propietarioOpened", propietario);
    },

     propietarioCreated: function(propietario) {
        /**
         * @event propietarioCreated option Propietario opened.
         * @param {sglm.model.Propietario}.
         */
        return this.fireEvent("propietarioCreated", propietario);
    },

     propietarioCanceled: function(propietario) {
        /**
         * @event propietarioCanceled option Propietario opened.
         * @param {sglm.model.Propietario}.
         */
        return this.fireEvent("propietarioCanceled", propietario);
    }
});
