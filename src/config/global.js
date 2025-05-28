export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de gestión de proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ciclo de vida del proyecto',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Rol del gerente de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Habilidades del gerente de proyectos de <i>software</i>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Gestión de equipos multidisciplinarios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Responsabilidades del líder técnico y su relación con el gerente',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Supervisión y seguimiento de tareas en el ciclo de vida',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Manejo de conflictos y toma de decisiones en el desarrollo de <i>software</i>',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conceptos básicos de PMBOK',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición de PMBOK',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Áreas de conocimiento relevantes en <i>software</i>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Procesos claves del PMBOK, aplicados al <i>software</i>',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Comparación con metodologías ágiles y tradicionales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Aplicación práctica de PMBOK en la gestión de proyectos ágiles',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Boero, C. (2020). <i>Evaluación de proyectos</i>. Jorge Sarmiento Editor - Universitas. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172500',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H. & Jiménez Roa, D. E. (2020). <i>Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'López, D., Rodríguez, J. R. & González, J. J. (2019). <i>Gestión de programas de proyectos informáticos (y no informáticos)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/113334?page=1',
    },
    {
      referencia:
        'Maigua, G. (2017). <i>Buenas prácticas en la dirección y gestión de proyectos informáticos</i>. D - Editorial de la Universidad Tecnológica Nacional. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/76993?page=1',
    },
    {
      referencia:
        'De Zunzunegui, A. (2023). <i>Gestión de proyectos en AGILE: cómo utilizar las metodologías ágiles para mejorar tu capacidad de respuesta y lanzar proyectos de éxito</i>. LID Editorial España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/270594?page=1',
    },
    {
      referencia:
        'Gómez Ruedas, J. (2014). <i>Dirección y gestión de proyectos de tecnologías de la información en la empresa</i>. FC Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/114078?page=1',
    },
    {
      referencia:
        'Sarmiento Rojas, J. A., Correa Candamil, C. H. & Jiménez Roa, D. E. (2020). <i>Gestión de proyectos aplicada al PMBOK 6ED</i>. Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/193943?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Acta de constitución del proyecto (<i>Project Charter</i>)',
      significado:
        'Documento que autoriza, formalmente, un proyecto y define su alcance, objetivos y participantes iniciales.',
    },
    {
      termino: 'Alcance (<i>Scope</i>)',
      significado:
        'Suma de productos, servicios y resultados a ser proporcionados como un proyecto. Define los límites del proyecto.',
    },
    {
      termino: 'Áreas de conocimiento (<i>Knowledge Areas</i>)',
      significado:
        'Conjunto de conceptos, términos y actividades, que conforman un ámbito profesional de la dirección de proyectos o un área de especialización. En el PMBOK se identifican diez áreas de conocimiento.',
    },
    {
      termino: 'Ciclo de vida del proyecto (<i>Project Life Cycle</i>)',
      significado:
        'Serie de fases que atraviesa un proyecto, desde su inicio hasta su cierre.',
    },
    {
      termino: 'EDT (<i>Estructura de Desglose del Trabajo</i>)',
      significado:
        'Descomposición jerárquica del alcance total del trabajo, a realizar por el equipo del proyecto, para cumplir con los objetivos y crear los entregables requeridos.',
    },
    {
      termino: 'Entregable (<i>Deliverable</i>)',
      significado:
        'Cualquier producto, resultado o capacidad de prestar un servicio único y verificable, que debe producirse, para terminar un proceso, una fase o un proyecto.',
    },
    {
      termino: 'Grupos de procesos',
      significado:
        'La agrupación lógica de entradas, herramientas, técnicas y salidas, de la dirección de proyectos.',
    },
    {
      termino: 'Hito (<i>Milestone</i>)',
      significado:
        'Punto o evento significativo dentro de un proyecto, programa o portafolio.',
    },
    {
      termino: 'Interesados (<i>Stakeholders</i>)',
      significado:
        'Persona, grupo u organización que pueda afectar, verse afectada o percibirse a sí misma como afectada, por una decisión, actividad o resultado de un proyecto.',
    },
    {
      termino: 'KPIs (<i>Key Performance Indicators</i>)',
      significado:
        'Métricas utilizadas para cuantificar objetivos que reflejan el rendimiento de una organización, y que generalmente se recogen en su plan estratégico.',
    },
    {
      termino: 'Metodologías ágiles (<i>Agile Methodologies</i>)',
      significado:
        'Conjunto de metodologías de gestión de proyectos, caracterizadas por un desarrollo iterativo e incremental, donde los requisitos y soluciones evolucionan con el tiempo, según la necesidad del proyecto.',
    },
    {
      termino: 'PMBOK (<i>Project Management Body of Knowledge</i>)',
      significado:
        'Guía desarrollada por el <i>Project Management</i> Institute (PMI), que establece un criterio de buenas prácticas relacionadas con la gestión, la administración y la dirección de proyectos.',
    },
    {
      termino: 'PMI (<i>Project Management Institute</i>)',
      significado:
        'Organización sin fines de lucro que asocia a profesionales relacionados con la gestión de proyectos, alrededor de todo el mundo.',
    },
    {
      termino: '<i>Product Backlog</i>',
      significado: 'La lista ordenada de requisitos para un producto ágil. ',
    },
    {
      termino: '<i>Product Owner</i>',
      significado:
        'El rol responsable de maximizar el valor del producto en proyectos ágiles.',
    },
    {
      termino: 'Requisito (<i>Requirement</i>)',
      significado:
        'Condición o capacidad que debe poseer un sistema, producto, servicio, resultado o componente para satisfacer un contrato, estándar, especificación u otros documentos formalmente impuestos.',
    },
    {
      termino: 'Retrospectiva de <i>Sprint</i> y Revisión de <i>Sprint</i>',
      significado: 'Eventos claves en el marco ágil de <i>Scrum</i>.',
    },
    {
      termino: 'Riesgo (<i>Risk</i>)',
      significado:
        'Evento o condición incierta que, de producirse, tiene un efecto positivo o negativo, en uno o más de los objetivos del proyecto.',
    },
    {
      termino: '<i>Scrum</i>',
      significado:
        'Un marco ágil específico para abordar problemas complejos. ',
    },
    {
      termino: '<i>Sprint</i> y <i>Sprint Backlog</i>',
      significado:
        'Iteraciones de tiempo limitado en el desarrollo ágil y el subconjunto de elementos del <i>Product Backlog</i> seleccionados para un <i>Sprint</i>.',
    },
    {
      termino: 'Visión del producto',
      significado:
        'Una descripción breve e inspiradora de lo que podría llegar a ser el producto en proyectos ágiles.',
    },
    {
      termino: 'WBS (<i>Work Breakdown Structure</i>)',
      significado: 'Véase EDT - Estructura de Desglose del Trabajo.',
    },
  ],
}
