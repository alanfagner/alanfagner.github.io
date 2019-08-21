import myPicture from "../assets/img/myPicture.jpeg";

export interface User {
  name: string;
  describle: string;
  linkedin: string;
  picture: string;
  summary: string;
  dtInitWork: string;
  skills: TypeSkill;
  expPro: ExpProf[];
}

export interface ExpProf {
  id: number;
  name: string;
  describeEmp: string;
  local: string;
  initDt: Date;
  fimDt: Date;
  describe: string;
}
interface TypeSkill {
  backend: Skill[];
  frontend: Skill[];
  mobile: Skill[];
}
export interface SubSkill {
  describe: string;
  value: number;
  color: string;
}

export interface Skill {
  describe: string;
  subSkill: SubSkill[];
}

export const user: User = {
  name: "Alan Fagner Goncalves",
  describle:
    "Analise e desenvolvimento de sistemas back-end, front-end e mobile hibrido",
  picture: myPicture,
  linkedin: "https://www.linkedin.com/in/alan-fagner-goncalves/?locale=en_US",
  summary:
    "Me chamo Alan Fagner Gonçalves (caso não tenha ficado claro), sou natural de Araraquara/SP, Bacharelado na area de tecnologia da informação estou a {0} anos no mercado de analise e desenvolvimento de software. \n\n Eu trabalhei em algumas empresas aqui de Araraquara, das quais me orgulho muito. Fiz parte de ótimas equipes, tive colegas fantásticos que me ensinaram muito, e graças a eles carrego comigo todo o conhecimento que tenho hoje. \n\nNo momento o back-end e minha principal area, com ampla experiencia na analise e desenvolvimento de sistemas, foco nas linguagem de programação JAVA, NODE-JS para backend e para frontend react e angular, na programação mobile gosto de utilizar as plataformas híbridas com react-native, xamarin e ionic com ênfase em react-native.",
  dtInitWork: "20140101",
  skills: {
    backend: [
      {
        describe: "Java",
        subSkill: [
          { describe: "LIFERAY", value: 70, color: "#795548" },
          { describe: "SPRING", value: 50, color: "#f44336" },
          { describe: "HIBERNATE", value: 50, color: "#673ab7" },
          { describe: "EJB", value: 12, color: "#00bcd4" },
          { describe: "CDI", value: 12, color: "#00bcd4" },
          { describe: "JSF", value: 40, color: "#4caf50" },
          { describe: "WICKET", value: 20, color: "#ffeb3b" }
        ]
      },
      {
        describe: "Node Js",
        subSkill: [
          { describe: "EXPRESS", value: 10, color: "#0088FE" },
          { describe: "NODEMON", value: 10, color: "#FFBB28" }
        ]
      },
      {
        describe: "Python",
        subSkill: [{ describe: "FLASK", value: 100, color: "#0088FE" }]
      }
    ],
    frontend: [
      {
        describe: "",
        subSkill: [
          { describe: "JAVASCRIPT", value: 100, color: "#f44336" },
          { describe: "JQUERY", value: 50, color: "#673ab7" },
          { describe: "REACT", value: 50, color: "#00bcd4" },
          { describe: "ANGULAR", value: 20, color: "#4caf50" },
          { describe: "VUE-JS", value: 20, color: "#ffeb3b" },
          { describe: "CSS", value: 12, color: "#795548" }
        ]
      }
    ],
    mobile: [
      {
        describe: "",
        subSkill: [
          { describe: "REACT NATIVE", value: 60, color: "#0088FE" },
          { describe: "IONIC", value: 20, color: "#00C49F" },
          { describe: "XAMARIN", value: 40, color: "#FFBB28" },
          { describe: "IOS", value: 10, color: "#FF8042" },
          { describe: "ANDROID", value: 10, color: "#FF8042" }
        ]
      }
    ]
  },
  expPro: [
    {
      id: 1,
      name: "Entelgy Brasil",
      describeEmp:
        "Entelgy é um grupo inovador de Consultoria, Outsourcing e Tecnologia de âmbito internacional, tendo como missão aportar a maior satisfação aos seus Clientes e Profissionais.",
      local: "Araraquara/BR",
      initDt: new Date(2016, 9, 1),
      fimDt: new Date(2019, 2, 1),
      describe:
        "Durante meu periodo na empresa a minha principal atividade foi analise e desenvolvimento de sistemas web customizadas para o cms liferay.\n - Tecnologias utilizadas: java, python, spring portlet, spring core, liferay mvc portlet, jsf, javascript, alloy ui, angular, docker, jenkins, sonar. \n- Metodologia: Scrum. \n- Projetos: Visa Main Portal, VoeGol, Amex, Lendico, Moderna, Grupo Libra Portal \n- Versionamento: git, bitbucket"
    },
    {
      id: 2,
      name: "Cast IT Group",
      describeEmp:
        "Cast group é uma empresa global de soluções em Ti end-to-end com experiência em grandes projetos para as áreas privada e pública, atuando com consultoria de TI, outsourcing de desenvolvimento, aplicações, infraestrutura, implementação de ERP, BI, HCM, CRM, Fiscal, etc. Parceiros: SAP, Oracle, IBM, Siemens, Equinix...",
      local: "Araraquara/BR",
      initDt: new Date(2014, 3, 1),
      fimDt: new Date(2016, 9, 1),
      describe:
        "A minha principal atividade como desenvolvedor na cast foi criação e manutenção de sistemas web, na maioria dos projetos a cast usa sua própria metodologia de cascata para desenvolvimento de software, em alguns casos era utilizado o scrum, com a metodologia cascata o caso de uso estava pronto para ser desenvolvido..\n - Tecnologias utilizadas: Java, Spring Boot, Spring Core, Jersey, Ejb, Cdi, Jsf, Strutus, Hibernate, Wicket, RichFaces, PrimeFaces, Omnifaces, iReport, iText, Maven, Gradle, Tomcat, Jetty, JBoss, Glassfish, jenkins, sonar\n- Metodologia: Cascata, Scrum. \n- Projetos: FINEP - 30 Dias Pesquisa, IFN - Inventário Florestal Nacional, INEP ADM - Controle de Contratos, INEP-RH - Recursos Humanos, SEPOG - Sistema de Aposentadoria Fortaleza, SEPOG - Averbação Fortaleza, SEPOG - Carga-horario Fortaleza, SEPOG - Direitos e Vantagens Fortaleza, SEPOG - ATOS-SISAUD/SUS - Sistema de Auditoria do SUS, SGC - Sistema de Gestão de Contratos, SISCAN - Sistema de Informação de Câncer, SISDC - Sistema de Direito e Cidadania, SISPROADI-SUS - Sistema de Gestão de Projetos do Programa de Apoio ao Desen-volvimento Institucional do SUS, SNAGERENCIAL - Sistema de Apoio a Gestão do SNA. \n- Versionamento: svn, git"
    },
    {
      id: 3,
      name: "Hewlett Packard",
      describeEmp:
        "A Hewlett-Packard Enterprise (HPE) oferece, no mundo todo, soluções, produtos e serviços para TI, tecnologia e empresas.",
      local: "Araraquara/BR",
      initDt: new Date(2013, 3, 1),
      fimDt: new Date(2014, 3, 1),
      describe:
        "Execução, criação e manutenção de script pl-sql, monitoramento SGBD oracle.\n - Tecnologias utilizadas: pl/Sql, Cobol."
    }
  ]
};
