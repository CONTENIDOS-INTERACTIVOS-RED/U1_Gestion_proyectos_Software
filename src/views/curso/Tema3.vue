<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Conceptos básicos de PMBOK'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/45.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-down") El Project Management Body of Knowledge (PMBOK), es un estándar ampliamente reconocido que recopila las mejores prácticas en la gestión de proyectos. Desarrollado por el Project Management Institute (PMI), el PMBOK proporciona un marco integral para abordar proyectos de manera efectiva y consistente. En esta sección, se revisan los conceptos fundamentales del PMBOK y cómo se aplican en el contexto de la gestión de proyectos de #[i software].
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Definición de PMBOK

    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") El PMBOK es una guía que describe los conocimientos y las prácticas aplicables a la mayoría de los proyectos, la mayor parte del tiempo. Este estándar se basa en procesos y áreas de conocimiento generalmente reconocidos como buenas prácticas dentro de la profesión de dirección de proyectos (Sarmiento Rojas et al., 2020).
        .bg-color-8.p-4.j1(data-aos="fade-left")
          .row.align-items-start.mb-4
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/46.svg")
            .col-lg
              p.mb-0 El PMBOK es como una caja de herramientas para gestionar proyectos. Contiene una colección de procesos, técnicas, terminologías y pautas que han demostrado ser efectivas en innumerables proyectos, a lo largo del tiempo. Así como un mecánico experimentado sabe qué herramienta usar para cada tarea, un gerente de proyectos versado en el PMBOK puede seleccionar los procesos y las áreas de conocimiento adecuados, para abordar los desafíos específicos de su proyecto.
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/47.svg")
            .col-lg
              p.mb-0 El PMBOK define cinco grupos de procesos (Inicio, Planificación, Ejecución, Monitoreo y Control, y Cierre) que proporcionan un marco para gestionar el proyecto de principio a fin. Además, identifica diez áreas de conocimiento (Integración, Alcance, Cronograma, Costos, Calidad, Recursos, Comunicaciones, Riesgos, Adquisiciones e Interesados), que representan los principales ámbitos de experiencia que un gerente de proyectos, debe dominar.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")        

    .titulo-figura(data-aos="fade-right")
      h5 Figura 2. 
      span Áreas del conocimiento PMBOK
    .bg-color-5.p-4(data-aos="fade-left")
      figure
        img.img-a.img-t(src="@/assets/curso/temas/49.svg", data-aos="zoom-in")
    .bg-color-9.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.px-4 
        .col-lg-auto.mb-3.mb-lg-0
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/45.svg', alt='')                  
        .col
          p.mb-0(data-aos="fade-down") #[b Ejemplo.] Imagine que está construyendo una casa. El PMBOK sería como el manual maestro del constructor. Le guiaría a través de las fases del proyecto, desde el diseño hasta la entrega final. Le ayudaría a gestionar aspectos como el presupuesto (costos), el calendario de construcción (cronograma), la selección de materiales (adquisiciones) y la coordinación con el arquitecto y los contratistas (integración). Siguiendo esta guía aprobada, aumentaría sus posibilidades de completar la casa a tiempo, dentro del presupuesto y, según las especificaciones. 

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Áreas de conocimiento relevantes en #[i software] 
    p(data-aos="fade-down") Si bien todas las áreas de conocimiento del PMBOK son importantes, algunas son particularmente críticas en la gestión de proyectos de #[i software]. Estas incluyen (Sarmiento Rojas et al., 2020):
    .bg-full-width.bg-color-info(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/50.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.5%" y="39.3%" numero="+")
                  h5 Gestión del cronograma
                  p Los proyectos de #[i software], frecuentemente tienen plazos ajustados. Desarrollar y controlar un cronograma realista, es clave. Esto implica definir las actividades, secuenciarlas, estimar su duración y gestionar las dependencias. Las técnicas como el diagrama de Gantt y el análisis de la ruta crítica, pueden ayudar. 
                .bg-color-white.box-shadow.p-3(x="95.7%" y="16.2%" numero="+")
                  h5 Gestión del alcance
                  p En #[i software], esto implica una clara elicitación y gestión de los requisitos. ¿Qué características y funcionalidades se incluirán en el producto final? ¿Cómo se manejarán los cambios en los requisitos durante el proyecto? Definir y controlar el alcance es esencial para evitar el "scope creep" o la expansión no controlada del proyecto.
                .bg-color-white.box-shadow.p-3(x="95.2%" y="55.2%" numero="+")
                  h5 Gestión de los costos
                  p Los costos del #[i software] van más allá del desarrollo en sí. Incluyen hardware, licencias, capacitación y soporte, entre otros. Planificar, estimar y controlar estos costos, es esencial para mantener el proyecto viable y dentro del presupuesto.
                .bg-color-white.box-shadow.p-3(x="97.5%" y="74%" numero="+")
                  h5 Gestión de la calidad 
                  p La calidad del #[i software] tiene muchas dimensiones; desde el rendimiento y la usabilidad, hasta la seguridad y la escalabilidad. Definir estándares de calidad, realizar revisiones de código y pruebas exhaustivas, y monitorear continuamente las métricas claves de calidad, son prácticas esenciales.                                                     

    .bg-color-9.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.px-4 
        .col-lg-auto.mb-3.mb-lg-0
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/45.svg', alt='')                  
        .col
          p.mb-0(data-aos="fade-down") #[b Ejemplo.] En un proyecto de desarrollo de una aplicación móvil de comercio electrónico, la gestión del alcance implicaría trabajar con los interesados para definir y priorizar las características claves, como el carrito de compras, el procesamiento de pagos y las notificaciones push. La gestión del cronograma aseguraría que las tareas de desarrollo, pruebas y lanzamiento, estén secuenciadas lógicamente y tengan estimaciones realistas. La gestión de costos abarcaría no solo los costos de desarrollo, sino también los costos operativos continuos, como el alojamiento en la nube y el soporte al cliente. Y la gestión de la calidad implicaría establecer estándares de codificación, realizar pruebas de usabilidad y monitorear las métricas de rendimiento, después del lanzamiento.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Procesos claves del PMBOK, aplicados al #[i software]
    p(data-aos="fade-down") El PMBOK organiza sus 49 procesos en cinco categorías: Inicio, Planificación, Ejecución, Monitoreo y Control, y Cierre (Sarmiento Rojas et al., 2020). Veamos cómo algunos de estos procesos claves, podrían aplicarse en un proyecto de #[i software]: 

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Inicio")
            p Desarrollar el acta de constitución del proyecto. Este documento captura la visión, los objetivos, los entregables y los participantes claves del proyecto. Para un proyecto de #[i software], esto podría incluir una descripción de alto nivel de la aplicación a desarrollar, los beneficios esperados, las restricciones y los principales interesados.
          .div(titulo="Planificación")
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Recopilar requisitos. En #[i software], esto normalmente implica trabajar con usuarios, clientes y otros interesados, para identificar y documentar las funcionalidades deseadas. Las técnicas pueden incluir entrevistas, talleres, desarrollo de casos de uso y creación de historias de usuario.

              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Crear la EDT. La Estructura de Desglose del Trabajo, descompone el alcance en entregables más pequeños y manejables. En un proyecto de #[i software], los componentes de la EDT podrían incluir el diseño de la arquitectura, el desarrollo del backend, la creación de la interfaz de usuario y las pruebas del sistema.                 
          .div(titulo="Ejecución, monitoreo y control")
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Dirigir y gestionar el trabajo del proyecto. Para un equipo de #[i software], esto implicaría coordinar las actividades diarias de desarrollo, asignar recursos, facilitar la comunicación y gestionar los cambios.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Controlar la calidad. Esto podría implicar revisiones de código, pruebas unitarias, pruebas de integración y pruebas de aceptación de usuario. Los resultados se analizarían y se tomarían acciones correctivas, según sea necesario.
          .div(titulo="Cierre")
            p Cerrar el proyecto o fase: En #[i software], este proceso podría incluir la implementación final del sistema, la entrega de la documentación del usuario, la realización de una revisión post-proyecto y el archivado de los documentos del proyecto.                                     
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/51.png", alt="") 


    .bg-full-width.bg-color-3.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center.px-4 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") #[b Ejemplo.] Considere un proyecto para desarrollar un nuevo sistema de gestión de aprendizaje, para una universidad. Durante la iniciación, el acta de constitución del proyecto describiría la visión de un sistema que permita a los profesores publicar tareas, a los estudiantes enviar trabajos y que proporcione herramientas de calificación y retroalimentación. Durante la planificación, los requisitos detallados se recopilarían de profesores, estudiantes y administradores. La EDT dividiría el trabajo en componentes como el sistema de autenticación, los módulos del curso, las herramientas de calificación y el portal del estudiante. Durante la ejecución, el progreso se monitorearía de cerca, con revisiones regulares de la calidad. Finalmente, durante el cierre, el sistema se lanzaría a los usuarios, con capacitación proporcionada y un plan desarrollado para el soporte y el mantenimiento continuos.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Comparación con metodologías ágiles y tradicionales
    p(data-aos="fade-down") El PMBOK organiza sus 49 procesos en cinco categorías: Inicio, Planificación, Ejecución, Monitoreo y Control, y Cierre (Sarmiento Rojas et al., 2020). Veamos cómo algunos de estos procesos claves, podrían aplicarse en un proyecto de #[i software]:

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Metodologías tradicionales" :icon="require('@/assets/curso/temas/icon.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Metodologías tradicionales 
            p Las metodologías tradicionales, como el modelo en cascada, siguen un enfoque lineal y secuencial. El proyecto progresa a través de diferentes fases (requisitos, diseño, implementación, pruebas, mantenimiento), con cada fase comenzando solo cuando la anterior está completa. Este enfoque enfatiza la planificación detallada por adelantado y el control estricto del alcance. Es más adecuado para proyectos con requisitos estables y bien definidos.

      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Metodologías ágiles" :icon="require('@/assets/curso/temas/icon.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')        
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Metodologías ágiles 
            p Por otro lado, las metodologías ágiles, como Scrum y Kanban, se basan en un desarrollo iterativo e incremental. En lugar de una única fase de entrega, el #[i software] se desarrolla en iteraciones cortas llamadas "sprints". Los requisitos se priorizan en un backlog y los más valiosos se seleccionan, para el próximo sprint. Este enfoque enfatiza la adaptación al cambio y la entrega frecuente de un #[i software] funcionando. Es más adecuado para proyectos con requisitos emergentes y entornos cambiantes (De Zunzunegui, 2023).
    .row.mb-5       
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") El PMBOK, siendo un marco general, puede incorporar principios tanto de metodologías tradicionales como ágiles. Por ejemplo, los procesos de planificación del PMBOK, como Crear la EDT, pueden usarse en un proyecto en cascada, mientras que los procesos de ejecución, como dirigir y gestionar el trabajo del proyecto, pueden adaptarse a un contexto ágil.

        p(data-aos="fade-down") Ejemplo. Suponga un proyecto para desarrollar un sitio web de comercio electrónico. Con un enfoque tradicional, los requisitos para todo el sitio se definirían por adelantado, seguido de un diseño completo, luego la implementación de todo el sitio y, finalmente, las pruebas. Si los requisitos cambian durante el proceso, podría ser difícil y costoso adaptarse.
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/1.svg")
            .col-lg
              p.mb-0 Con un enfoque ágil, el trabajo se dividiría en sprints de, digamos, 2 semanas. El primer sprint podría entregar una página de inicio básica y un catálogo de productos. El siguiente sprint podría agregar la funcionalidad del carrito de compras. Cada sprint entregará un incremento de trabajo funcionando. Si surgen nuevos requisitos, pueden priorizarse e incorporarse en futuros sprints.
        p(data-aos="fade-down") Un gerente de proyecto utilizando el PMBOK, adaptaría los procesos, según el enfoque elegido. En el proyecto tradicional, procesos como Definir el Alcance y Crear la EDT serían llevados a cabo en detalle por adelantado. En el proyecto ágil, el alcance sería flexible y evolucionaría con el tiempo, con una EDT de alto nivel, desarrollada inicialmente y refinada en cada sprint.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/54.png", data-aos="zoom-in")


    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Aplicación práctica de PMBOK en la gestión de proyectos ágiles
    p(data-aos="fade-down") La aplicación práctica del estándar PMBOK en proyectos ágiles permite combinar lo mejor de dos enfoques: la estructura metodológica de la gestión tradicional con la flexibilidad y adaptabilidad de las metodologías ágiles.

    .bg-full-width.bg-color-10.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/55.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Aplicación práctica de PMBOK en la gestión de proyectos ágiles
            p.mb-4(data-aos="fade-right") En el PDF Aplicación práctica de PMBOK en la gestión de proyectos ágiles, se presentan ejemplos claros y ejercicios prácticos, que ilustran cómo integrar los grupos de procesos y áreas de conocimiento del PMBOK dentro de un entorno de trabajo iterativo, potenciando la planificación, ejecución y entrega de proyectos de #[i software] con mayor eficiencia y enfoque colaborativo.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Aplicación práctica de PMBOK en la gestión de proyectos ágiles
          
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") A lo largo de esta unidad, se han explorado los fundamentos de la gestión de proyectos de #[i software], con un enfoque en tres áreas claves: el ciclo de vida del proyecto, el rol del gerente de proyectos y los conceptos básicos de buenas prácticas.       
        .bg-color-8.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 Comprender el ciclo de vida del proyecto es esencial para planificar y gestionar eficazmente el trabajo, desde la iniciación hasta el cierre. Se ha visto cómo los modelos tradicionales y ágiles difieren en su enfoque, pero ambos buscan guiar el proyecto a través de fases claras, hacia la entrega exitosa del producto.

        p(data-aos="fade-down") El gerente de proyectos desempeña un papel multifacético y crucial en este proceso. Debe poseer una combinación de habilidades técnicas, de liderazgo y de comunicación, para dirigir equipos multidisciplinarios, colaborar con los interesados y tomar decisiones informadas frente a los desafíos.    
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/56.png", data-aos="zoom-in")              


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in")              
      .col-lg-8
        p(data-aos="fade-down") Finalmente, la aplicación de buenas prácticas PMBOK en la gestión de proyectos, adaptadas al contexto específico de la ingeniería de #[i software] aumenta, significativamente, las posibilidades de éxito. Desde la gestión del alcance y el cronograma hasta la calidad y los riesgos, estas prácticas proporcionan un marco probado para abordar las complejidades inherentes al desarrollo de #[i software].        

        .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
          p.mb-0 En el panorama actual, altamente competitivo y en constante cambio de la industria del #[i software], el dominio de estos fundamentos de gestión de proyectos, es un diferenciador clave. Los gerentes de proyectos que pueden aplicar efectivamente estos principios y prácticas, están bien posicionados para entregar #[i software] de alta calidad, a tiempo y dentro del presupuesto, y para impulsar el éxito de sus organizaciones.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/sales/que-es-pmbokHubSpot Blog" target="_blank" rel="noopener noreferrer") HubSpot. (s.f.). PMBOK: qué es, para qué sirve, fases y herramientas. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="hhttps://liderazgo.space/pmbok" target="_blank" rel="noopener noreferrer") Espacio de Liderazgo. (s.f.). Guía completa sobre el PMBOK para gestionar proyectos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/T77xBLLVDbE" target="_blank" rel="noopener noreferrer") Gascón, O. (2023). 6 Áreas de Conocimiento y Grupos de procesos PMBOK 6 y PMBOK 7.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/UJlhxuA0Rhg" target="_blank" rel="noopener noreferrer") Master en Project Management MDAP - Máster en Dirección y Gestión de Proyectos. (2018). Gestión de Proyectos Ágiles y Lean Project Management - parte 1.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Gestión de Proyectos',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es el objetivo principal de la gestión de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducir la plantilla de trabajadores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumentar la producción sin planificación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Alcanzar los objetivos del proyecto en tiempo, costo y calidad',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Hacer tareas repetitivas sin cambios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué representa el ciclo de vida del proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Las etapas desde el inicio hasta el cierre del proyecto',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Las actividades diarias del equipo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Las reuniones del gerente',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Las tareas administrativas externas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'L¿Cuál es una función clave del gerente de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Programar vacaciones del equipo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Coordinar recursos y asegurar el cumplimiento del plan',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlar el software de oficina',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Realizar auditorías externas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué es PMBOK?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un programa de software de oficina',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una empresa consultora',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Una guía de buenas prácticas para la gestión de proyectos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un estándar legal obligatorio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué se realiza en la fase de inicio de un proyecto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '¿Qué se realiza en la fase de inicio de un proyecto?',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Se evalúan los informes finales',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se asignan recompensas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se hace el análisis postmortem',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
