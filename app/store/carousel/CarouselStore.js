/**
 * @author Aymen ABDALLAH <aymen.abdallah@gmail.com>
 * @docauthor Aymen ABDALLAH
 */
Ext.define('sacec.store.carousel.CarouselStore', {
    extend: 'Ext.data.Store',
   	proxy: {
    	type: "memory"
  	},
    autoLoad:true,
    model: 'sacec.model.carousel.Carousel',

    data: [{
			imageSrc:"./resources/images/logo.png",
			title:"Laboratorio de Mediciones Electricas",
			alt: "Sistema de Gestion de Laboratorio de Medidas"
		}, {
			imageSrc:"./resources/images/equipos_mediciones_electricas.jpg",
			title:"Equipos Mediciones",
			alt: "Equipos Mediciones Electricas"
		},{
			imageSrc:"./resources/images/hidroelevador.jpg",
			title:"hidroelevador",
			alt: "Hidroelevador"
		},{
			imageSrc:"./resources/images/banca_medidores.jpg",
			title:"Banca de Calibracion Medidores",
			alt: "Banca de Calibracion Medidores"
		},{
			imageSrc:"./resources/images/medidor_electronico.jpg",
			title:"Medidor Electronico",
			alt: "Medidor Electronico"
		},{
			imageSrc:"./resources/images/registrador_trifasico.jpg",
			title:"Registrador Trifasico",
			alt: "Registrador Trifasico"
		}
	]
});