<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos de gestión de proyectos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En esta unidad introductoria, se inicia el apasionante recorrido por los fundamentos de la gestión de proyectos de #[i software]. El objetivo es sentar bases sólidas para comprender los conceptos y prácticas claves que todo gerente de proyectos debe dominar. A lo largo de estas lecciones, se explorarán temas como el ciclo de vida del proyecto, el rol del gerente y los principios de buenas prácticas en la dirección de proyectos.

        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/1.svg")
            .col-lg
              p.mb-0 La gestión de proyectos es una disciplina crítica en el desarrollo de #[i software], dado que permite planificar, ejecutar y controlar iniciativas complejas para entregar productos de calidad dentro de los plazos y presupuestos establecidos. Un profundo conocimiento de estos fundamentos es esencial para liderar equipos multidisciplinarios de manera efectiva y tomar decisiones informadas en cada etapa del proyecto (Gómez Ruedas, 2014).

        p(data-aos="fade-down") A medida que se avance en esta unidad, se descubre cómo las metodologías ágiles y tradicionales se integran en el ciclo de vida del proyecto, y cómo aplicar buenas prácticas de gestión en contextos reales de la ingeniería de #[i software]. Al finalizar, se espera que se haya adquirido una comprensión integral de los pilares que sustentan la gestión exitosa de proyectos de #[i software].

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/5.png", data-aos="zoom-in")

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Ciclo de vida del proyecto

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/6.png", data-aos="zoom-in")              
      .col-lg-8 
        p(data-aos="fade-down") El ciclo de vida del proyecto es un modelo que describe las etapas por las que atraviesa un proyecto desde su inicio hasta su conclusión. Comprender a fondo este concepto es fundamental para planificar y gestionar eficazmente las actividades y recursos a lo largo del desarrollo del #[i software].        
        .bg-color-2.p-4.j1(data-aos="fade-left")
          p.mb-0 Según Gómez Ruedas (2014), el ciclo de vida del proyecto generalmente consta de cinco fases: iniciación, planificación, ejecución, monitoreo y control, y cierre. Cada fase tiene objetivos específicos y entregables que impulsan el proyecto hacia adelante. En el contexto del desarrollo de #[i software], estos conceptos se adaptan a metodologías como cascada o ágil.      
    
    h3(data-aos="fade-down") Definición y etapas del ciclo de vida

    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg.mb-3.mb-lg-0 
        p El ciclo de vida del proyecto se define como el conjunto de fases por las que pasa un proyecto desde su concepción hasta su finalización. Estas etapas son secuenciales y tienen una duración y esfuerzo variables dependiendo de la complejidad y naturaleza del proyecto (Gómez Ruedas, 2014).

        h5.mb-0 Las etapas típicas del ciclo de vida, incluyen:
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/7.png")


    .bg-full-width-2.bg-fondo-2.mb-0(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/8.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Iniciación
                p Se define el alcance, se identifican los interesados y se establece el acta de constitución del proyecto.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Planificación
                p Se desarrolla el plan de gestión del proyecto, detallando el cronograma, presupuesto, recursos y riesgos.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Ejecución
                p Se lleva a cabo el trabajo definido en el plan, para crear los entregables del proyecto.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Monitoreo y control
                p Se realiza un seguimiento del progreso, se gestionan los cambios y se asegura la calidad.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Cierre 
                p Se finaliza formalmente el proyecto, se obtiene la aceptación del cliente y se documentan las lecciones aprendidas.                                                                 

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Piense en un proyecto de desarrollo de un aplicativo móvil. Durante la fase de iniciación se definirían los requerimientos principales y se aprobaría el acta de constitución. Luego, en la planificación, se crearía un cronograma detallado y se asignarían los recursos necesarios. En la ejecución se desarrollaría y probaría la aplicación, con un monitoreo continuo del avance. Finalmente, en el cierre se entregaría el producto final al cliente y se documentaría el proyecto, capturando lecciones aprendidas.    

    h3(data-aos="fade-down") Ciclo de vida en proyectos de #[i software] (cascada, ágil)
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En el ámbito del desarrollo de #[i software], existen dos enfoques principales para el ciclo de vida del proyecto: el modelo en cascada y las metodologías ágiles.

        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/15.svg")
            .col-lg
              p.mb-0 El modelo en cascada sigue una secuencia lineal de fases, donde cada etapa debe completarse antes de pasar a la siguiente. Este enfoque es adecuado para proyectos con requisitos estables y bien definidos (Boero, 2020). Por otro lado, las metodologías ágiles, como Scrum o Kanban, se basan en un desarrollo iterativo e incremental, con entregas frecuentes de #[i software] funcional. Estos métodos son más flexibles y adaptables a cambios en los requisitos.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/16.png", data-aos="zoom-in")

    .titulo-figura(data-aos="fade-right")
      h5 Figura 2. 
      span Metodología en cascada vs. metodología ágil
    .bg-color-5.p-4.mb-5(data-aos="fade-right")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/17.svg", data-aos="zoom-in")

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Imagine que se está desarrollando un sistema de gestión de inventarios. Bajo el modelo en cascada, se seguirían las fases de análisis, diseño, codificación, pruebas y mantenimiento de manera secuencial. En contraste, con una metodología ágil como Scrum, el trabajo se dividiría en sprints de 2-4 semanas, donde se priorizarían y desarrollarían incrementalmente, las funcionalidades más valiosas para el cliente.

    h3(data-aos="fade-down") Integración de metodologías ágiles en el ciclo de vida

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")              
      .col-lg-8 
        .bg-color-1.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 La integración de metodologías ágiles en el ciclo de vida del proyecto, permite combinar la flexibilidad y adaptabilidad de los enfoques ágiles con la estructura y control de los modelos tradicionales. Esta hibridación busca aprovechar las fortalezas de ambos mundos para gestionar eficazmente proyectos de #[i software].  
        p(data-aos="fade-down") Según De Zunzunegui (2023), algunas prácticas para integrar metodologías ágiles incluyen:       
    
    div.row.justify-content-center.align-items-stretch.text-center
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/19.svg" alt="" style="width: 90px")
          h5 Primero
          p.mb-0 Incorporar iteraciones y entregas incrementales, dentro de las fases del ciclo de vida.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/20.svg" alt="" style="width: 90px")
          h5 Segundo
          p.mb-0 Utilizar técnicas ágiles como el backlog del producto y las historias de usuario, para la gestión del alcance.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/21.svg" alt="" style="width: 90px")
          h5 Tercero
          p.mb-0 Realizar reuniones diarias de seguimiento (stand-up) y revisiones periódicas (sprints) para monitorear el progreso.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/22.svg" alt="" style="width: 90px")
          h5 Cuarto
          p.mb-0 Fomentar la colaboración y la comunicación constante, entre el equipo y los interesados.          

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Piense en un proyecto de desarrollo de un sistema de reservas hoteleras. Se podría aplicar un enfoque híbrido donde las fases de iniciación y planificación, sigan un modelo tradicional, mientras que la ejecución se realice en sprints ágiles de 3 semanas. Cada sprint incluiría la selección de historias de usuario del backlog, su desarrollo, pruebas y entrega incremental. Al final de cada sprint habría una revisión con los interesados, para obtener retroalimentación y adaptar el plan, según sea necesario. 

    h3(data-aos="fade-down") Gestión del alcance y tiempo en cada fase
    p(data-aos="fade-down") La gestión del alcance y del tiempo, son áreas críticas en cada fase del ciclo de vida del proyecto. El alcance define los límites del proyecto, incluyendo los requisitos, entregables y criterios de aceptación. Por otro lado, la gestión del tiempo se enfoca en desarrollar y controlar el cronograma para asegurar que el proyecto se complete dentro del plazo establecido.

    .bg-full-width.bg-color-6.mb-5(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-5
          .col-lg-8.mb-3.mb-lg-0.j1 
            p(data-aos="fade-down") Según Sarmiento Rojas et al. (2020), algunas prácticas claves para gestionar el alcance y el tiempo, incluyen:
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Verificar que se han completado todos los entregables y que cumplen con los criterios de aceptación.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Obtener la aceptación formal del cliente y transferir la propiedad del producto o servicio.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Realizar una evaluación post-proyecto para identificar éxitos, desafíos y oportunidades de mejora.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Documentar las lecciones aprendidas y archivar la información del proyecto, para una referencia futura.
          .col-lg-4.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/18.png", data-aos="zoom-in")              

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", data-aos="zoom-in")              
      .col-lg-8 
        p(data-aos="fade-down") #[b Ejemplo.] Suponga el cierre de un proyecto de desarrollo de #[i software]. Se realizaría una revisión final con el cliente para verificar que todas las funcionalidades estén completas y cumplan con los requisitos. Se obtendría la aceptación formal a través de un acta de entrega y se transferiría el código fuente y la documentación. El equipo realizaría una reunión de retrospectiva para identificar lecciones aprendidas, como la importancia de una comunicación clara con los interesados o la necesidad de mejorar las estimaciones. Estas lecciones se documentarían en una base de conocimiento, para futuros proyectos.      
        .bg-color-2.p-4.j1(data-aos="fade-left")
          h5 Ejercicios
          p 1. Crear una EDT para un proyecto de desarrollo de un sitio web de comercio electrónico, desglosando los entregables principales y los paquetes de trabajo asociados.
          p 2. Desarrollar un cronograma en un diagrama de Gantt para un proyecto de #[i software] de 6 meses, estimando la duración de cada actividad y estableciendo las dependencias entre ellas.
          p 3. Diseñar un proceso de control de cambios para un proyecto ágil, definiendo los roles, el flujo de trabajo y los criterios para aprobar o rechazar las solicitudes de cambio del alcance.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://thedigitalprojectmanager.com/es/temas/ciclo-de-vida-gestion-proyectos/" target="_blank" rel="noopener noreferrer") The Digital Project Manager. (s.f.). Ciclo de vida de los proyectos: la guía completa. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.isdi.education/es/blog/el-ciclo-de-vida-de-un-proyecto-fases" target="_blank" rel="noopener noreferrer") ISDI. (s.f.). Etapas del ciclo de vida de un proyecto.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/N-Bpni0oHPY" target="_blank" rel="noopener noreferrer") CEC - IAEN. (2015). Ciclo de vida de un proyecto - SNAP.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/cOWEnpuOv6E" target="_blank" rel="noopener noreferrer") InfoTecno :: Informática Tecnología. (2024). Gestión de Proyectos de Software - Ingeniería de Software.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
