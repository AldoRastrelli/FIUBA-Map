import * as data from "./data";
import { COLORS } from "./theme";

export const CARRERAS = [
  {
    id: "sistemas",
    link: "http://www.fi.uba.ar/es/node/307",
    graph: data.sistemas,
    nombre: "Licenciatura en Análisis de Sistemas",
    nombrecorto: "Sistemas",
    creditos: {
      total: 176,
      obligatorias: 136,
      electivas: 28,
      checkbox: [
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
      materias: [
        {
          id: "95.61",
          nombrecorto: "TPP",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
    },
  },
  {
    id: "informatica",
    link: "http://www.fi.uba.ar/es/node/302",
    graph: data.informatica,
    nombre: "Ingeniería en Informática",
    nombrecorto: "Informática",
    orientaciones: [
      {
        nombre: "Gestión Industrial de Sistemas",
        colorScheme: "orientacion1",
      },
      { nombre: "Sistemas Distribuidos", colorScheme: "orientacion2" },
      { nombre: "Sistemas de Producción", colorScheme: "orientacion3" },
    ],
    finDeCarrera: [
      { id: "tesis", materia: "75.00" },
      { id: "tpp", materia: "75.99" },
    ],
    creditos: {
      total: 248,
      obligatorias: 122,
      orientacion: {
        "Gestión Industrial de Sistemas": {
          orientacion: 24,
          electivas: { tesis: 78, tpp: 90 },
        },
        "Sistemas de Producción": {
          orientacion: 22,
          electivas: { tesis: 80, tpp: 92 },
        },
        "Sistemas Distribuidos": {
          orientacion: 18,
          electivas: { tesis: 84, tpp: 96 },
        },
      },
    },
    eligeOrientaciones: true,
  },
  {
    id: "agrimensura",
    link: "http://www.fi.uba.ar/es/node/301",
    graph: data.agrimensura,
    nombre: "Ingeniería en Agrimensura",
    nombrecorto: "Agrimensura",
    finDeCarrera: [
      { id: "tesis", materia: "70.00" },
      { id: "tpp", materia: "70.99" },
    ],
    creditos: {
      total: 208,
      obligatorias: 178,
      checkbox: [
        {
          nombre: "Estadía Supervisada de al menos 200 horas",
          nombrecorto: "Estadía",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
      ],
      electivas: { tesis: 12, tpp: 18 },
    },
  },
  {
    id: "alimentos",
    link: "http://www.fi.uba.ar/es/node/298",
    graph: data.alimentos,
    nombre: "Ingeniería de Alimentos",
    nombrecorto: "Alimentos",
    creditos: {
      total: 234,
      materias: [
        {
          id: "76.44",
          nombrecorto: "pp",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          id: "76.90",
          nombrecorto: "tesis",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
      obligatorias: 208,
      electivas: 10,
    },
  },
  {
    id: "civil",
    link: "http://www.fi.uba.ar/es/node/297",
    graph: data.civil,
    nombre: "Ingeniería Civil",
    nombrecorto: "Civil",
    creditos: {
      total: 257,
      obligatorias: 210,
      electivas: 34,
      materias: [
        {
          id: "84.99",
          nombrecorto: "TPP",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
      checkbox: [
        {
          nombre: "Estadía Supervisada de al menos 200 horas",
          nombrecorto: "Estadía",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
    },
  },
  {
    id: "electricista",
    link: "http://www.fi.uba.ar/es/node/299",
    graph: data.electricista,
    nombre: "Ingeniería Electricista",
    nombrecorto: "Electricista",
    finDeCarrera: [
      { id: "tesis", materia: "85.00" },
      { id: "tpp", materia: "85.99" },
    ],
    creditos: {
      total: 242,
      obligatorias: 206,
      checkbox: [
        {
          nombre: "Estadía Supervisada de al menos 200 horas",
          nombrecorto: "Estadía",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
      electivas: { tesis: 16, tpp: 22 },
    },
  },
  {
    id: "electronica",
    link: "http://www.fi.uba.ar/es/node/300",
    graph: data.electronica,
    nombre: "Ingeniería Electrónica",
    nombrecorto: "Electrónica",
    orientaciones: [
      { nombre: "Procesamiento de Señales", colorScheme: "orientacion1" },
      { nombre: "Automatización y Control", colorScheme: "orientacion2" },
      { nombre: "Física Electrónica", colorScheme: "orientacion3" },
      { nombre: "Telecomunicaciones", colorScheme: "orientacion4" },
      {
        nombre: "Sistemas Digitales y Computación",
        colorScheme: "orientacion5",
      },
      { nombre: "Multimedia", colorScheme: "orientacion6" },
      { nombre: "Instrumentación Biomédica", colorScheme: "orientacion7" },
      { nombre: "Multiples Orientaciones", colorScheme: "orientacion8" },
    ],
    finDeCarrera: [
      { id: "tesis", materia: "86.00" },
      { id: "tpp", materia: "86.99" },
    ],
    creditos: {
      total: 240,
      obligatorias: 166,
      electivas: 56,
      checkbox: [
        {
          nombre: "Práctica  Profesional",
          nombrecorto: "PP",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
    },
  },
  {
    id: "industrial",
    link: "http://www.fi.uba.ar/es/node/303",
    graph: data.industrial,
    nombre: "Ingeniería Industrial",
    nombrecorto: "Industrial",
    finDeCarrera: [
      { id: "tesis", materia: "92.00" },
      { id: "tpp", materia: "92.99" },
    ],
    creditos: {
      total: 245,
      obligatorias: 196,
      materias: [
        {
          id: "HUM",
          nombrecorto: "Humanística",
          bg: COLORS.orientacion1[50],
          color: "orientacion1",
        },
      ],
      checkbox: [
        {
          nombre: "Práctica Profesional de al menos 200 horas",
          nombrecorto: "PP",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
      electivas: 32,
    },
  },
  {
    id: "mecanica",
    link: "http://www.fi.uba.ar/es/node/304",
    graph: data.mecanica,
    nombre: "Ingeniería Mecánica",
    nombrecorto: "Mecánica",
    orientaciones: [
      { nombre: "Diseño Mecánico", colorScheme: "orientacion1" },
      { nombre: "Termomecánica", colorScheme: "orientacion2" },
      { nombre: "Metalúrgica", colorScheme: "orientacion3", nonEligible: true },
      {
        nombre: "Computación Aplicada",
        colorScheme: "orientacion4",
        nonEligible: true,
      },
      { nombre: "Industrias", colorScheme: "orientacion5", nonEligible: true },
    ],
    eligeOrientaciones: { tesis: true },
    finDeCarrera: [
      { id: "tesis", materia: "67.00" },
      { id: "tpp", materia: "67.98" },
    ],
    creditos: {
      total: 260,
      obligatorias: 190,
      orientacion: { tesis: 28 },
      electivas: { tesis: 24, tpp: 56 },
    },
  },
  {
    id: "naval",
    link: "http://www.fi.uba.ar/es/node/305",
    graph: data.naval,
    nombre: "Ingeniería Naval y Mecánica",
    nombrecorto: "Naval",
    finDeCarrera: [
      { id: "tesis", materia: "73.00" },
      { id: "tpp", materia: "73.99" },
    ],
    creditos: {
      total: 264,
      obligatorias: 226,
      electivas: { tesis: 20, tpp: 38 },
    },
  },
  {
    id: "petroleo",
    link: "http://www.fi.uba.ar/es/node/2133",
    graph: data.petroleo,
    nombre: "Ingeniería en Petróleo",
    nombrecorto: "Petróleo",
    finDeCarrera: [
      { id: "tesis", materia: "79.00" },
      { id: "tpp", materia: "79.99" },
    ],
    creditos: {
      total: 246,
      obligatorias: 216,
      electivas: { tesis: 12, tpp: 16 },
      checkbox: [
        {
          nombre: "Práctica Supervisada",
          nombrecorto: "PS",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          nombre: "Prueba de nivel de idioma inglés",
          nombrecorto: "Inglés",
          bg: COLORS.enfinal[50],
          color: "enfinal",
        },
      ],
    },
  },
  {
    id: "quimica",
    link: "http://www.fi.uba.ar/es/node/306",
    graph: data.quimica,
    nombre: "Ingeniería Química",
    nombrecorto: "Química",
    finDeCarrera: [
      { id: "tesis", materia: "76.64" },
      { id: "tpp", materia: "76.59-76.62" },
    ],
    creditos: {
      total: 252,
      obligatorias: 216,
      electivas: { tesis: 18, tpp: 24 },
    },
  },
  {
    id: "sistemasviejo",
    link: "http://www.fi.uba.ar/es/node/307",
    graph: data.sistemasviejo,
    nombre: "Licenciatura en Análisis de Sistemas (1986)",
    nombrecorto: "Sistemas (1986)",
    creditos: {
      total: 170,
      obligatorias: 130,
      electivas: 40,
    },
  },
];

export default CARRERAS;
