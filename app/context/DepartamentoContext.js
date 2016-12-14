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
       return this.addEvents("initialDataLoaded", "departamentoOpened", "departamentoCreated", "departamentoCanceled", "departamentoDeleted");
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
     * Notified interested objects that a una option departamento is being opened.
     */

    departamentoOpened: function(departamento) {
        /**
         * @event departamentoOpened option departamento opened.
         * @param {sglm.model.departamento}.
         */
       return this.fireEvent("departamentoOpened", departamento);
    },

     departamentoCreated: function(departamento) {
        /**
         * @event departamentoCreated option departamento opened.
         * @param {sglm.model.departamento}.
         */
       return this.fireEvent("departamentoCreated", departamento);
    },

     departamentoCanceled: function(departamento) {
        /**
         * @event departamentoCanceled option departamento opened.
         * @param {sglm.model.departamento}.
         */
       return this.fireEvent("departamentoCanceled", departamento);
    },

     departamentoDeleted: function(departamento) {
        /**
         * @event departamentoCanceled option departamento opened.
         * @param {sglm.model.departamento}.
         */
       return this.fireEvent("departamentoDeleted", departamento);
    }
});
