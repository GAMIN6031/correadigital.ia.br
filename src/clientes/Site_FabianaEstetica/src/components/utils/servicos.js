import { 
  FiSmile, 
  FiStar, 
  FiHeart, 
  FiFeather, 
  FiActivity, 
  FiSun, 
  FiDroplet, 
  FiScissors, 
  FiTrendingUp, 
  FiZap 
} from "react-icons/fi";

export const servicos = [
  {
    id: "serv-01",
    titulo: "Harmonização Facial",
    icone: FiSmile,
    categoria: "Popular",
    descricao: "Procedimento que equilibra os traços do rosto, realçando a beleza natural com técnicas modernas."
  },
  {
    id: "serv-02",
    titulo: "Preenchimento Labial",
    icone: FiStar,
    categoria: "Tendência",
    descricao: "Tratamento para aumentar o volume e definir o contorno dos lábios, proporcionando aspecto jovem e saudável."
  },
  {
    id: "serv-03",
    titulo: "Tratamentos Corporais",
    icone: FiActivity,
    categoria: "Premium",
    descricao: "Protocolos personalizados para reduzir medidas, melhorar a firmeza da pele e promover bem-estar."
  },
  {
    id: "serv-04",
    titulo: "Peelings e Rejuvenescimento",
    icone: FiFeather,
    categoria: "Essencial",
    descricao: "Tratamentos que renovam a pele, suavizam manchas e linhas finas, trazendo luminosidade e frescor."
  },
  {
    id: "serv-05",
    titulo: "Protocolos de Emagrecimento e Bem-estar",
    icone: FiHeart,
    categoria: "Funcional",
    descricao: "Planos integrados para perda de peso saudável, combinando estética e qualidade de vida."
  },
  {
    id: "serv-06",
    titulo: "Toxina Botulínica (Botox)",
    icone: FiZap,
    categoria: "Sob Medida",
    descricao: "Aplicação de toxina botulínica para suavizar rugas e linhas de expressão, com resultados naturais."
  },
  {
    id: "serv-07",
    titulo: "Criolipólise",
    icone: FiDroplet,
    categoria: "Tecnológico",
    descricao: "Tratamento que elimina gordura localizada através do congelamento controlado das células adiposas."
  },
  {
    id: "serv-08",
    titulo: "Reposição de Vitaminas",
    icone: FiSun,
    categoria: "Vitalidade",
    descricao: "Terapia que repõe nutrientes essenciais para energia, imunidade e saúde da pele e cabelos."
  },
  {
    id: "serv-09",
    titulo: "Harmonização de Glúteo",
    icone: FiTrendingUp,
    categoria: "Estético",
    descricao: "Procedimento para melhorar o contorno e a proporção dos glúteos, valorizando a silhueta corporal."
  },
  {
    id: "serv-10",
    titulo: "Terapia Capilar",
    icone: FiScissors,
    categoria: "Capilar",
    descricao: "Tratamentos que fortalecem os fios, combatem a queda e estimulam o crescimento saudável do cabelo."
  },
];

// importa as imagens com caminho relativo
import Imagem1 from "../../assets/Imagem1.jpeg";
import Imagem2 from "../../assets/Imagem2.jpeg";
import Imagem3 from "../../assets/Imagem3.jpg";
import Imagem4 from "../../assets/Imagem4.jpg";

export const projetos = [
  {
    src: Imagem1,
    link: "https://www.instagram.com/p/DVY2aOAgFSn/",
  },
  {
    src: Imagem2,
    link: "https://www.instagram.com/drafabianacatarino/",
  },
  {
    src: Imagem3,
    link: "https://www.instagram.com/p/DTaxirggAma/",
  },
  {
    src: Imagem4,
    link: "https://www.instagram.com/p/DSYnTsTAOm2/",
  }
];
