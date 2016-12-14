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
        return this.addEvents("initialDataLoaded", "modeloDepartamentoOpened", "modeloDepartamentoCreated", "modeloDepartamentoCanceled", "modeloDepartamentoDeleted");
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
     * Notified interested objects that a una option modeloDepartamento is being opened.
     */

    modeloDepartamentoOpened: function(modeloDepartamento) {
        /**
         * @event modeloDepartamentoOpened option modeloDepartamento opened.
         * @param {sglm.model.modeloDepartamento}.
         */
        return this.fireEvent("modeloDepartamentoOpened", modeloDepartamento);
    },

     modeloDepartamentoCreated: function(modeloDepartamento) {
        /**
         * @event modeloDepartamentoCreated option modeloDepartamento opened.
         * @param {sglm.model.modeloDepartamento}.
         */
        return this.fireEvent("modeloDepartamentoCreated", modeloDepartamento);
    },

     modeloDepartamentoCanceled: function(modeloDepartamento) {
        /**
         * @event modeloDepartamentoCanceled option modeloDepartamento opened.
         * @param {sglm.model.modeloDepartamento}.
         */
        return this.fireEvent("modeloDepartamentoCanceled", modeloDepartamento);
    },

     modeloDepartamentoDeleted: function(modeloDepartamento) {
        /**
         * @event modeloDepartamentoCanceled option modeloDepartamento opened.
         * @param {sglm.model.modeloDepartamento}.
         */
        return this.fireEvent("modeloDepartamentoDeleted", modeloDepartamento);
    }
});
