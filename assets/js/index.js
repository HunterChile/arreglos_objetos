const propiedadesJSON = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170,
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130,
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80,
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6,
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200,
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500,
  },
];



const botonBuscar = document.querySelector("#btnBuscar");
const propiedadesSection = document.querySelector(".propiedades");
const totalSpan = document.querySelector("#sectionPropiedades span");
const inputCantidadCuartos = document.querySelector("#cantidadCuartos");
const inputMetrosDesde = document.querySelector("#metrosDesde");
const inputMetrosHasta = document.querySelector("#metrosHasta");

mostrarPropiedades(propiedadesJSON, propiedadesSection);
mostrarTotalPropiedades(propiedadesJSON)

botonBuscar.addEventListener("click",() => {
 let cantidadCuartos = inputCantidadCuartos.value;
 let metrosDesde = inputMetrosDesde.value;
 let metrosHasta = inputMetrosHasta.value;

const inputs = {
                cantidadCuartos, 
                metrosDesde, 
                metrosHasta
};

 if(!validarInputs(inputs)) return false; 
 
 const propiedadesFiltradas = filtrarPropiedades(propiedadesJSON, inputs);
mostrarPropiedades(propiedadesFiltradas, propiedadesSection);
mostrarTotalPropiedades(propiedadesFiltradas)
});
 
 function mostrarTotalPropiedades(propiedades) {
  let totalPropiedades = propiedades.length;
  totalSpan.innerHTML= totalPropiedades;
 };

 const validarInputs = inputs => {
  
  for(const input in inputs){
      if (inputs[input].length < 1){
        alert("faltan campos por llenar");
        return false;
      }
 }

 return true;
};

function templatePropiedad(propiedad) {

  const nombre = propiedad.nombre;
  const descripcion = propiedad.descripcion;
  const imagen= propiedad.src;
  const cuartos = propiedad.cuartos;
  const metros = propiedad.metros;

  return `
  <div class="propiedad">
  <div class="img" style="background-image: url('${imagen}')"></div>
  <section>
      <h5>${nombre}</h5>
      <div class="d-flex justify-content-between">
          <p>Cuartos: ${cuartos}</p>
          <p>Metros: ${metros}</p>
      </div>
      <p class="my-3">${descripcion}</p>
      <button class="btn btn-info ">Ver más</button>
  </section>
</div>
</div>
`;
};



function mostrarPropiedades(propiedades, contenedor){
  let html = "";
  for(const propiedad of propiedades){
    html += templatePropiedad(propiedad);

  }
  contenedor.innerHTML = html;


}


const filtrarPropiedades = (propiedades, inputs) => {
  let propiedadesFiltradas =[];
  let indexPropiedadFiltrada=0;

  for(let i=0; i < propiedades.length; i++) {
    if(
      propiedades[i].cuartos == inputs.cantidadCuartos &&
      propiedades[i].metros >= inputs.metrosDesde &&
      propiedades[i].metros <= inputs.metrosHasta

    ){
      propiedadesFiltradas[indexPropiedadFiltrada] = propiedad[i];
      indexPropiedadFiltrada++;
    }
  }
  return propiedadesFiltradas;

}











