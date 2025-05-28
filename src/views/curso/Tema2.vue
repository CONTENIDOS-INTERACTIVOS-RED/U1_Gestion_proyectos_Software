<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Rol del gerente de proyectos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/1.svg")
            .col-lg
              p.mb-0 El gerente de proyectos desempeña un papel fundamental en el éxito de cualquier iniciativa de desarrollo de #[i software]. Su rol va más allá de la simple planificación y control, abarcando habilidades técnicas, de liderazgo y comunicación. En esta sección, se explorarán en detalle, las responsabilidades y competencias de esta figura clave.

        p(data-aos="fade-down") Un gerente de proyectos efectivo, debe poseer una combinación única de habilidades para navegar la complejidad inherente a los proyectos de #[i software]. Esto incluye la capacidad de gestionar equipos multidisciplinarios, colaborar con los interesados, tomar decisiones informadas y resolver conflictos de manera constructiva (Gómez Ruedas, 2014).
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in")

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Habilidades del gerente de proyectos de #[i software]

    p(data-aos="fade-down") Un exitoso gerente de proyectos de #[i software], debe poseer una serie de habilidades técnicas y blandas. Según Maigua (2017), algunas de las competencias claves incluyen:

    .bg-full-width-3.bg-fondo-2.mb-0(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 01
                p Conocimiento de buenas prácticas y metodologías de gestión de proyectos.   
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 02
                p Comprensión de las tecnologías y lenguajes de programación, relevantes para el proyecto.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 03
                p Habilidades de liderazgo para motivar, inspirar y guiar al equipo hacia los objetivos del proyecto.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 04
                p Capacidad de comunicación efectiva con los interesados, tanto técnicos como no técnicos.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 05
                p Habilidades de resolución de problemas y toma de decisiones basadas en datos.         

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Piense en un gerente de proyectos de #[i software] para un sistema de gestión de recursos humanos. Necesitaría un sólido conocimiento de las metodologías ágiles, como Scrum, y familiaridad con tecnologías como Java y bases de datos SQL. Además, debería ser capaz de liderar reuniones de planificación de sprints, comunicar el progreso al patrocinador del proyecto y tomar decisiones informadas, sobre la priorización de funcionalidades, basadas en el valor para el negocio. 

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Gestión de equipos multidisciplinarios
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/32.png", data-aos="zoom-in")              
      .col-lg-8 
        .bg-color-4.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Los proyectos de #[i software], por lo general involucran equipos multidisciplinarios, compuestos por desarrolladores, diseñadores, analistas de calidad y otros especialistas. El gerente de proyectos debe ser capaz de coordinar y alinear los esfuerzos de estos diversos perfiles, para lograr los objetivos del proyecto.

        p(data-aos="fade-down") Según López et al. (2019), algunas prácticas para gestionar eficazmente, equipos multidisciplinarios, incluyen:  

    div.row.justify-content-center.align-items-stretch.text-center
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/19.svg" alt="" style="width: 90px")
          h5 Primero
          p.mb-0 Fomentar una cultura de colaboración y comunicación abierta entre los miembros del equipo.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/20.svg" alt="" style="width: 90px")
          h5 Segundo
          p.mb-0 Clarificar roles y responsabilidades, asegurando que cada miembro comprenda su contribución al proyecto.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/21.svg" alt="" style="width: 90px")
          h5 Tercero
          p.mb-0 Facilitar la resolución de conflictos y promover un ambiente de respeto mutuo.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/22.svg" alt="" style="width: 90px")
          h5 Cuarto
          p.mb-0 Proporcionar oportunidades de desarrollo y crecimiento para los miembros del equipo.

    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Imagine un proyecto de desarrollo de una aplicación móvil. El gerente de proyectos coordinaría el trabajo del equipo multidisciplinario, facilitando la colaboración entre los desarrolladores iOS y Android, los diseñadores UX/UI y los analistas de calidad. Fomentaría la comunicación regular a través de reuniones diarias y herramientas de colaboración, y abordaría cualquier conflicto o desafío que surja, como diferencias en las prioridades o enfoques técnicos.         
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Responsabilidades del líder técnico y su relación con el gerente
    .bg-full-width.bg-color-7(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-5
          .col-lg-8.mb-3.mb-lg-0.j1 
            p(data-aos="fade-down") En muchos proyectos de #[i software], existe un rol de líder técnico o arquitecto que trabaja en estrecha colaboración con el gerente de proyectos. Mientras que el gerente se enfoca en la gestión general del proyecto, el líder técnico es responsable de los aspectos técnicos y la toma de decisiones arquitectónicas.
            p(data-aos="fade-down") Según Maigua (2017), algunas de las responsabilidades claves del líder técnico, incluyen:
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Definir y comunicar la visión y dirección técnica del proyecto.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Tomar decisiones sobre la arquitectura, las tecnologías y los estándares a utilizar.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Guiar y mentorar al equipo de desarrollo, en aspectos técnicos.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Colaborar con el gerente de proyectos para alinear las decisiones técnicas con los objetivos del proyecto.
          .col-lg-4.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/37.png", data-aos="zoom-in")                           

    .bg-full-width.bg-color-8.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Suponga un proyecto de desarrollo de un sistema de procesamiento de pagos. El líder técnico sería responsable de seleccionar el stack tecnológico, como los lenguajes de programación, las bases de datos y los marcos de seguridad, a utilizar. Trabajaría con el gerente de proyectos para asegurar que estas decisiones técnicas se encuentren alineadas con los requisitos del cliente, el presupuesto y el cronograma. Además, proporcionaría orientación y revisión de código, al equipo de desarrollo, para garantizar la calidad y la adherencia a los estándares.

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Supervisión y seguimiento de tareas en el ciclo de vida
    .row.mb-5 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", data-aos="zoom-in")          
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/1.svg")
            .col-lg
              p.mb-0 Una de las responsabilidades críticas del gerente de proyectos, es supervisar y dar seguimiento a las tareas a lo largo del ciclo de vida del proyecto. Esto implica monitorear el progreso, identificar desviaciones y tomar acciones correctivas oportunas, para mantener el proyecto en camino.

        p(data-aos="fade-down") Según Maigua (2017), algunas prácticas para una supervisión y seguimiento efectivos, incluyen:

    div.row.justify-content-center.align-items-stretch.text-center
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/39.svg" alt="" style="width: 90px")
          h5 Primero
          p.mb-0 Establecer métricas y KPIs claros para medir el progreso y el desempeño del proyecto.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/40.svg" alt="" style="width: 90px")
          h5 Segundo
          p.mb-0 Realizar reuniones regulares de seguimiento con el equipo para identificar riesgos y problemas potenciales.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/41.svg" alt="" style="width: 90px")
          h5 Tercero
          p.mb-0 Utilizar herramientas de gestión de proyectos para realizar un seguimiento del avance de las tareas y los entregables.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.p-3.h-100.br-1
          img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/42.svg" alt="" style="width: 90px")
          h5 Cuarto
          p.mb-0 Comunicar de manera proactiva el estado del proyecto a los interesados claves.

    .bg-full-width.bg-color-8.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Considere un proyecto de desarrollo de #[i software] en su fase de ejecución. El gerente de proyectos realizaría reuniones semanales de seguimiento con el equipo, revisando el progreso de las tareas asignadas e identificando cualquier bloqueo o retraso. Utilizaría una herramienta como Jira para realizar un seguimiento de los tickets de trabajo y actualizar el cronograma del proyecto, según sea necesario. Además, prepararía informes de estado quincenales para comunicar el avance, los riesgos y los próximos hitos al patrocinador del proyecto y otros interesados claves.          

    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Manejo de conflictos y toma de decisiones en el desarrollo de #[i software]
    p(data-aos="fade-down") Los proyectos de #[i software], normalmente involucran a múltiples partes interesadas con diferentes prioridades y perspectivas, lo que puede llevar a conflictos y desafíos. El gerente de proyectos debe ser capaz de manejar estos conflictos de manera efectiva y tomar decisiones informadas, para mantener el proyecto en marcha.       
    .bg-full-width.bg-color-6(data-aos="fade-right")
      .px-4.p-md-3
        .row.px-5
          .col-lg-8.mb-3.mb-lg-0.j1 
            p(data-aos="fade-down") Según Gómez Ruedas (2014), algunas estrategias para el manejo de conflictos y la toma de decisiones, incluyen:
            p(data-aos="fade-down") Según Maigua (2017), algunas de las responsabilidades claves del líder técnico, incluyen:
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
              img.img-a.img-t(src="@/assets/curso/temas/43.png", data-aos="zoom-in")                           
    .bg-full-width.bg-color-4.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/44.png', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Piense en un proyecto de #[i software] donde surgen desacuerdos entre el equipo de desarrollo y los usuarios finales, sobre los requisitos de una funcionalidad clave. El gerente de proyectos organizaría una reunión, facilitada para que ambas partes expresen sus preocupaciones y necesidades. Luego, utilizaría técnicas de priorización basadas en el valor para el negocio y el esfuerzo requerido para guiar una discusión objetiva y llegar a un consenso sobre el alcance de la funcionalidad. Si no se puede lograr un acuerdo, el gerente tomaría una decisión final basada en los objetivos generales del proyecto y la escalaría al patrocinador, para su aprobación.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://cvzen.mx/blog/director-proyecto-agil-rol-deberes-habilidades" target="_blank" rel="noopener noreferrer") CVZen. (s.f.). Director de Proyecto Ágil: Rol, Deberes y Habilidades. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://administrarproyectos.com/funciones-de-un-gerente-de-proyectos-clave-para-el-exito/" target="_blank" rel="noopener noreferrer") Administrar Proyectos. (s.f.). Funciones de un gerente de proyectos: clave para el éxito.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/5LK3EeYzcho" target="_blank" rel="noopener noreferrer") Universidad Icesi. (2023). Repensando las Habilidades del Profesional de Proyectos.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/rwRX5U87qy4" target="_blank" rel="noopener noreferrer") Elite Software Engineering. (2018). El project management de software es más relevante que nunca.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
