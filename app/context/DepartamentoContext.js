/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.DepartamentoContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "departamentoOpened");
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
     * Notified interested objects that a una option Departamento is being opened.
     */

    departamentoOpened: function(departamento) {
        /**
         * @event optionOpened option Departamento opened.
         * @param {sglm.model.Departamento.Item}.
         */
        return this.fireEvent("departamentoOpened", departamento);
    }
});
