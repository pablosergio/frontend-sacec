/**
 * Created by Sergio on 11/12/2016.
 */

Ext.define("sacec.context.ModeloDepartamentoContext", {
    extend: "sacec.context.AbstractContext",
    /**
     * Constructor.
     */

    constructor: function(config) {
        if (config == null) {
            config = {};
        }
        this.callParent(arguments);
        return this.addEvents("initialDataLoaded", "modeloDepartamentoOpened");
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
     * Notified interested objects that a una option ModeloDepartamento is being opened.
     */

    modeloDepartamentoOpened: function(modeloDepartamento) {
        /**
         * @event optionOpened option ModeloDepartamento opened.
         * @param {sglm.model.ModeloDepartamento.Item}.
         */
        return this.fireEvent("modeloDepartamentoOpened", modeloDepartamento);
    }
});
