import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function About() {
  return (
    <section className="mt-14 lg:mt-0">
      <h1 className="uppercase font-bold text-sm">Sobre</h1>
      <div className="mt-8 text-sm font-extralight flex flex-col gap-4 max-w-[95%] lg:text-base text-slate-300">
        <p>
          Graduado em Sistemas para Internet, atuo como desenvolvedor frontend
          mobile na IBM, utilizando React Native e um pouco de SwiftUI nos
          projetos do Banco do Brasil. Atuo no app central do banco,
          especificamente no bundle de Investimentos. Sou responsável por
          implementar novas features e trazer melhorias para o app.
        </p>
        <p>
          Possuo experiência com Reactjs, Nextjs, Typescript, Javascript,
          Tailwind, Firebase entre outras tecnologias. Além disso, possuo
          expertise em design gráfico e uma sólida compreensão dos princípios de
          design, tipografia, paleta de cores e layout.
        </p>

        <p>
          Minha experiência inclui o uso de ferramentas de design como Adobe
          Photoshop, Figma e Corel Draw, permitindo-me trazer melhorias para uma
          entrega de qualidade. Estou sempre em busca de aprimoramento contínuo,
          mantendo-me atualizado com as últimas tendências e tecnologias. Tenho
          uma paixão por aprender e adquirir novas habilidades, o que me permite
          enfrentar desafios com entusiasmo e adaptabilidade.
        </p>
      </div>
    </section>
  );
}
